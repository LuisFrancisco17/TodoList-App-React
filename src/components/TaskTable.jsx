import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
