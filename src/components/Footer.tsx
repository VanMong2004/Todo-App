import type { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  setTodos: (value: Todo[]) => void;
};

export default function Footer({ todos, setTodos }: Props) {
  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700
        pt-3 mt-4 gap-2"
    >
      <span className="text-gray-700 dark:text-gray-200 font-medium">
        {remaining} công việc còn lại
      </span>
      <button
        onClick={() => setTodos(todos.filter((t) => !t.completed))}
        className="px-3 py-1 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-800 transition font-medium"
      >
        Xóa completed
      </button>
    </div>
  );
}
