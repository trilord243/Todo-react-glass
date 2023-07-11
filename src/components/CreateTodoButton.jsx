import React from 'react'
import "../styles/button.css"
function CreateTodoButton() {
    return (
        <button className='TodoButton' onClick={() => { console.log("Le diste un click") }} > +  </button>
    )
}

export default CreateTodoButton