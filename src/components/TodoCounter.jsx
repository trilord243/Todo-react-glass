import React from 'react'
import "../styles/TodoCounter.css"
function TodoCounter({ total, completed }) {

    const todoCompleted = () => {
        if (total === 0) {
            return <h2>¡No hay tareas!</h2>
        } else if (total == completed && total != 0) {
            return <h2>¡Felicidades! Completaste todas tus tareas🎇🎆</h2>
        } else {
            return <h2>Has completado {completed} de {total} tareas</h2>
        }
    }




    return (
        <>

            <h1>Todo-List</h1>
            {todoCompleted()}
        </>
    )
}

export default TodoCounter