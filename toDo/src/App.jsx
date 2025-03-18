import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar JavaScript",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Estudar CSS",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {tasks.map((task) => (
          <div className="todo">
            <div className="content">
              <p>{task.text}</p>
              <p className="Category">({task.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
