export type Priority = "low" | "medium" | "high";

export type Todo = {
  id: string; // định danh duy nhất (uuid)
  title: string; // tiêu đề bắt buộc
  description?: string; // mô tả tùy chọn
  createdAt: string; // thời gian tạo (ISO)
  dueDate?: string | null; // hạn chót (nếu có)
  priority?: Priority; // mức ưu tiên
  completed: boolean; // đã hoàn thành?
};
