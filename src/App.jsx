import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("todo");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => task.category === filter);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
