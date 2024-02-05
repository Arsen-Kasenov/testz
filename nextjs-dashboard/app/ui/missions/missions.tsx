import React from 'react';

const MissionsPage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Missions</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-xl font-bold mb-2">Mission 1</h2>
                    <p className="text-gray-700">Description of Mission 1</p>
                </div>
                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-xl font-bold mb-2">Mission 2</h2>
                    <p className="text-gray-700">Description of Mission 2</p>
                </div>
                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-xl font-bold mb-2">Mission 3</h2>
                    <p className="text-gray-700">Description of Mission 3</p>
                </div>
                {/* Add more mission cards here */}
            </div>
        </div>
    );
};

export default MissionsPage;