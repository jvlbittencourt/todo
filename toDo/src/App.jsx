import { useState } from "react";
import Task from "./components/Task";

import "./App.css";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("A-Z");

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
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="task-list">
        {tasks
          .filter((task) =>
            filter === "all"
              ? true
              : filter === "completed"
              ? task.isCompleted
              : !task.isCompleted
          )
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "A-Z"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((task) => (
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
