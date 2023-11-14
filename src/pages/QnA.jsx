import { CaretRightOutlined } from "@ant-design/icons";
import { Tabs, Collapse, theme, Divider } from "antd";
import React from "react";
import "../styles/qna.css";
import { allQnaItems, generalQnaItems, merchantQnaItems } from "./qna_items";

const onChange = (key) => {
  console.log(key);
};

const tabItems = [
  {
    key: "1",
    label: "All",
    children: <Collapse accordion size="large" items={allQnaItems} />,
  },
  {
    key: "2",
    label: "General Questions",
    children: <Collapse accordion size="large" items={generalQnaItems} />,
  },
  {
    key: "3",
    label: "Merchant Questions",
    children: <Collapse accordion size="large" items={merchantQnaItems} />,
  },
];

function QnA() {
  return (
    <div className="qna-container">
      <div className="text">
        <h1>Q&A</h1>
        <Divider />
      </div>
      <div className="tab">
        <Tabs
          defaultActiveKey="1"
          items={tabItems}
          onChange={onChange}
          style={{ width: "70vw" }}
        />
      </div>
    </div>
  );
}

export default QnA;
