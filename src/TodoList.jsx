// src/TodoList.jsx

import { useState } from 'react';

function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
                <div className="mb-4 flex">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded"
                        placeholder="Add a new task"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>

                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between p-2 mb-2 rounded-lg border ${todo.completed ? 'bg-green-100' : 'bg-gray-100'}`}
                        >
                            <span
                                onClick={() => handleToggleTodo(todo.id)}
                                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
