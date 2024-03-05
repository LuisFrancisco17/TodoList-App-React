import React, { useEffect, useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from './components/Container'

const App = () => {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(val) {
    if (!tasksItems.find((task) => task.name === val)) {
      setTasksItems([...tasksItems, { name: val, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const cleanTask = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
      <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
};

export default App;
