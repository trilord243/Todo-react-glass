import { useEffect, useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import "./styles/app.css"
import { useLocalStorage } from "./customHooks/UseLocalStorage";
import TodoLoading from "./components/TodoLoading";
import TodoError from "./components/TodoError";

function App() {


  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);





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
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <p> Crea tu primer TODO!</p>}



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
