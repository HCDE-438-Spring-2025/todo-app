import './TodoItem.css';

const TodoItem = function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span 
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="delete-button"
        aria-label="Delete"
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;