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
  Carousel,
} from "antd";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faBurger,
  faCartShopping,
  faBolt,
  faGift,
  faBoxesPacking,
} from "@fortawesome/free-solid-svg-icons";

import {
  faClock,
  faCalendarDay,
  faCity,
  faMapLocationDot,
  faMoneyBill1,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons";

const { Header, Footer, Sider, Content } = Layout;
const items = ["Tracking", "Pricing", "Q&A", "Contact Us"];
const merchants = [
  { src: "/Dhaka-Republic.jpg", alt: "dhaka republic" },
  { src: "/Dhakaiya-Koreana.png", alt: "dhakaiya koreana" },
  { src: "/eurosiabd.jpg", alt: "eurosia" },
  { src: "/Happy-Paws-Pet-Shop.png", alt: "happy paws" },
  { src: "/Khati-organic-food.jpg", alt: "khati organic" },
  { src: "/Muntaha-Fashion-House.jpg", alt: "muntaha fashion" },
  { src: "/Palate.jpg", alt: "palate" },
  { src: "/Spice-Hues.png", alt: "spice hues" },
  { src: "/Tanzila-Haider-Couture.jpg", alt: "tanzila haider couture" },
  { src: "/The-Label.png", alt: "the label" },
  { src: "/Totem-BD.jpg", alt: "vs mask" },
  { src: "/VS-Mask.png", alt: "vs mask" },
];

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
            // paddingInline: "5vw",
            paddingBlock: "3vw",
          }}
        >
          <div className="hero-wrapper">
            <div className="text-wrapper">
              <h2 style={{ fontWeight: "bold", color: "#00CA72" }}>
                Bahon Express is your ultimate delivery solution
              </h2>
              <h1 style={{ color: "#004188" }}>YOUR DELIVERY PARTNER</h1>
              <Button
                type="primary"
                style={{ fontWeight: "bold", backgroundColor: "#5aa86c" }}
              >
                Become our Merchant
              </Button>
            </div>
            <img src="/Bahonweb.svg" alt="bahon logo" />
          </div>
          <div className="track-wrapper">
            <h1>Track Your Parcel</h1>
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
              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faFileLines}
                    />
                  }
                >
                  Document
                </Card>
              </Col>
              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faBoxesPacking}
                    />
                  }
                >
                  Package
                </Card>
              </Col>

              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faBurger} />
                  }
                >
                  Food
                </Card>
              </Col>

              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faCartShopping}
                    />
                  }
                >
                  Grocery
                </Card>
              </Col>
              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faBolt} />
                  }
                >
                  Electronics
                </Card>
              </Col>

              <Col className="gutter-row" md={4} sm={8}>
                <Card
                  hoverable
                  style={{
                    width: 120,
                    backgroundColor: "#F1F7F7",
                    fontWeight: "500",
                    fontFamily: "'Playpen Sans', cursive",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faGift} />
                  }
                >
                  Gift
                </Card>
              </Col>
            </Row>
          </div>
          <div className="about-wrapper">
            <h1>Impossible is not an option!</h1>
            <p
              style={{
                fontWeight: "bold",
                paddingBlock: "3em",
                paddingTop: "1.25em",
              }}
            >
              Need to deliver a parcel? Choose Bahon!
            </p>
            <Row gutter={16} style={{ justifyContent: "center" }}>
              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faClock} />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Same Day Delivery
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    Collection prior 12pm, delivery shall be executed within 8
                    hours.
                  </p>
                </Card>
              </Col>
              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faCalendarDay}
                    />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Next Day Delivery
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    Collection prior 4pm, we guarantee delivery within 24 hours
                    within city limits. We shall SMS prior to delivery.
                  </p>
                </Card>
              </Col>

              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon className="custom-icon" icon={faCity} />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Subcity Delivery
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    We provide delivery services to Dhaka and sub-urban/areas of
                    Dhaka. We are expanding our coverages to meet the daily
                    growing challenges.
                  </p>
                </Card>
              </Col>

              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faMapLocationDot}
                    />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Outside city Delivery
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    We provide delivery services to Dhaka and sub-urban/areas of
                    Dhaka. We are expanding our coverages to meet the daily
                    growing challenges.
                  </p>
                </Card>
              </Col>
              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faMoneyBill1}
                    />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Cash on Delivery
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    Our delivery staff shall safely deliver your parcels to your
                    customers. After fulfilling the transaction, Bahon Express
                    shall release the payment to your preferred account.
                  </p>
                </Card>
              </Col>

              <Col className="gutter-row" lg={6} md={8} sm={12}>
                <Card
                  // hoverable
                  style={{
                    width: 220,
                    // outline: "auto",
                  }}
                  cover={
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faFileExcel}
                    />
                  }
                >
                  <p style={{ fontWeight: "500", fontFamily: "cursive" }}>
                    Data Entry
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    Bahon Express dedicated Customers Support staff shall
                    provide complimentary assistance to register an account with
                    Bahon. We are just a call away for your queries, should you
                    have difficulties in logging into the system.
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="about-extra">
            <div className="word-container">
              <p>Why we are?</p>
              <div className="word-line1">Secure way to deliver</div>
              <div className="word-line2">Smart way to deliver</div>
            </div>
          </div>
          <div
            className="merchants-wrapper"
            style={{ margin: "auto", marginBlock: "8vh", textAlign: "center" }}
          >
            <h1>Our Valued Merchants</h1>
            <p style={{ fontWeight: "bold", color: "#004188" }}>
              We provide excellent service to all our customers to further our
              relationship to a next phase in business activities.
            </p>
            <div className="carousel">
              <Carousel style={{ minHeight: "250px", outline: "auto" }}>
                {merchants.map((item) => {
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100px" }}
                  />;
                  console.log(item.src);
                })}
              </Carousel>
            </div>
          </div>
          <div className="story-wrapper">
            <h1>Our Story</h1>
            <p>
              Bahon Express Ltd., founded in 2020, provides logistic management
              services to local merchants in Bangladesh.
            </p>
            <div className="story-text">
              <img
                src="/white-icon-1.png"
                style={{
                  backgroundColor: "#3AB569",
                  padding: "15px",
                  marginBlock: "3vh",
                  marginInline: "6vw",
                  width: "20vw",
                }}
              />
              <p>
                Bahon Express Ltd., founded in 2020, provides logistic
                management services to local merchants in Bangladesh. We deliver
                all sorts of E-commerce packages both B2B and B2C with the
                ultimate delivery solution. Bahon Express Ltd. has vast
                knowledge in the logistics business. We thrive continuously to
                implement, respond and cater to our merchants’ requirements,
                Bahon Express is in the process of expanding the area of its
                competency, establishing itself as one of the leading logistics
                service providing companies. Our comprehensive package of
                services and solutions cater to all of the needs of merchants.
                With a responsible, equitable solution, we make customized
                logistical support to satisfy the priorities of each customer.
              </p>
            </div>
          </div>
          <div className="merchant-wrapper">
            <div className="img-text-wrapper">
              <img src="white-icon-1.png" />
              <div className="text-wrapper">
                <h1 style={{ color: "white" }}>We're Waiting To Help You</h1>
                <p style={{ color: "white", fontWeight: "400" }}>
                  Get in touch with us today and let’s start transforming your
                  business from the ground up
                </p>
              </div>
              <Button className="become-btn">Become our merchant</Button>
            </div>
          </div>
          <Footer className="footer">
            <header className="footer-header">
              <img src="/Bahon.png" />
              <p>
                Bahon Express is the trusted platform that provides parcel
                delivery system based on an app where you can track your parcel
              </p>
            </header>
            <aside>
              <ul className="category">
                <li>
                  <h3>Project</h3>
                </li>
                <li>Houses</li>
                <li>Rooms</li>
                <li>Flats</li>
                <li>Apartments</li>
              </ul>
              <ul className="category">
                <li>
                  <h3>Company</h3>
                </li>
                <li>Objective</li>
                <li>Capital</li>
                <li>Security</li>
                <li>Selling</li>
              </ul>
              
            </aside>
          </Footer>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
