import React, { useState } from "react";
import ToDoItem from "./To-do-items";

function App() {
  const [listItem, updateList] = useState("");
  const [items, updateItem] = useState([]);

  function handleList(event) {
    const newItem = event.target.value;
    updateList(newItem);
  }

  function addList() {
    updateItem(prevItems => {
      return [...prevItems, listItem];
    });

    updateList("");
   
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleList} type="text" value={listItem} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      
      <ul>
          {
            items.map((todoItem) => (
        
            <ToDoItem text={todoItem} />
            )
         )}

      </ul>

    </div>
  );
}

export default App;
