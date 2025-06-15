import React, { useState } from "react";

const AddTodo = ({ addTodo, showToast }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("none");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            showToast("Please enter both a title and a description!", "warning");
            return;
        }
        addTodo(title, desc, priority);
        setTitle("");
        setDesc("");
        setPriority("none");
    };

    return (
        <div className="container my-4 shadow">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control shadow input-theme border-0 m-1"
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
                        className="form-control shadow input-theme border-0 m-1"
                        id="desc"
                        placeholder="Enter description..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="form-select shadow bg-theme text-theme border-0 m-1"
                        id="priority"
                    >
                        <option value="none">None</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="text-white btn btn-sm bg-primary shadow-sm m-2 p-1"
                >
                    <i className="bi bi-plus-lg"></i> Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
