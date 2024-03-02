import React, { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";

const App = () => {

  const [tasksItems, setTasksItems] = useState([
    {name : 'primera tarea', done: false},
    {name : 'segunda tarea', done: false},
    {name : 'tercera tarea', done: false}
  ])

  function createNewTask(val) {
    if(!tasksItems.find(task=> task.name ===  val)){
      setTasksItems([...tasksItems, {name: val, done: 'false'}])
    }
  }

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
