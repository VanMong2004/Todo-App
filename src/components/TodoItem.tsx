import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function TodoItem({ todo, onDelete, onToggle }: Props) {
  const { id, title, completed } = todo;

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md border border-gray-100
        dark:border-gray-700 bg-gray-50 dark:bg-gray-700 transition
        hover:bg-gray-100 dark:hover:bg-gray-600`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition"
        />
        <span
          className={`text-lg transition ${
            completed ? "line-through text-gray-400 dark:text-gray-400" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {title}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700 font-medium px-3 transition"
      >
        Xóa
      </button>
    </div>
  );
}
