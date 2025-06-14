import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="card p-4 rounded-4 shadow-lg mb-3 d-flex justify-content-between border-0">
      {" "}
      <div className="d-flex align-items-center flex-grow-1 text-end">
        <button
          className="btn btn-sm btn-danger border-0 rounded-circle p-2 me-2"
          onClick={() => {
            onDelete(todo);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="2 5 13 7"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </button>
          <h4 className="text-black mb-0 p-2">{todo.title}</h4>
        </div>
        <p className="text-black-50 small mb-0 text-end mx-5">{todo.desc}</p>
    </div>
  );
}

export default TodoItem
