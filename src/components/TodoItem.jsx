import React from 'react'
import "../styles/TodoItem.css"
function TodoItem({ text, completed }) {
    return (

        <li >
            <span className='check ' >
                <span className={`circle ${completed ? "circle-active" : ""}     }  `} ></span>
            </span>



            <p className={`${completed ? "TodoItem-completed " : ""} `} > {text} </p>

            <span className='x x--delete'  >X</span>

        </li>
    )
}

export default TodoItem