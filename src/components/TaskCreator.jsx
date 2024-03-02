import React, { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    localStorage.setItem("Task", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese texto"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
}
