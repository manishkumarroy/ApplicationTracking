import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router";

const Apply = () => {
  // let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    appliedfor: "",
    owner: "",
  });

  //distructring using ES6
  const { name, email, phone, appliedfor, owner } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    // history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 m-5">
        <h2 className="text-center mb-4">4Atoms Recruitment Form</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="phone"
              className="form-control form-control-lg"
              placeholder="Phone.."
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Position"
              name="appliedfor"
              value={appliedfor}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="owner"
              name="owner"
              value={owner}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <label>Attach Resume:</label>
          <input type="file" name="my_file" /> */}

          <button className="btn btn-primary btn-block ">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
