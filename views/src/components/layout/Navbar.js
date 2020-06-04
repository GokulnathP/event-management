import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="nav justify-content-start">
        <a className="navbar-brand nav-item" href="/">
          Home
        </a>
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
      <div className="nav justify-content-end">
        <i className="fa fa-sign-in-alt" />
        <a className="navbar-brand" href="/signup">
          SignUp
        </a>

        <a href="/login" className="navbar-brand">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
