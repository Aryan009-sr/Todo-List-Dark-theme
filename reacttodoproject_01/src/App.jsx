import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]); // Initial state is an empty array

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {... todo, text: newText} : todo
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 p-8 flex flex-col items-center">
      <div className="w-full max-w-lg">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;