import React from "react";
import "../styles/pricing.css";

import { Divider, Space, Table, Tag } from "antd";
const columns = [
  {
    title: "",
    dataIndex: "empty",
    key: "empty",
  },
  {
    title: "Inside City",
    dataIndex: "insideCity",
    key: "insideCity",
  },
  {
    title: "Subcity",
    dataIndex: "subcity",
    key: "subcity",
  },
  {
    title: "Outside City",
    dataIndex: "outsideCity",
    key: "outsideCity",
  },
];

const data = [
  {
    key: "1",
    empty: "Delivery Charge",
    insideCity: "60 Tk",
    subcity: "100 Tk",
    outsideCity: "130 Tk",
  },
  {
    key: "2",
    empty: "COD Charge",
    insideCity: "0% COD",
    subcity: "1% COD",
    outsideCity: "1% COD",
  },
];

function Pricing() {
  return (
    <div className="container">
      <div className="label">
        <div className="texts">
          <h1>Pricing</h1>
          <Divider />
          <p>Delivery Charge</p>
        </div>
        <div
          className="content"
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <img src="/illustration-07.png" alt="parcel" />
          <div className="table">
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        </div>
        <div className="space">
          <Space className="space">
            <p>*Inside City: Extra per kg cost 20 BDT</p>
            <p>*SubCity/Outside City: Extra per kg cost 30 BDT</p>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
