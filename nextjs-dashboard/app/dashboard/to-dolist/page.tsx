'use client'
import React, { useState } from 'react';

const TodoListPage = (props) => {
    const [money, setMoney ] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({
        task: '',
        time: '',
        tag: '',
        section: '',
    });
    const getMoney = () => {
        props(money);
    }
    const [showPopup, setShowPopup] = useState(false);
    const [foldedSections, setFoldedSections] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };
    const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleCreateTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask({
            task: '',
            time: '',
            tag: '',
            section: '',
        });
        setShowPopup(false);
    };
    const handleCompleteTask = (index:number, section?: string) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        if (section) {
            setFoldedSections(foldedSections.filter((foldedSection) => foldedSection !== section));
        }
        setMoney(money + 1);
    };

    const handleDeleteTask = (index: number, section?: string) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        if (section) {
            setFoldedSections(foldedSections.filter((foldedSection) => foldedSection !== section));
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const toggleSection = (section: string) => {
        if (foldedSections.includes(section)) {
            setFoldedSections(foldedSections.filter((foldedSection) => foldedSection !== section));
        } else {
            setFoldedSections([...foldedSections, section]);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

            <div className="mb-4">
                <button
                    onClick={togglePopup}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                >
                    Add Task
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded w-11/12 md:w-3/4 lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 mb-2">
                            <div className="flex flex-col">
                                <label htmlFor="tag" className="text-gray-600 mb-1">
                                    Tag     
                                </label>
                                <input
                                    type="text"
                                    id="tag"
                                    name="tag"
                                    value={newTask.tag}
                                    onChange={handleInputChange1}
                                    placeholder="Tag"
                                    className="border border-gray-300 rounded px-4 py-2"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="time" className="text-gray-600 mb-1">
                                    Time
                                </label>
                                <input
                                    type="text"
                                    id="time"
                                    name="time"
                                    value={newTask.time}
                                    onChange={handleInputChange1}
                                    placeholder="Time"
                                    className="border border-gray-300 rounded px-4 py-2"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="section" className="text-gray-600 mb-1">
                                    Section
                                </label>
                                <input
                                    type="text"
                                    id="section"
                                    name="section"
                                    value={newTask.section}
                                    onChange={handleInputChange1}
                                    placeholder="Section"
                                    className="border border-gray-300 rounded px-4 py-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="task" className="text-gray-600 mb-1">
                                Task
                            </label>
                            <textarea
                                id="task"
                                name="task"
                                value={newTask.task}
                                onChange={handleInputChange}
                                placeholder="Task"
                                className="border border-gray-300 rounded px-4 py-2 h-32"
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCreateTask}
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mr-2"
                            >
                                Add Task
                            </button>
                            <button
                                onClick={togglePopup}
                                className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2"
                            >
                                Discard
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {Array.from(new Set(tasks.map((task) => task.section))).map((section) => {
                const sectionTasks = tasks.filter((task) => task.section === section);
                return (
                    <div key={section} className="border border-gray-300 rounded p-4 mb-4">
                        <h3 className="text-lg font-bold mb-2">
                            <button
                                onClick={() => toggleSection(section)}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                {foldedSections.includes(section) ? '▶' : '▼'}
                            </button>{' '}
                            {section}
                        </h3>
                        {!foldedSections.includes(section) && (
                            <ul>
                                {sectionTasks.map((task, index) => (
                                    <li key={index} className="border border-gray-300 rounded p-4 mb-4">
                                        <h3 className="text-lg font-bold mb-2">{task.task}</h3>
                                        <p className="text-gray-600 mb-2">
                                            Time: {task.time} | Tag: {task.tag} | Section: {task.section}
                                        </p>
                                        <button
                                            onClick={() => handleCompleteTask(index, section)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                                        >
                                            Complete Task
                                        </button>

                                        <button
                                            onClick={() => handleDeleteTask(index, section)}
                                            className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 float-right"
                                        >
                                            Delete Task
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}

            <div>
                <h2>Money: {money}</h2> {/* Display money value */}
            </div>
        </div>
    );
};

export default TodoListPage;

interface Task {
    task: string;
    time: string;
    tag: string;
    section: string;
}