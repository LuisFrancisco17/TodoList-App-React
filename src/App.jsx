import React, { useEffect, useState } from "react";
import { TaskCreator } from "./components/TaskCreator";

const App = () => {

  const [tasksItems, setTasksItems] = useState([])

  function createNewTask(val) {
    if(!tasksItems.find(task=> task.name ===  val)){
      setTasksItems([...tasksItems, {name: val, done: 'false'}])
    }
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
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
            {
            tasksItems.map( item =>(
              <tr key={item.name}>
                <td> {item.name} </td>
              </tr> ))
            }
        </tbody>
      </table>
      
    </div>
  );
};

export default App;
