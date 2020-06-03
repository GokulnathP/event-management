import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <input type="text" placeholder="Firstname" required /> <br />
      <input type="text" placeholder="Lirstname" required /> <br />
      <input type="email" placeholder="Email" name="" id="" required />
      <br />
      <input type="password" placeholder="Password" name="" id="" required />
      <br />
      <input
        type="password"
        min="6"
        placeholder="Confrim Password"
        name=""
        id=""
        required
      />
      <br />
      <input type="button" value="Submit" className="btn btn-default" />
    </div>
  );
}

export default App;
