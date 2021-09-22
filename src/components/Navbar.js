import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/crytocurrency.jpg";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto App</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu style={{ backgroundColor: "#141414", color: "blue" }}>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/" style={{ color: "blue" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies" style={{ color: "blue" }}>
            Cryptocurrencies
          </Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges" style={{ color: "blue" }}>
            Exchanges
          </Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news" style={{ color: "blue" }}>
            News
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
