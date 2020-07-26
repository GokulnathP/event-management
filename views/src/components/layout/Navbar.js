import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="nav justify-content-start">
        <div className="navbar-brand nav-item" href="/">
          Home
        </div>
        <a className="navbar-brand " href="/events">
          Events
        </a>

        <a className="navbar-brand " href="/about">
          About
        </a>

        <a className="navbar-brand" href="/contact">
          Contact us
        </a>
      </div>
      <i className="fa fa-sign-in-alt" />
      <div className="nav justify-content-end">
        <a className="navbar-brand" href="/signup">
          SignUp
        </a>

        <a href="/login" className="navbar-brand">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
