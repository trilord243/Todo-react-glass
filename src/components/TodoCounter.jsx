import React from 'react'
import "../styles/TodoCounter.css"
function TodoCounter({ total = 1, completed = 0 }) {
    return (
        <>

            <h1>Todo-List</h1>
            <h2>Has completado {completed} de {total} tareas</h2>
        </>
    )
}

export default TodoCounter