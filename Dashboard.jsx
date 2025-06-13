import React, { useState,useContext } from 'react';
import PopUp from './PopUp';

export default function Dashboard() {
    const [activity, setActivity] = useState(["Wake Up", "Brush"]);
    const [completed, setCompleted] = useState([]);
    const [view, setView] = useState("all");
    const [showPopUp, setPopUp] = useState(false);
    const [DailyCompleted,setDailyCompleted] = useState([]);

    const displayedActivities = 
        view === "completed" ? completed :
        view === "pending" ? activity.filter(act => !completed.includes(act)) :
        activity;

    function handleDone(index) {
        const doneTask = displayedActivities[index];
        if (!completed.includes(doneTask)) {
            setCompleted([...completed, doneTask]);
        }
    }

    function handleAdd(Task) {
        setActivity([...activity,Task]);
        setPopUp(false);
    }

    return (
        <div className='Main'>
            <div className='Sidebar'>
                <div className='Side-bg'>
                    <button className='Activity' onClick={() => setView("all")}>Today's Activities</button>
                    <button className='Completed' onClick={() => setView("completed")}>Completed</button>
                    <button className='Pending' onClick={() => setView("pending")}>Pending</button>
                    <button className='Progress'>Progress</button>
                </div>
            </div>

            <div className='Main-container'>
                <ul className='OrdList'>
                    {displayedActivities.map((task, index) => (
                        <li key={index} className='List'>
                            {view !== "completed" && (
                                <button className='Done' onClick={() => handleDone(index)}>{task}</button>
                            )}
                            {view === "completed" && <span className='CompletedSpan'>{task}</span>
                            }
                        </li>
                    ))}
                </ul>
                <button className='Add' onClick={() => setPopUp(true)}>+</button>

                {showPopUp && (
                    <div className='Blur'>
                        <PopUp 
                            onClose={() => setPopUp(false)}
                            onAdd={handleAdd}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
