import "./styles.css";
import {useState} from 'react'

function Todos() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  function addTask(params) {
    const newTodoList = [...todoList, newTask]
    setTodoList(newTodoList)
  }

  function handleInput(event) {
    setNewTask(event.target.value)
  }

  return(
    <div>
      <input onChange={handleInput} />
      <button onClick={addTask}>Add task</button>
      <div>
        {todoList.map((task, key) =>
          <p key={key}>{task}</p>
        )}
      </div>
    </div>
  )
    
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Todos />
    </div>
  );
}
