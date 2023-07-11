import React from 'react'
import "../styles/TodoItem.css"
function TodoItem({ text, completed, onComplete, onDelete }) {
    return (

        <li >
            <span className='check ' >
                <span className={`circle ${completed ? "circle-active" : ""}     }  `} onClick={onComplete}  ></span>
            </span>



            <p className={`${completed ? "TodoItem-completed " : ""} `} > {text} </p>

            <span className='x x--delete' onClick={onDelete}  >X</span>

        </li>
    )
}

export default TodoItem