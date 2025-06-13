import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="card m-5 bg-transparent p-5 rounded-5">
      <h3 className="text-center my-3 card-title text-dark fs-1 fw-bold text-uppercase font-monospace">
        Todos List
      </h3>
      <div className="card-body lh-2">
        {props.todos.length === 0
          ? "No Todos to display"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Todos
