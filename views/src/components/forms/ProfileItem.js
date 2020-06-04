import React from "react";

const ProfileItem = () => {
  return (
    <div className="container">
      <form>
        <div className="card-header text-center text-bold">Profile Details</div>
        <br />
        <div className="row ">
          <div className="col-md-6">
            <label htmlFor="">First name</label>
            <br />
            <input type="text" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="">Last name</label>
            <br />
            <input type="text" required />
          </div>
        </div>
        <br />

        <div className="row ">
          <div className="col-md-6">
            <label htmlFor="">Date of Birth</label>
            <br />
            <input type="date" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="">Gender</label>
            <br />
            <input type="text" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col col-md-4">
            <label htmlFor="">Company Name</label>
            <br />
            <input type="email" required />
          </div>
          <div className="col col-md-4">
            <label htmlFor="">Area of Interest</label>
            <br />
            <input type="text" required />
          </div>
          <div className="col col-md-4">
            <label htmlFor="">Desigination</label>
            <br />
            <input type="text" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col col-md-4">
            <label htmlFor="">District</label>
            <br />
            <select className="custom-select d-block w-75" required>
              <option>Choose...</option>
              <option>India</option>
            </select>{" "}
          </div>
          <div className="col col-md-4">
            <label htmlFor="">State</label>
            <br />
            <select className="custom-select d-block w-75" required>
              <option>Choose...</option>
              <option>Tamilnadu</option>
            </select>
          </div>

          <div className="col col-md-4">
            <label htmlFor="">Pincode</label>
            <br />
            <input maxLength="6" required />
          </div>
        </div>
        <br />
        <center>
          <div className="row">
            <div className="col-sm">
              <input className="btn btn-primary" type="submit" value="Submit" />
              <span> </span>
              <input className="btn btn-primary" type="reset" value="Reset" />
            </div>
          </div>
        </center>
      </form>
    </div>
  );
};

export default ProfileItem;
