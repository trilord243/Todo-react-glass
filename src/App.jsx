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


function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]))
    parsedTodos = []
  } else {

    parsedTodos = JSON.parse(localStorageTodos);
  }





  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(parsedTodos);

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)


  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)


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
