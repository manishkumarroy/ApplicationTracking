import React, { useState } from "react";

import { Modal, Button, Input, Form } from "antd";

const Addjobs = ({ close, addOpening }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (formData) => {
    //  e.preventDefault();
    console.log(formData);

    addOpening(formData);
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
          <Button onClick={() => form.submit()} type="primary" key="save">
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
        <div style={{ marginTop: "40px" }}></div>
        <Form
          style={{ border: "none" }}
          form={form}
          //   className="loginForm"
          name="basic"
          onFinish={onSubmit}
        >
          <Form.Item
            className="boldText"
            name="field"
            rules={[
              {
                required: true,
                message: "Please Enter Field !",
              },
            ]}
          >
            <Input
              className="form-control form-control-lg"
              placeholder="Field"
            />
          </Form.Item>
          <Form.Item
            className="boldText"
            name="designation"
            rules={[
              {
                required: true,
                message: "Please Enter Designation !",
              },
            ]}
          >
            <Input
              className="form-control form-control-lg"
              placeholder="Designation"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Addjobs;
