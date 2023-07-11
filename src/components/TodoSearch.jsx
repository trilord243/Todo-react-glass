

import "../styles/TodoSearch.css"
function TodoSearch({ searchValue, setSearchValue }) {

    return (
        <input placeholder="Cortar Cebolla" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
    )
}

export default TodoSearch