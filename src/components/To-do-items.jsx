import React from "react";
import { useState } from "react";



function ToDoItem(props) {

    const [isClicked, updateClick] = useState(false);

    function handleClick() {
        updateClick(prevValue=> {
            return !prevValue;
        })
    }
    

    return (
        <div onClick={handleClick} >

            <li  style={{ textDecoration: isClicked ? "line-through" : "none"}} >
                {props.text}
            </li>
         
        </div>
    
    );
}

export default ToDoItem;