import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [category, setCategory] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse the taskDate and taskTime into a Date object
    const taskDateTime = new Date(`${taskDate}T${taskTime}`);

    // Calculate reminder time (5 minutes before the task time)
    const reminderTime = new Date(taskDateTime.getTime() - 5 * 60 * 1000); // 5 minutes before

    const newTask = {
      id: Date.now(),
      name: taskName,
      date: taskDate,
      time: taskTime,
      category,
      reminderTime,  // Add reminder time to task object
    };

    addTask(newTask);
    setTaskName("");
    setTaskDate("");
    setTaskTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        required
      />
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="todo">To-Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
