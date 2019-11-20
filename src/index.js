import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Row, Col } from "antd";

const formatNumber = (number: number) => {
  if (number > 1.0e6) {
    const formattedNumber = Math.abs(Number(number)) / 1.0e6;

    return `${formattedNumber.toFixed(1)}M`;
  }

  // eslint-disable-next-line require-unicode-regexp
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

ReactDOM.render(
  <div>
    <h3>Snapshot</h3>
    <Row gutter={[16, 16]}>
      <Col md={6} sm={8} xs={12}>
        <Card style={{ borderLeft: "3px solid #00E676" }}>
          <h2>{formatNumber(99999)}</h2>
          <p>Check-ins</p>
        </Card>
      </Col>
      <Col md={6} sm={8} xs={12}>
        <Card style={{ borderLeft: "3px solid #0053CB" }}>
          <h2>{formatNumber(10222220)}</h2>
          <p>Hours logged</p>
        </Card>
      </Col>
      <Col md={6} sm={8} xs={12}>
        <Card style={{ borderLeft: "3px solid #E53935" }}>
          <h2>{formatNumber(20003032)}</h2>
          <p>Unsuccessful check-ins</p>
        </Card>
      </Col>
      <Col md={6} sm={8} xs={12}>
        <Card style={{ borderLeft: "3px solid #FFA000" }}>
          <h2>{formatNumber(1212)}</h2>
          <p>Not checked-out</p>
        </Card>
      </Col>
    </Row>
  </div>,
  document.getElementById("container")
);
