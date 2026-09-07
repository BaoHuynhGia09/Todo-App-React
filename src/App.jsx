import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TableTask from "./components/TableTask";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState("all");

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const handleClick = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleSubmit = (title) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  };

  const handleFilter = (action) => {
    setFilter(action);
  };

  let filteredTodos = todos;

  if (filter === "done") {
    filteredTodos = todos.filter((todo) => todo.completed);
  } else if (filter === "not") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <section className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-16">
            Todo CheckList
          </h1>

          <Input onSubmit={handleSubmit} />

          <Filter filter={filter} onFilter={handleFilter} />

          <div>
            <TableTask
              todos={filteredTodos}
              onToggle={handleToggle}
              onClick={handleClick}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
