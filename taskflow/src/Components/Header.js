import React from "react";
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className="navbar bg-body-tertiary d-flex space-between">
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          Social
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="https://github.com/aaditya-dubey09">
              GitHub
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://linkedin.com/in/aadityadubey">
              LinkedIn
            </a>
          </li>
          {/*<hr className="dropdown-divider" />*/}
          <li>
            <a
              className="dropdown-item"
              href="https://instagram.com/cosmophile946"
            >
              Instagram
            </a>
          </li>
        </ul>

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
