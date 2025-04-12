import React, { useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask, setFilter }) {

  useEffect(() => {
    const checkForReminders = () => {
      tasks.forEach((task) => {
        const currentTime = new Date();
        const reminderTime = new Date(task.reminderTime);

        // Check if the reminderTime is 5 minutes before the task time and notify
        if (reminderTime <= currentTime && reminderTime > new Date(currentTime.getTime() - 5 * 60 * 1000)) {
          alert(`Reminder: Task "${task.name}" is in 5 minutes!`);
        }
      });
    };

    // Check every minute
    const interval = setInterval(checkForReminders, 60 * 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [tasks]);

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="todo">To-Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
