import { useState } from "react";

import { Layout, Menu, Button } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";

import "../styles/homelayout.css";

const { Header, Content, Footer } = Layout;
const items = [
  { key: "home", label: "Home", link: "/" },
  { key: "pricing", label: "Pricing", link: "/pricing" },
  { key: "QnA", label: "Q&A", link: "/QnA" },
  { key: "contact", label: "Contact Us", link: "/contact" },
];

const menuItems = items.map((item) => (
  <Menu.Item key={item.key}>
    <Link to={item.link}>{item.label}</Link>
  </Menu.Item>
));

function HomeLayout() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          // minHeight: "100vh",
          // width: "100%",
          // alignItems: "center",
        }}
      >
        {/* <Navbar
          menuItems={menuItems}
          menuVisible={menuVisible}
          toggleMenu={toggleMenu}
        /> */}

        <Content>
          <Outlet />
        </Content>
        <Footer className="footer">
          <header
            className="footer-header"
            style={{
              marginBlock: "2em",
              // outline: "auto",
            }}
          >
            <img src="/Bahon.png" alt="bahon logo" />
            <p>
              Bahon Express is the trusted platform that provides parcel
              delivery system with users being able to track.
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
      </Layout>
    </>
  );
}

export default HomeLayout;
