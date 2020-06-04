import React from "react";

const Signup = () => {
  return (
    <form className="container">
      <br />
      <div className="card-header">
        <center>SignUp</center>
      </div>
      <br />
      <div className="row">
        <div className="col-sm">
          <center>
            <label htmlFor="">Username</label> <br />
            <input type="email" required />
          </center>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm">
          <center>
            <label htmlFor="">Email</label> <br />
            <input type="email" required />
          </center>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <center>
            <label htmlFor="">Password</label> <br />
            <input type="password" minLength={6} required />
          </center>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <center>
            <label htmlFor="">Confrim Password</label>
            <br />
            <input type="password" minLength="6" required />
          </center>
        </div>
      </div>
      <br />
      <center>
        <input type="checkbox" required />{" "}
        <label htmlFor="">
          I hereby agree to the terms and condition provided by Company
        </label>
      </center>
      <center>
        <br />
        <div className="row justify-content-center">
          <div className="col-4">
            <button className="btn btn-primary" type="submit">
              Signup
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" type="reset">
              Reset
            </button>
          </div>
        </div>
      </center>
    </form>
  );
};

export default Signup;
