import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be empty!");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };
    return (
        <div className="container my-4">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control shadow bg-transparent border-0 m-1"
                        id="title"
                        placeholder="Enter title..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control shadow bg-transparent border-0 m-1"
                        id="desc"
                        placeholder="Enter description..."
                    />
                </div>
                <button
                    type="submit"
                    className="text-white btn btn-sm bg-primary shadow-sm m-2 p-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="2 3 15 12"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                    </svg>
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
