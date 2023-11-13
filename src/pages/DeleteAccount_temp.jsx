import { Form, Input, Button, message } from "antd";
import emailjs from "@emailjs/browser";

const DeleteAccount = () => {
  const [form] = Form.useForm();

  const sendEmail = (values) => {
    emailjs
      .sendForm(
        "service_kb1sbav",
        "contact_form",
        {
          from_name: values.user_name,
          to_name: values.user_email,
          message: values.user_phone,
        },
        "NDVMobLASLmcU-ENZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.resetFields();
          alert("Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email");
        }
      );
  };

  return (
    <div className="container">
      <Form form={form} onFinish={sendEmail}>
        <Form.Item label="Name" name="user_name">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="user_email">
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Phone" name="user_phone">
          <Input type="tel" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button danger htmlType="submit">
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteAccount;
