import { useState } from "react";
import { CheckCircleIcon, XCircleIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue("");
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="bg-blue-50 shadow-lg rounded-xl p-6 w-full max-w-lg border border-blue-100">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">To Do List</h2>

                {/* Barre d'ajout */}
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
                        placeholder="Ajouter une tâche..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-blue-600 transition shadow-md"
                    >
                        <PlusIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Liste des tâches */}
                <ul className="space-y-3">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className={`flex justify-between items-center p-3 rounded-lg shadow-sm border transition ${task.completed ? "bg-gray-100 text-gray-500 line-through" : "bg-white hover:bg-gray-50"
                                }`}
                        >
                            <span className="text-base font-medium">{task.text}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => toggleTask(index)}
                                    className="text-green-500 hover:text-green-600 transition"
                                >
                                    <CheckCircleIcon className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="text-red-500 hover:text-red-600 transition"
                                >
                                    <XCircleIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}