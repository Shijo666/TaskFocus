import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist.jsx";
import Progresstracker from "./Components/Progresstracker";

function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}

export default App;