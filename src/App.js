// import './App.css';
import Content from "./component/Content";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React, { useEffect, useState } from "react";
import AddItem from "./component/AddItem";
import SearchItem from "./component/SearchItem";
import apiRequest from "./component/apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [fetchError, setfetchError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setItems(listItems);
        setfetchError(null);
      } catch (err) {
        setfetchError(err.message);
      }
    };
    (async () => await fetchItems())();
  }, []);


  const handleChange = async (id) => {
    const listItems = items.map((y) =>
      y.id === id ? { ...y, checked: !y.checked } : y
    );
    setItems(listItems);

    // ----------------------------
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setfetchError(result);
    }
  };
  

  const handleDelete = async (id) => {
    const listItems = items.filter((z) => z.id != id);
    setItems(listItems);
    // ------------------
    const deleteOptions = {
      method: "DELETE",
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {
      setfetchError(result);
    }
  };

  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);

    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setfetchError(result);
    }
  };

  const [search, setSearch] = useState("");
  return (
    <div>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        <Content
          items={items.filter((x) =>
            x.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

// npx json-server -p 3500 -w data/db.json
export default App;
