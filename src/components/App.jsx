import React, { useState } from "react";
import ToDoItem from "./To-do-items";
import InputArea from "./InputArea";

function App() {
 
  const [items, updateItem] = useState([]);

  

  function addList(listItem) {
    updateItem(prevItems => {
      return [...prevItems, listItem];
    });

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputArea onAdd={addList}/>
      
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
