// src/components/TodoItem.jsx

import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim()) {
      editTodo(todo.id, editedText);
      setIsEditing(false); // Switch back to view mode
    }
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text); // Revert to original text
    setIsEditing(false); // Switch back to view mode
  };

  const renderViewMode = () => (
    <>
      <div className="flex items-center gap-4 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="form-checkbox h-5 w-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
        />
        <span
          className={`text-lg transition-colors ${
            todo.completed ? 'text-gray-500 line-through' : 'text-gray-200'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-400 hover:text-blue-600 transition-colors"
        >
          {/* Edit SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-400 hover:text-red-600 transition-colors"
        >
          {/* Delete SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );

  const renderEditMode = () => (
    <form onSubmit={handleEditSubmit} className="flex flex-grow gap-4 items-center">
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="flex-grow p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
      />
      <button
        type="submit"
        className="text-green-400 hover:text-green-600"
      >
        {/* Save SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleCancelEdit}
        className="text-gray-400 hover:text-gray-600"
      >
        {/* Cancel SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </form>
  );

  return (
    <li className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700">
      {isEditing ? renderEditMode() : renderViewMode()}
    </li>
  );
};

export default TodoItem;