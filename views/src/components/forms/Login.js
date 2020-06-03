import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <br />
        <div className="card-header">
          <center>Login</center>
        </div>
        <br />
        <div className="row">
          <div className="col-sm">
            <label htmlFor="">Email : </label>{" "}
          </div>
          <div className="col-sm">
            <input type="email" placeholder="Enter the email" required />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm">
            <label htmlFor="">Password : </label>{" "}
          </div>
          <div className="col-sm">
            <input
              type="password"
              placeholder="Password"
              minLength={6}
              required
            />
          </div>
        </div>
        <br />

        <center>
          <div className="row">
            <div className="col-sm">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
        </center>
      </form>
    </div>
  );
};

export default Login;
