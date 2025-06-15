import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Header({
  title,
  searchBar,
  theme,
  setTheme,
  searchQuery,
  setSearchQuery,
}) {
  useEffect(() => {
    document.body.className = "";
    const safeTheme = theme.split(" ")[0];
    document.body.classList.add(`theme-${safeTheme}`);
  }, [theme]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar d-flex space-between shadow">
      <div className="container-fluid">
        <div className="navbar-brand fw-bold display-4 text-primary">
          <i className="bi bi-check2-circle" viewBox="1 1 12 15"></i>
          <Link className="text-decoration-none" to="/">
            {title}
          </Link>
        </div>
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <div className="dropdown mx-2">
          <button
            className="btn btn-sm text-theme rounded-5 dropdown-toggle"
            type="button"
            id="themeDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Theme
          </button>
          <ul className="dropdown-menu" aria-labelledby="themeDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }}
              >
                Light<i className="bi bi-brightness-high-fill me-2"></i>
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                }}
              >
                Dark<i className="bi bi-moon-fill me-2"></i>
              </button>
            </li>
          </ul>
        </div>

        {searchBar && (
          <form
            className="d-flex position-relative border-bottom"
            onSubmit={handleSearchSubmit}
          >
            <button className="btn btn-sm text-theme" type="submit">
              <i className="bi bi-search" />
            </button>
            <input
              id="search-todos"
              name="search"
              className="form-control form-control-sm border-0"
              type="search"
              placeholder="Search todos..."
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search"
            />
          </form>
        )}
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};