import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";
import { mockTodos } from "./data/mockTodos";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

type Filter = "all" | "active" | "completed"

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const loadTodo = localStorage.getItem("todos");
    if (loadTodo) setTodos(JSON.parse(loadTodo));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterArr = ["all", "active", "completed"];

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTodos = todos
    .filter((t) =>
      t.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start sm:justify-center
      bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors py-10 px-4"
    >
      {/* Theme Toggle */}
      <div className="flex justify-end w-full max-w-2xl mb-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Todo App Container */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <Header search={search} setSearch={setSearch} />

        {/* Todo Input */}
        <TodoInput onAdd={addTodo} />

        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            {filterArr.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as Filter)}
                className={`px-4 py-1 rounded-lg font-medium transition
                  ${filter === f
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          setTodos={setTodos}
        />

        {/* Footer */}
        <Footer todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
