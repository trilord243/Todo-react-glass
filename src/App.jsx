import { useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import "./styles/app.css"
/*
const defaultTodos = [
  {
    text: 'Cortar cebolla', completed: false
  }, {
    text: 'xdxdxd', completed: false
  }, {
    text: 'XDXDXDXDXDXDXD', completed: false
  }, {
    text: 'Ya termino', completed: false
  },
]



localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
*/
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {

    parsedItem = JSON.parse(localStorageItem);
  };

  const [item, setItem] = useState(parsedItem);
  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  return [item, saveItem];

}

function App() {


  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);





  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));




  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)


  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)


  }

  return (
    <div className="card" >
      <TodoCounter completed={completedTodos} total={totalTodos} className="tittle" />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}

      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => { deleteTodo(todo.text) }}


          />
        ))}
      </TodoList>
      <CreateTodoButton />


    </div>

  )
}


export default App
