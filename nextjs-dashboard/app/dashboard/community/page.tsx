'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateThread = () => {
  const router = useRouter();
  const [threadTitle, setThreadTitle] = useState('');
  const [threadContent, setThreadContent] = useState('');

  const createThread = async () => {
    // Perform API call to create a new thread
    // Assuming you have an API endpoint for creating threads
    const response = await fetch('/api/createThread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: threadTitle, content: threadContent }),
    });

    if (response.ok) {
      const { threadId } = await response.json();
      // Redirect to the newly created thread page
      router.push(`/threads/${threadId}`);
    } else {
      // Handle error
      console.error('Failed to create thread');
    }
  };
}

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({
    title: '',
    content: '',
    author: '',
    category: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [foldedCategories, setFoldedCategories] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCreatePost = () => {
    setPosts([...posts, newPost]);
    setNewPost({
      title: '',
      content: '',
      author: '',
      category: '',
    });
    setShowPopup(false);
  };

  const renderPosts = () => {
    return posts.map((post, index) => (
      <div key={index} className="border border-gray-300 rounded p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.content}</p>
        <p className="text-gray-600 mb-2">Author: {post.author}</p>
        <button
          onClick={() => handleViewPost(index)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-2"
        >
          View
        </button>

        <button
          onClick={() => handleDeletePost(index, post.title)}
          className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 ml-2 float-right self-end"
        >
          Delete
        </button>
      </div>
    ));
  };

  const handleDeletePost = (index: number, title?: string) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    if (title) {
      setFoldedCategories(foldedCategories.filter((foldedCategory) => foldedCategory !== title));
    }
  };

  const handleViewPost = (index: number) => {
    // Handle view post logic here
    console.log(`View post at index ${index}`);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleCategory = (category: string) => {
    if (foldedCategories.includes(category)) {
      setFoldedCategories(foldedCategories.filter((foldedCategory) => foldedCategory !== category));
    } else {
      setFoldedCategories([...foldedCategories, category]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-2xl font-bold mb-4">Forum</h1>
      </header>

      <div className="mb-4">
        <button
          onClick={togglePopup}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          Add Post
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded w-11/12 md:w-3/4 lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex flex-col">
                <label htmlFor="title" className="text-gray-600 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange1}
                  placeholder="Title"
                  className="border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="content" className="text-gray-600 mb-1">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                placeholder="Content"
                className="border border-gray-300 rounded px-4 py-2 h-32"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCreatePost}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mr-2"
              >
                Add Post
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

      {/* Render Posts */}
      {renderPosts()}
    </div>
  );
};

export default ForumPage;

interface Post {
  title: string;
  content: string;
  author: string;
  category: string;
}