import React from "react";
import ListItems from "./ListItems";



const Content = ({items, handleChange, handleDelete}) => {

 
  return (
    <div className="content">
      {(items.length)?(
        <ListItems
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
        />

      ):(<p>Your list is empty</p>)}
    </div>
  );
}

export default Content