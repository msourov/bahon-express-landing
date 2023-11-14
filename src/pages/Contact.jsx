import React from "react";
import { Card, Space, Button, Input, InputNumber, Form, Divider } from "antd";
import "../styles/contact.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log(values);
};

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-texts">
        <h1>Contact Us</h1>
        <Divider />
        <p>Get In Touch Today</p>
        {/* <h1>We're Here To Help</h1> */}
        <p>
          If you are looking for a complete logistics solution for your business
          don’t hesitate to get in touch with us.
        </p>
      </div>
      <Space direction="horizontal" className="contact-space">
        <Card
          style={{
            width: "30em",
            height: "35vh",
            backgroundColor: "#5aa86c",
            color: "white",
            position: "relative",
          }}
        >
          <p>Send Us An Email</p>
          <p>
            We are looking forward to answering any queries that you have
            regarding our services and catering to your delivery needs.
          </p>
          <Space
            style={{
              backgroundColor: "white",
              color: "#5aa86c",
              padding: "1em",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
          >
            info@bahonexpress.com
          </Space>
        </Card>
        <Card
          size="default"
          style={{
            width: "30em",
            height: "35vh",
            backgroundColor: "#5aa86c",
            color: "white",
          }}
        >
          <p>Give Us A Call</p>
          <p>
            Call us if you have any queries that have regarding our services and
            catering to your delivery needs.
          </p>
          <Space
            style={{
              backgroundColor: "white",
              color: "#5aa86c",
              padding: "1em",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
          >
            (+880)9613-232469
          </Space>
        </Card>
      </Space>
      <Card
        bordered={false}
        style={{
          width: 500,
          marginBlock: "5em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
          background: "none",
          border: "none",
        }}
      >
        <h2 style={{ color: "gray", marginBlock: "1.5em" }}>
          Visit Our Location
        </h2>
        <p>Ka, 86/1, Kuril Bishwaroad, Progoti Shoroni, Dhaka, 1229</p>
      </Card>
      <h2>
        We would love to hear your feedback or any advice to improve our service
      </h2>
      <h1>Let Us Know Your Feedback</h1>
      <div className="contact-form">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}

          // validateMessages={validateMessages}
        >
          <Form.Item
            name={["name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              // addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item name={["user", "message"]} label="message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
