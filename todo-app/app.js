import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos([...todos, todo]);
    setNewTodo('');
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const startEditing = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };
  
  const saveEdit = (id) => {
    if (!editText.trim()) {
      deleteTodo(id);
      return;
    }
    
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ));
    
    setIsEditing(null);
  };
  
  const cancelEdit = () => {
    setIsEditing(null);
  };
  
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo List</h1>
        
        <form onSubmit={addTodo} className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-r-lg transition-colors"
          >
            Add
          </button>
        </form>
        
        {todos.length > 0 && (
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-3 py-1 rounded-md ${filter === 'all' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('active')} 
                className={`px-3 py-1 rounded-md ${filter === 'active' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Active
              </button>
              <button 
                onClick={() => setFilter('completed')} 
                className={`px-3 py-1 rounded-md ${filter === 'completed' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Completed
              </button>
            </div>
            {todos.some(todo => todo.completed) && (
              <button 
                onClick={clearCompleted} 
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
        
        <ul className="divide-y divide-gray-200">
          {filteredTodos.length === 0 ? (
            <li className="py-4 text-center text-gray-500">
              {todos.length === 0 
                ? "Add your first todo!" 
                : filter === 'active' 
                  ? "No active todos" 
                  : "No completed todos"}
            </li>
          ) : (
            filteredTodos.map(todo => (
              <li key={todo.id} className="py-3">
                {isEditing === todo.id ? (
                  <div className="flex">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                    <button 
                      onClick={() => saveEdit(todo.id)} 
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2"
                    >
                      Save
                    </button>
                    <button 
                      onClick={cancelEdit} 
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-r-md"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="h-5 w-5 text-indigo-600 rounded"
                      />
                      <span 
                        className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => startEditing(todo.id, todo.text)} 
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteTodo(todo.id)} 
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        
        {todos.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;