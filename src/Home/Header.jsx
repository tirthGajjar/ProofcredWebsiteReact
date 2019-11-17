import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Popover, Button } from 'antd';
import Logo from './component/logo';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }
    
  componentDidMount() {
    window.addEventListener('hashchange', this.updateSelectedSection, false);
  }
  
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateSelectedSection, false);
  }
  
  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
      selectedKeys: ['#home'],
    });
  };
  
  updateSelectedSection = () => {
    const selectedKeys = [window.location.hash || '#home'];
    this.setState({
      selectedKeys,
    });
  };

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible, selectedKeys } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menu = [
      <Menu
        mode={menuMode}
        defaultSelectedKeys={['#home']}
        selectedKeys={selectedKeys}
        id="nav"
        key="nav"
      >
        <Menu.Item key="#home">
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item key="#features">
          <a href="#features">Features</a>
        </Menu.Item>
        <Menu.Item key="#pricing">
          <a href="#pricing">Pricing</a>
        </Menu.Item>
        <Menu.Item key="#register">
          <Button size="small"><a href="https://app.proofcred.com/register">Sign Up</a></Button>          
        </Menu.Item>
        <Menu.Item key="#login">
          <Button size="small"><a href="https://app.proofcred.com/login">Login</a></Button>
        </Menu.Item>
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon className="nav-phone-icon" type="menu" onClick={this.handleShowMenu} />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              <Logo />
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}

Header.propTypes = {
  isFirstScreen: PropTypes.bool,
  isMoblie: PropTypes.bool,
};

Header.defaultProps = {
  isFirstScreen: false,
  isMoblie: false,
};

export default Header;