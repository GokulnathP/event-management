import React from "react";

const ProfileItem = () => {
  return (
    <div className="container">
      <form>
        <br />
        <div className="card-header">
          <center>Profile Details</center>
        </div>
        <br />
        <div className="row">
          <div className="col-sm">
            <label htmlFor="">Firstname : </label>{" "}
          </div>
          <div className="col-sm">
            <input type="text" placeholder="Firstname" required />
          </div>
          <div className="col-sm">
            <label htmlFor="">Lastname : </label>{" "}
          </div>
          <div className="col-sm">
            <input type="text" placeholder="Lastname" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-sm">
            <label htmlFor="">Date of Birth : </label>{" "}
          </div>
          <div className="col-sm">
            <input type="date" placeholder="Date" required />
          </div>
          <div className="col-sm">
            <label htmlFor="">Gender : </label>{" "}
          </div>
          <div className="col-sm">
            <input type="text" placeholder="Gender" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-sm">
            <label htmlFor="">Company Name : </label>{" "}
            <input type="email" placeholder="Name of Company" required />
          </div>
          <div className="col-sm">
            <label htmlFor="">Area of Interest : </label>{" "}
            <input type="text" placeholder="ML,Web,etc..," required />
          </div>
          <div className="col-sm">
            <label htmlFor="">Desigination : </label>{" "}
            <input type="text" placeholder="Designiation" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-sm">
            <label htmlFor="">District : </label>{" "}
            <input type="text" placeholder="District" required />
          </div>
          <div className="col-sm">
            <label htmlFor="">State : </label>{" "}
            <input type="text" placeholder="State" required />
          </div>

          <div className="col-sm">
            <label htmlFor="">Pincode : </label>{" "}
            <input maxLength="6" placeholder="Pincode" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-sm">
            <input className="btn btn-primary" type="submit" value="Submit" />
            <span> </span>
            <input className="btn btn-primary" type="reset" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileItem;
