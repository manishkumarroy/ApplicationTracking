// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

// const Edit = ({ close }) => {
//   const [user, setUsers] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const { name, email, phone } = user;

//   const { id } = useParams();

//   const onInputChange = (e) => {
//     console.log(user.name);
//     setUsers({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put("http://localhost:3003/users", user);
//     // history.push("/panelist");
//     close();
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:3003/users/${id}`);
//     setUsers(result.data);
//   };

//   return (
//     <div className="container ">
//       <div className="w-75 mx-auto shadow p-5 m-5 ">
//         {/* <div className="crossicon" onClick={close}>
//           X
//         </div> */}
//         <h2 className="text-center mb-4">Update Panelist</h2>
//         <form onSubmit={(e) => onSubmit(e)}>
//           <div className="form-group m-3">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Full Name"
//               name="name"
//               value={name}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group m-3">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Email"
//               name="email"
//               value={email}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group m-3">
//             <input
//               type="phone"
//               className="form-control form-control-lg"
//               placeholder="Phone.."
//               name="phone"
//               value={phone}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           {/* <div className="form-group m-3">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Position"
//             name="appliedfor"
//             value={appliedfor}
//             onChange={(e) => onInputChange(e)}
//           />
//         </div> */}
//           {/* <div className="form-group m-3">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="owner"
//             name="owner"
//             value={owner}
//             onChange={(e) => onInputChange(e)}
//           />
//         </div> */}
//           {/* <label>Attach Resume:</label>
//         <input type="file" name="my_file" /> */}

//           <button className="btn btn-primary btn-block ">Save</button>
//           <button
//             onClick={close}
//             type="button"
//             className="btn btn-primary btn-lg float-end "
//           >
//             cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Edit;
