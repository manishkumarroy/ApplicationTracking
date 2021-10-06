import React, { useState } from "react";

import { Modal, Button, Input } from "antd";
import axios from "axios";

const Addjobs = ({ close }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  const [job, setJob] = useState({
    field: "",
    designation: "",
  });

  console.log("jobs");

  const { field, designation } = job;

  const onInputChange = (e) => {
    console.log(e);

    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    // e.preventDefault();
    console.log("job");
    await axios.post("http://localhost:3003/openings", job);
    close();
  };

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  //  const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };

  return (
    <>
      <Modal
        visible={true}
        onCancel={() => close()}
        footer={[
          <Button onClick={() => onSubmit()} type="primary" key="save">
            Save
          </Button>,
        ]}
      >
        {/* //     title="Basic Modal"
    //     visible={isModalVisible}
    //     onOk={handleOk}
    //     onCancel={handleCancel}

    //     <p>Some contents...</p>
    //     <p>Some contents...</p>
    //     <p>Some contents...</p> */}

        <form>
          <div className="form-group m-3">
            <Input
              placeholder="Add Field"
              name="field"
              value={field}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <Input
              className="form-control form-control-lg"
              placeholder="Designation"
              name="designation"
              value={designation}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Addjobs;
