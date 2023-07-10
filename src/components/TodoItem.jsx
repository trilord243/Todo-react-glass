import React from 'react'
import "../styles/TodoItem.css"
function TodoItem({ text, completed }) {
    return (

        <li >
            <span className='check'></span>



            <p> {text} </p>

            <span className='x'  >X</span>

        </li>
    )
}

export default TodoItem