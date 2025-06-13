import React, {useState} from 'react';
import './PopUp.css';

export default function PopUp({onClose,onAdd}){

    const [Task,setTask] = useState("");
    function handleTask(){
        onAdd(Task.trim());
    }
    return(
    <div className='Container'>
        <div  className='Sub'>
             <h2>Add Task</h2>
             <button className='Close' onClick={onClose}>X</button>
             <input type='text' placeholder='Enter a task' value={Task} onChange={(e) => setTask(e.target.value)} />
             <button className='AddTask' onClick={handleTask}>Add</button>

        </div>
    </div>
    );
}