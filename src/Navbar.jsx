import React, { useState, useEffect } from "react";
import { Layout, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./styles/navbar.css";
const { Header } = Layout;

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

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Show the dropdown if the window width is less than 750 pixels
    if (windowWidth < 750) {
      setVisible(false); // Ensure it's closed by default
    } else {
      setVisible(false);
    }
  }, [windowWidth]);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const menu = (
    <Menu theme="light" mode="vertical">
      {menuItems}
    </Menu>
  );
  const dropdownMenu = (
    <Menu theme="light" mode="vertical">
      {menuItems}
      <Menu.Item key="login">
        <Button
          type="primary"
          className="btn"
          style={{ width: "50%", marginRight: "10px" }}
        >
          Log in
        </Button>
      </Menu.Item>
      <Menu.Item key="registration">
        <Button
          type="primary"
          className="btn"
          style={{ width: "100%", marginRight: "10px" }}
        >
          Registration
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="./Bahon.png"
            alt="bahon logo"
            style={{
              width: "min(30vw, 6.5em)",
              height: "min(8vh, 2.75em)",
              marginTop: "20px",
            }}
          />
        </Link>
      </div>
      <div className="menu">
        {windowWidth > 750 ? (
          <Menu theme="light" mode="horizontal">
            {menuItems}
          </Menu>
        ) : null}
      </div>
      <div className="login-links">
        {windowWidth > 750 ? (
          <>
            <Button
              type="primary"
              className="btn"
              style={{ width: "50%", marginRight: "10px" }}
            >
              Log in
            </Button>
            <Button type="primary" className="btn" style={{ width: "60%" }}>
              Registration
            </Button>
          </>
        ) : null}
      </div>
      {windowWidth < 750 ? (
        <Dropdown
          overlay={dropdownMenu} //overlay
          placement="bottomRight"
          visible={visible} //visible
          onVisibleChange={toggleDropdown} //onVisibleChange
        >
          <Button className="menu-button" type="text">
            <MenuOutlined />
          </Button>
        </Dropdown>
      ) : null}
    </Header>
  );
};

export default Navbar;
