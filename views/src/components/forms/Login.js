import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <br />
        <div className="card-header w-10">
          <center>Login</center>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <center>
              <div>
                <label htmlFor="">Email</label>{" "}
              </div>
              <input type="email" placeholder="Enter the email" required />
            </center>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col">
            <center>
              <div>
                <label htmlFor="">Password</label>{" "}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  minLength={6}
                  required
                />
              </div>
            </center>
          </div>
        </div>
        <br />

        <center>
          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </center>
        <br />
        <center>
          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-secondary">
                Forget Password
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-danger">
                Signup
              </button>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
};

export default Login;
