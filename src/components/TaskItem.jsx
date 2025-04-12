import React from "react";

function TaskItem({ task, updateTask, deleteTask }) {
  const handleComplete = () => {
    updateTask(task.id, { ...task, category: "completed" });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      <span>{task.name}</span> - {task.date} at {task.time}
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
