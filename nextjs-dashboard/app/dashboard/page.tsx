import React from 'react';
//import { Link } from 'react-router-dom';
import Link from 'next/link';

const HomePage = () => {
  const news = [
    {
      id: 1,
      title: 'Breaking News 1',
      content: 'Do it like cards in forumcard.jsx. Use the card1 object as a prop.',
    },
    {
      id: 2,
      title: 'Breaking News 2',
      content: 'Create a log in???? Delete all unused stuff' ,
    },
    {
      id: 2,
      title: 'Breaking News 3',
      content: 'Use router-dom to link to the news page.',
    },
    {
      id: 2,
      title: 'Breaking News 2',
      content: 'Create a normal sumbit button for the for.',
    },
    // Add more news items here
  ];

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl text-center">Welcome _username_</h1>
      </header>
      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl mb-4">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {news.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
                <a href={`/news/${item.id}`} className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
