import React from 'react'
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom"

const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
  }
  return (
    <>
      <div className="card text-center m-5 rounded-5 shadow-5 bg-transparent" style={myStyle}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link
                className="nav-link text-dark rounded-top-5"
                aria-current="true"
                to="#"
              >
                Date
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark rounded-top-5" to="#">
                Time
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark rounded-top-5">Name</Link>
            </li>
          </ul>
        </div>
        <div className="card card-hover m-5 bg-transparent p-5 rounded-5 shadow border-0">
          <h3 className="text-center my-3 card-title text-dark fs-1 fw-bold text-uppercase font-monospace">
            Todos List
          </h3>
          <div className="bg-primary w-75 mx-auto my-4 rounded-pill shadow-lg py-1"></div>
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
      </div>
    </>
  );
}

export default Todos
