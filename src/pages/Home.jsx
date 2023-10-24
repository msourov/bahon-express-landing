import {
  Layout,
  Menu,
  Button,
  Form,
  Input,
  Card,
  Row,
  Col,
  Divider,
} from "antd";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";

// Now you can use faFileLines in your code

const { Header, Footer, Sider, Content } = Layout;
const items = ["Tracking", "Pricing", "Q&A", "Contact Us"];

function Home() {
  const [form] = Form.useForm();
  return (
    <>
      <Layout>
        <Header className="header">
          <img
            src="./Bahon.png"
            alt="bahon logo"
            style={{
              width: "150px",
              height: "45px",
              marginTop: "10px",
            }}
          />
          <div className="links">
            <Menu
              style={{ float: "right", margin: "none" }}
              theme="light"
              mode="horizontal"
              items={items.map((item) => {
                const key = item;
                return { key, label: item };
              })}
            />
            <div
              className="login-links"
              style={{ display: "flex", gap: "10px" }}
            >
              <Button type="primary" className="btn">
                Log in
              </Button>
              <Button type="primary" className="btn">
                Registration
              </Button>
            </div>
          </div>
        </Header>
        <Content
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            paddingInline: "5vw",
            paddingBlock: "3vw",
          }}
        >
          <div className="hero-wrapper">
            <div className="text-wrapper">
              <h2 style={{ fontWeight: "bold", color: "#00CA72" }}>
                Bahon Express is your ultimate delivery solution
              </h2>
              <h1 style={{ color: "#004188" }}>YOUR DELIVERY PARTNER</h1>
              <Button type="primary" style={{ fontWeight: "bold" }}>
                Become our Merchant
              </Button>
            </div>
            <img src="./Bahonweb.svg" />
          </div>
          <div className="track-wrapper">
            <h1 className="track-h1">Track Your Parcel</h1>
            {/* <Form name="basic">
              <Form.Item
                placeholder="PLACE ORDER ID"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button type="primary" htmlType="submit">
                  Submit
                </button>
              </Form.Item>
            </Form> */}
            <Form
              form={form}
              name="horizontal_login"
              layout="inline"
              className="track-form"
            >
              <Form.Item name="order_id">
                <Input placeholder="PARCEL ORDER ID" />
              </Form.Item>
              <Form.Item name="mobile_number">
                <Input placeholder="MOBILE NUMBER" />
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button type="primary" className="btn" htmlType="submit">
                    Track
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          <div className="delivery-wrapper">
            <h1>What we Deliver</h1>

            <Divider
              style={{
                color: "gray",
                fontSize: "1.25rem",
                paddingBlock: "2em",
                // paddingTop: "4vw",
                borderColor: "black",
              }}
            >
              Some kind of product we deliver to our respected client
            </Divider>
            <Row gutter={16} style={{ justifyContent: "center" }}>
              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faFileLines}
                    />
                  }
                ></Card>
              </Col>
              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faBoxesPacking}
                    />
                  }
                ></Card>
              </Col>

              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faBurger} />
                  }
                ></Card>
              </Col>

              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faCartShopping}
                    />
                  }
                ></Card>
              </Col>
              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faBolt} />
                  }
                ></Card>
              </Col>

              <Col className="gutter-row" md={4} sm={6}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faGift} />
                  }
                ></Card>
              </Col>
            </Row>
          </div>
          <Footer className="footer">
            <header>
              <h2>Quota</h2>
              <p>
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Omnis, accusantium?"
              </p>
              <ul class="icons">
                <ion-icon class="icon" name="logo-facebook"></ion-icon>
                <ion-icon class="icon" name="logo-instagram"></ion-icon>
                <ion-icon class="icon" name="logo-twitter"></ion-icon>
                <ion-icon class="icon" name="logo-youtube"></ion-icon>
              </ul>
            </header>
            <aside>
              <ul class="category">
                <li>
                  <h3>Project</h3>
                </li>
                <li>Houses</li>
                <li>Rooms</li>
                <li>Flats</li>
                <li>Apartments</li>
              </ul>
              <ul class="category">
                <li>
                  <h3>Company</h3>
                </li>
                <li>Objective</li>
                <li>Capital</li>
                <li>Security</li>
                <li>Selling</li>
              </ul>
              <ul class="category">
                <li>
                  <h3>Movement</h3>
                </li>
                <li>Movement</li>
                <li>Support us</li>
                <li>Pricing</li>
                <li>Renting</li>
              </ul>
              <ul class="category">
                <li>
                  <h3>Help</h3>
                </li>
                <li>Privacy</li>
                <li>Contact</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </aside>
          </Footer>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
