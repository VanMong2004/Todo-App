import type { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export const mockTodos: Todo[] = [
  {
    id: uuidv4(),
    title: "Học React cơ bản",
    description: "Hoàn thành phần component & props",
    createdAt: new Date().toISOString(),
    dueDate: null,
    priority: "medium",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Tìm hiểu Tailwind CSS",
    createdAt: new Date().toISOString(),
    completed: true,
    priority: "low",
  },
];
