    'use client'
        import React, { useState, useEffect } from 'react';
        import { Link } from 'react-router-dom';

        interface Mission {
            title: string;
            description: string;
        }

        const MissionsPage: React.FC = () => {
            const [missions, setMissions] = useState<Mission[]>([
                {
                    title: 'Daily Mission #1',
                    description: 'Read 10 pages of a book',
                },
                {
                    title: 'Daily Mission #2',
                    description: 'Complete 2 tasks from the to-do list',
                },
                {
                    title: 'Special Mission #1',
                    description: 'start a fight with a total stranger',
                },
            ]);

            const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
            const [abandonIndex, setAbandonIndex] = useState<number>(-1);
            const [showViewPage, setShowViewPage] = useState<boolean>(false); // Added state variable for view page pop-up window
            const [elapsedTime, setElapsedTime] = useState<number>(20); // Added state variable for elapsed time

            const viewMission = (index: number) => {
                setShowViewPage(true); // Set showViewPage state to true to show the pop-up window
                setAbandonIndex(index);
            };

            const abandonMission = (index: number) => {
                setShowConfirmation(true);
                setAbandonIndex(index);
            };

            const confirmAbandonMission = () => {
                const updatedMissions = [...missions];
                updatedMissions.splice(abandonIndex, 1);
                setMissions(updatedMissions);
                setShowConfirmation(false);
                setAbandonIndex(-1);
            };
            const cancelAbandonMission = () => {
                setShowConfirmation(false);
                setAbandonIndex(-1);
            };

            const completeMission = (index: number) => {
                const updatedMissions = [...missions];
                updatedMissions.splice(index, 1);
                setMissions(updatedMissions);
                setShowViewPage(false);
            };

            const addNewMission = () => {
                const newMission: Mission = {
                    title: 'New Mission',
                    description: 'Description of New Mission',
                };
                setMissions([...missions, newMission]);
                setElapsedTime(20);
            };

            useEffect(() => {
                const timer = setInterval(() => {
                    setElapsedTime((prevElapsedTime) => prevElapsedTime - 1);
                }, 1000); // Update elapsed time every second

                return () => {
                    clearInterval(timer);
                };
            }, []);

            useEffect(() => {
                const timer = setTimeout(() => {
                    addNewMission();
                }, 20000); // Add a new mission after 200 seconds (adjust the time interval as needed)

                return () => {
                    clearTimeout(timer);
                };
            }, [missions]);

            return (
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Missions</h1>
                    <p>Left time to new task: {elapsedTime} seconds</p> {/* Display elapsed time */}
                    <div className="grid grid-cols-3 gap-4">
                        {missions.map((mission, index) => (
                            <div className="bg-white p-4 shadow-md" key={index}>
                                <h2 className="text-xl font-bold mb-2">{mission.title}</h2>
                                <p className="text-gray-700">{mission.description}</p>
                                <div className="flex justify-between mt-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-left"
                                        onClick={() => viewMission(index)}
                                    >
                                        View Task
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => abandonMission(index)}
                                    >
                                        Abandon Task
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={addNewMission}
                    >
                        Add New Mission
                    </button>
                    {showConfirmation && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded">
                                <p>Are you sure you want to abandon the task?</p>
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={confirmAbandonMission}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                        onClick={cancelAbandonMission}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {showViewPage && (
                        <div className="fixed inset-0 flex items-center justify-center w-[110%] h-[110%] bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded w-1/2 h-1/2">
                                <h2 className="text-xl font-bold mb-2">{missions[abandonIndex]?.title}</h2>
                                <p className="text-gray-700">{missions[abandonIndex]?.description}</p>
                                <div className="flex justify-between mt-4 ">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => completeMission(abandonIndex)}
                                    >
                                        Complete Task
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setShowViewPage(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };

        export default MissionsPage;
