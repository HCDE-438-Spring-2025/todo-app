import './Todo.css';
import TodoList from './../../components/TodoList/TodoList';
import { useState, useEffect } from 'react';

import { 
    addTodoToFirebase, 
    loadTodosFromFirebase, 
    updateTodoInFirebase, 
    deleteTodoFromFirebase,
    deleteAllTodosFromFirebase
} from './../../firebase';

function Todo({ todos, setTodos }) {
    const [input, setInput] = useState('');
    const [category, setCategory] = useState('personal');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
          setLoading(true);
          const loadedTodos = await loadTodosFromFirebase();
          setTodos(loadedTodos);
          setLoading(false);
        };
    
        fetchTodos();
      }, []);
    
    // Add new todo
    const addTodo = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        
        const newTodo = {
            text: input,
            completed: false,
            category: category,
            createdAt: new Date().getTime()
        };
        
        // Add to Firebase and update local state
        const todoWithId = await addTodoToFirebase(newTodo);
        setTodos([todoWithId, ...todos]);
        setInput('');
    };


    // // Add new todo
    // const addTodo = (e) => {
    //     e.preventDefault();
    //     if (input.trim() === '') return;
        
    //     const newTodo = {
    //         id: Date.now(),
    //         text: input,
    //         completed: false,
    //         category: category
    //     };
        
    //     setTodos([...todos, newTodo]);
    //     setInput('');
    // };

    // Toggle todo completion
    const toggleTodo = async (id) => {
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return;
        
        const updatedCompleted = !todo.completed;
        
        // Update in Firebase
        const success = await updateTodoInFirebase(id, {
            completed: updatedCompleted
        });
        
        // Update local state if Firebase update was successful
        if (success) {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: updatedCompleted } : todo
            )
        );
        }
    };

    // Toggle todo completion
    // const toggleTodo = (id) => {
    //     setTodos(
    //         todos.map(todo => 
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         )
    //     );
    // };

    // Delete todo
    const deleteTodo = async (id) => {
        // Delete from Firebase
        const success = await deleteTodoFromFirebase(id);
        
        // Update local state if Firebase delete was successful
        if (success) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    };

    // Delete todo
    // const deleteTodo = (id) => {
    //     setTodos(todos.filter(todo => todo.id !== id));
    // };

    // Clear all todos
    const clearAllTodos = async () => {
        if (window.confirm('Are you sure you want to delete all todos?')) {
        // Delete all from Firebase
        const success = await deleteAllTodosFromFirebase(todos);
        
        // Update local state if Firebase delete was successful
        if (success) {
            setTodos([]);
        }
        }
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
            
            <div className="category-selector">
                <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="personal"
                    checked={category === 'personal'}
                    onChange={() => setCategory('personal')}
                /> 
                Personal
                </label>
                <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="work"
                    checked={category === 'work'}
                    onChange={() => setCategory('work')}
                /> 
                Work
                </label>
            </div>
            
            <button type="submit" className="add-button">Add</button>
            </form>
            
            {loading ? (
            <p className="loading-message">Loading todos...</p>
            ) : (
            <>
                <TodoList 
                todos={todos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                />
                
                {/* Number of active todos counter */}
                <div className="todo-counter">
                Active todos: {todos.filter(todo => !todo.completed).length}
                </div>
                
                {/* Clear all button */}
                {todos.length > 0 && (
                <div className="clear-all">
                    <button 
                    onClick={clearAllTodos}
                    className="clear-button"
                    >
                    Clear All Todos
                    </button>
                </div>
                )}
            </>
            )}
        </div>
    );
}

export default Todo;