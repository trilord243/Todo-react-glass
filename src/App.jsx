import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import "./styles/app.css"

const defaultTodos = [
  {
    text: 'Cortar cebolla', completed: true
  }, {
    text: 'xdxdxd', completed: true
  }, {
    text: 'XDXDXDXDXDXDXD', completed: true
  }, {
    text: 'Ya termino', completed: true
  },
]
function App() {


  return (
    <div className="card" >
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}

          />
        ))}
      </TodoList>
      <CreateTodoButton />


    </div>

  )
}


export default App
