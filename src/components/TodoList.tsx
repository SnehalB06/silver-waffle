import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletdChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onCompletdChange, onDelete }: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletdChange={onCompletdChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className=" text-center text-sm text-gray-500">
          No Todos Yet!!! Add a new one above!
        </p>
      )}
    </>
  );
}

export default TodoList;
