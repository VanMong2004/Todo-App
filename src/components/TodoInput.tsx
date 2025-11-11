import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Nhập công việc..."
        className="flex-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
          bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400
          dark:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
      <button
        onClick={handleAdd}
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm
          transition active:scale-95"
      >
        Thêm
      </button>
    </div>
  );
}
