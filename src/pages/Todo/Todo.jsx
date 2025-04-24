import './Todo.css';
import TodoList from './../../components/TodoList/TodoList';
import { useState } from 'react';

function Todo({ todos, setTodos }) {
    const [input, setInput] = useState('');
    const [category, setCategory] = useState('personal');


    // Add new todo
    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
            category: category
        };
        
        setTodos([...todos, newTodo]);
        setInput('');
    };

    // Toggle todo completion
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            
            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task..."
                    className="todo-input"
                />
                <button type="submit" className="add-button">Add</button>
            </form>
            
            <TodoList 
                todos={todos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
            />
        </div>
    );
}

export default Todo;