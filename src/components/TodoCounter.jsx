import React from 'react'

function TodoCounter({ total = 1, completed = 0 }) {
    return (
        <h2>Has completado {completed} de {total} TODOs</h2>
    )
}

export default TodoCounter