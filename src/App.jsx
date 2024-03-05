import React, { useEffect, useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";

const App = () => {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(val) {
    if(!tasksItems.find(task=> task.name ===  val)){
      setTasksItems([...tasksItems, {name: val, done: 'false'}])
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? {...t, done: !t.done} : t))
    );
  }

  useEffect(()=> {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasksItems))
    }, [tasksItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/> 

      <div>
        <input type="checkbox" onChange={e => setShowCompleted(!showCompleted) }/> <label>Show Task Done</label>
      </div>

      {
        showCompleted && (
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/> 
        )
      }

    </div>
  );
};

export default App;
