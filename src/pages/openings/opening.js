import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from "react-bootstrap";
import RefContext from "Utilities/refContext";
import "./opening.css";
import { PlusCircleOutlined } from "@ant-design/icons";

import Addjobs from "./jobopenings/Addjobs";

const Openings = () => {
  const context = useContext(RefContext);
  const { store, actions } = context;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
    // actions.getPanelUsers();
  }, [open]);

  //   useEffect(() => {
  //     if (panelUsers) {
  //       setUsers(panelUsers);
  //     }
  //   }, [panelUsers]);

  //   const handleOnClick = () => setOpen(true);
//   const handleOnclose = () => setOpen(false);

  return (
    <>
      <div className=" container">
        <div className="heading">
          <div
            onClick={() => setOpen(true)}
            type="button"
            className="btn btn-primary btn-lg float-end addJobButton"
          >
            Add Jobs <PlusCircleOutlined />
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            IT
            <h2>React Developer (junior)</h2>
          </div>
          <div className="card_body">
            {/* <img style={{ width: 50 }} src="business.png" alt="business bag" /> */}

            <Link className="btn btn-primary btn-dark " exact to="/description">
              Details
            </Link>
          </div>
        </div>
      </div>
      {open && <Addjobs close={() => setOpen(false)} />}
    </>

    // <div className="site-card-wrapper">
    //   <Row gutter={16}>
    //     <Col span={8}>
    //       <Card title="Card title" bordered={false}>
    //         Card content
    //       </Card>
    //     </Col>
    //     <Col span={8}>
    //       <Card title="Card title" bordered={false}>
    //         Card content
    //       </Card>
    //     </Col>
    //     <Col span={8}>
    //       <Card title="Card title" bordered={false}>
    //         Card content
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default Openings;
