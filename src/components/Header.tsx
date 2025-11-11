type Props = {
  search: string;
  setSearch: (title: string) => void;
};

export default function Header({ search, setSearch }: Props) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        My Todo App
      </h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Tìm kiếm..."
        className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
          bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-400
          focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
    </header>
  );
}
