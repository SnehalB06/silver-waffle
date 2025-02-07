//import React from 'react'
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletdChange: (id: number, completed: boolean) => void;
}

function TodoItem({ todo, onCompletdChange }: TodoItemProps) {
  return (
    <div>
      <label className="flex item-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletdChange(todo.id, e.target.checked)}
          className="scale-125 "
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
