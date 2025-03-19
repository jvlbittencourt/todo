import { useState } from "react";
import Task from "./components/Task";

import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const completeTask = (taskId) => {
    const newTodos = [...tasks];
    newTodos.map((task) => {
      task.id === taskId ? (task.isCompleted = !task.isCompleted) : task;
      setTasks(newTodos);
    });
  };

  const addTask = (text, category) => {
    const newTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];

    setTasks(newTasks);
  };
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ))}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
