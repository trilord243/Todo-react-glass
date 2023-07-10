import React from 'react'

function TodoItem({ text, completed }) {
    return (
        <li>
            <span>👌</span>



            {text}

            <span>❌</span>

        </li>
    )
}

export default TodoItem