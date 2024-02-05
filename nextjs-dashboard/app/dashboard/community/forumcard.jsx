import React from 'react';

const Forumcard = ({card1: { id,title, description, author, date }}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <div className="flex items-center">
            <p className="text-gray-700 text-sm">{author}</p>
            </div>
            <p className="text-gray-500 text-sm">{date}</p>
        </div>
    );
};

export default Forumcard;