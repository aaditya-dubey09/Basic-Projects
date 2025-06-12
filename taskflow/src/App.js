import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete od todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  };
  
  const [todos, setTodos] = useState ([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done3",
    },
  ]);
  return (
    <>
      <Header title="TaskFlow" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
