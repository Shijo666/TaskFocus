import React, { useState } from 'react'

export default function Taskform(props) {
    const[task, setTask] = useState("");
    const[priority, setPriority] = useState("medium");
    const[category, setCategory] = useState("general");

    const handlesubmit = (e) => {
        e.preventDefault();
        props.addTask({text: task, priority, category, completed: false});
        setTask("");
        setPriority("medium");
        setCategory("general");
    }
    return (
        <form action="" onSubmit={handlesubmit}>
            <div>
                <input type="text" placeholder="Enter the Task" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="submit">Add Task</button>
            </div>

            <div>
                <select name="" id="" onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select name="" id="" onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>

            {/* <p>{task} {priority} {category}</p> */}
        </form>
    )
}
