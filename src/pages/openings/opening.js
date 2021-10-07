import React, { useState, useEffect, useContext } from "react";
import RefContext from "Utilities/refContext";
import "./opening.css";
import { PlusCircleOutlined } from "@ant-design/icons";

import Addjobs from "./jobopenings/Addjobs";
import { Card } from "antd";

const Openings = () => {
  const context = useContext(RefContext);
  const { store, actions } = context;
  const { allOpenings } = store;

  const [openings, setOpenings] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    actions.getAllOpenings();
  }, []);

  useEffect(() => {
    if (allOpenings) {
      setOpenings(allOpenings);
    }
  }, [allOpenings]);

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", flexFlow: "column" }}>
          <div className="heading">
            <div
              onClick={() => setOpen(true)}
              type="button"
              className="btn btn-primary btn-lg float-end addJobButton"
            >
              Add Jobs <PlusCircleOutlined />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "20px 0 0 0",
              flexWrap: "wrap",
            }}
          >
            {openings.map((opening) => {
              return (
                <Card key={opening.id} style={{ width: 200 }}>
                  <div className="card_header">
                    {opening.field}
                    <h2>{opening.designation}</h2>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      {open && (
        <Addjobs
          close={() => setOpen(false)}
          addOpening={(data) => actions.addOpening(data)}
        />
      )}
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
