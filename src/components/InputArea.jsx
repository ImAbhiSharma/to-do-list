import React,{useState} from "react";


function InputArea(props){

    const [listItem, updateList] = useState("");


    function handleList(event) {
        const newItem = event.target.value;
        updateList(newItem);
      }
    
    return (
        
        <div className="form">
            <input onChange={handleList} type="text" value={listItem} />
            <button onClick={() =>{
            props.onAdd(listItem);
            updateList("");
         }}>
            
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;