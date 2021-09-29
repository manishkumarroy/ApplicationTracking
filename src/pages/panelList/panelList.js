import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RefContext from "Utilities/refContext";
import Addpanelist from "./panelist/Addpanelist.js";
// import Edit from "./panelist/Edit.js"

const PanelListPage = () => {
  const context = useContext(RefContext);
  const { store, actions } = context;
  const { panelUsers } = store;
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    actions.getUsers();
  }, [open]);

  useEffect(() => {
    if (panelUsers) {
      setUsers(panelUsers);
    }
  }, [panelUsers]);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    actions.getUsers();
  };

  const handleOnClick = () => setOpen(true);
  const handleOnclose = () => setOpen(false);

  // const handleOnClick = () => {
  //   console.log(<Addpanelist />);
  //   return <Addpanelist />;
  // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>
          Panelist{" "}
          <button
            onClick={handleOnClick}
            type="button"
            className="btn btn-primary btn-lg float-end "
          >
            Add Panelist
          </button>
        </h1>
        {open && <Addpanelist close={handleOnclose} />}
        {/* {open && <Edit close={handleOnclose} />} */}

        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              {/* <th scope="col">Owner</th> */}
              {/* <th scope="col">Applied Date</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {/* <td>{user.owner}</td> */}
                {/* <td>{user.applied}</td> */}
                <td>
                  <Link className="btn btn-primary m-2" to={`/view/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary m-2">Edit</Link>
                  <Link
                    className="btn btn-danger m-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanelListPage;
