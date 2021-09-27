import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUsers] = useState({
    name: "",
    appliedfor: "",
    applied: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUsers(result.data);
  };

  return (
    <div className="container py-5 ">
      <Link className="btn btn-primary" to="/panelist">
        Back
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        {/* <li className="list-group-item">Date: {user.applied}</li> */}
      </ul>
      {/* <button className="btn btn-primary m-5">Download Resume</button> */}
    </div>
  );
};

export default View;
