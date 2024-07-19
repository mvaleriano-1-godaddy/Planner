import {useState} from "react";
import "./Check.css";

function Check(){
    const [tasks, setTasks] = useState([]);
    const  [completedTasks, setCompletedTasks] = useState([]);
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("top");
    const [deadline, setDeadline] = useState("");

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };

    const addTask = () =>{
        if (task.trim() === "" || deadline ===""){
            alert("Please enter a task");
            return;
        }
        const selectedDate = new Date (deadline);
        const currentDate = new Date();

        if (selectedDate <= currentDate){
            alert("Please select a future date");
            return
        }
        const newTask = {
            id: task.length +1,
            task, 
            priority,
            deadline,
            done: false,
        };
        setTasks([...tasks, newTask]);

        setTask("");
        setPriority("Top");
        setDeadline("");
    };

    const markDone = (id) => {
        const updatedTask = tasks.map((t) =>
            t.id === id ? { ...t, done: true } : t
        );
        setTasks(updatedTask);

        const completedTask = tasks.find((t) => t.id === id);
        if (completedTask){
            setCompletedTasks([...completedTasks, completedTask]);
        }
    };
    const upcomingTasks = tasks.filter((t) => !t.done);
    return (
        <div className ="App">
            <header>
                <h1>Task checklist</h1>
            </header>
            <main>
                <div className="task-form">
                    <input
                        type="text"
                        id="task"
                        placeholder="Enter task..."
                        value = {task}
                        onChange={handleTaskChange}
                    />
                    <select
                            id="priority"
                            value={priority}
                            onChange = {handlePriorityChange}
                            >
                                <option value = "top">Due soon</option>
                                <option vlaue = "middle">Its coming</option>
                                <option value = "low">Due for a while</option>
                            </select>
                            <input
                                type="date"
                                id="deadline"
                                value={deadline} 
                                onChange={handleDeadlineChange} 
                            /> 
                             <button id="add-task" onClick={addTask}> 
                                 Add Task 
                            </button> 
                </div> 
                        <h2 className="heading">Upcoming Tasks</h2> 
                <div className="task-list" id="task-list"> 
                    <table> 
                        <thead> 
                            <tr> 
                                <th>Task Name</th> 
                                <th>Priority</th> 
                                <th>Deadline</th> 
                                <th>Action</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                            {upcomingTasks.map((t) => ( 
                                <tr key={t.id}> 
                                    <td>{t.task}</td> 
                                    <td>{t.priority}</td> 
                                    <td>{t.deadline}</td> 
                                    <td> 
                                        {!t.done && ( 
                                            <button 
                                                className="mark-done"
                                                onClick={() => markDone(t.id)} 
                                            > 
                                                Mark Done 
                                            </button> 
                                        )} 
                                    </td> 
                                </tr> 
                            ))} 
                        </tbody> 
                    </table> 
                </div> 
                <div className="completed-task-list"> 
                    <h2 className="cheading">Completed Tasks</h2> 
                    <table> 
                        <thead> 
                            <tr> 
                                <th>Task Name</th> 
                                <th>Priority</th> 
                                <th>Deadline</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                        {completedTasks.map((ct) => ( 
                                <tr key={ct.id}> 
                                    <td>{ct.task}</td> 
                                    <td>{ct.priority}</td> 
                                    <td>{ct.deadline}</td> 
                                </tr> 
                            ))} 
                        </tbody> 
                    </table> 
                </div> 
            </main> 
        </div> 
    ); 
} 
  
export default Check;