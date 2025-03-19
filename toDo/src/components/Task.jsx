import React from "react";

const Task = ({ task, removeTask, completeTask }) => {
  return (
    <div
      className="todo-list"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      <div className="todo">
        <div className="content">
          <p>{task.text}</p>
          <p className="Category">({task.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTask(task.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTask(task.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
