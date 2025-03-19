import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      alert("Preencha todos os campos");
      return;
    }
    addTask(value, category);
    setCategory("");
    setValue("");
  };

  return (
    <div className="task-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o Título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
        </select>
        <button type="submit"> Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TaskForm;
