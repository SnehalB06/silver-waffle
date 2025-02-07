import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompeted: () => void;
}

function TodoSummary({ todos, deleteAllCompeted }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} Todos Competed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompeted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete All completed!!
        </button>
      )}
    </div>
  );
}

export default TodoSummary;
