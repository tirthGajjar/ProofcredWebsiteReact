import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Icon, Popover } from "antd";
import Scrollspy from "react-scrollspy";

// import ScrollableAnchor from 'react-scrollable-anchor';

import Logo from "./component/logo";

const searchEngine = "Google";

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool
  };

  state = {
    menuVisible: false
  };

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible
    });
  };

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? "inline" : "horizontal";
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen
    });

    const menu = [
      <Menu mode={menuMode} defaultSelectedKeys={["home"]} id="nav" key="nav">
        <Menu.Item key="home">
          <a href="/#scroll-anchor-banner">Home</a>
        </Menu.Item>
        <Menu.Item key="features">
          <a href="/#scroll-anchor-features">Features</a>
        </Menu.Item>
        <Menu.Item key="pricing">
          <a href="/#scroll-anchor-pricing">Pricing</a>
        </Menu.Item>
        <Menu.Item key="register">
          <a href="https://app.proofcred.com/register">Sign Up</a>
        </Menu.Item>
        <Menu.Item key="login">
          <a href="https://app.proofcred.com/login">Login</a>
        </Menu.Item>
      </Menu>
    ];

    return (
      <header id="header" className={headerClassName}>
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              <Logo />
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === "horizontal" ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
