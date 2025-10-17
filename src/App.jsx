import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist.jsx";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }
  
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
      <Progresstracker tasks={tasks}/>
      <button>Clear all Tasks</button>
    </div>
  )
}

export default App;