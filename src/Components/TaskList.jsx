export default function Tasklist(props) {
    const toggleComplete = (index)=>{
        const updatedTask = {...props.tasks[index], completed: !props.tasks[index].completed};
        props.updateTask(updatedTask, index);
    }

    return (
        <ul className="task-list">
            {props.tasks.map((task, index)=> (
            <li key={index} className={task.completed ? "completed": ""}>
                <div>
                    <span>{task.text}
                    <small>({task.priority} , {task.category})</small>
                    </span>
                </div>

                <div>
                    <button onClick={() => toggleComplete(index)}>
                    {task.completed ? "Undo" : "Complete"}</button>
                    <button onClick={() => props.deleteTask(index)}>Delete</button>
                </div>
            </li>
            ))}
        </ul>
    )
}