import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 text-center text-md-start fw-light">
          © {new Date().getFullYear()} Taskflow.com · All rights reserved.
        </p>

        <div className="d-flex gap-3 justify-content-center">
          <a
            href="https://github.com/aaditya-dubey09"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github fs-5"></i>
          </a>
          <a
            href="https://linkedin.com/in/aadityadubey"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin fs-5"></i>
          </a>
          <a
            href="https://x.com/itsaadi_09"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter-x fs-5"></i>
          </a>
          <a
            href="https://instagram.com/cosmophile946"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;