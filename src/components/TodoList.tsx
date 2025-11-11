import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

type Props = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  setTodos: (todos: Todo[]) => void;
};

type DropResult = {
  draggableId: string;
  type: string;
  source: {
    index: number;
    droppableId: string;
  };
  destination: {
    index: number;
    droppableId: string;
  } | null;
};

export default function TodoList({
  todos,
  onDelete,
  onToggle,
  setTodos,
}: Props) {

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return; // thả ngoài vùng, không làm gì
    if (destination.index === source.index) return; // không đổi vị trí

    const items = Array.from(todos); // copy mảng todos
    const [removed] = items.splice(source.index, 1); // lấy item ở vị trí cũ
    items.splice(destination.index, 0, removed); // chèn vào vị trí mới

    setTodos(items); // cập nhật state để React render lại
  };
  

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        Chưa có công việc nào.
      </p>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            className="space-y-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((t, index) => (
              <Draggable key={t.id} draggableId={t.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem
                      todo={t}
                      onDelete={onDelete}
                      onToggle={onToggle}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
