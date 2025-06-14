import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar bg-gradient d-flex space-between shadow">
      <div className="container-fluid">
        <div className="navbar-brand fw-bold display-4 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check2-circle"
            viewBox="1 1 12 15"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
          </svg>
          <Link className="text-decoration-none" to="/">
            {props.title}
          </Link>
        </div>
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <div className="btn-group">
          <button className="btn btn-sm" type="button">
            <Link className="nav-link" to="#">
              Social
            </Link>
          </button>
          <button
            type="button"
            className="btn btn-sm dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu border-0 shadow">
            <li className="">
              <Link
                className="dropdown-item"
                to="https://github.com/aaditya-dubey09"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="https://linkedin.com/in/aadityadubey"
              >
                LinkedIn
              </Link>
            </li>
            {/*<hr className="dropdown-divider" />*/}
            <li>
              <Link
                className="dropdown-item"
                to="https://instagram.com/cosmophile946"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {props.searchBar ? (
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Your Title Here",
  // searchBar: true,
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
}
