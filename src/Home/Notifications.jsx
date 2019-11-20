import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import EmailCollector from './component/emailcollector';
import ActiveUsers from './component/ActiveUsers';
import Discounts from './component/Discounts';

const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    title: 'Plug and play notifications',
    content: 'Designed based on the Ant Design system',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'Customizable triggers',
    content: 'Refine typical pages and scenes from mid- and back-end applications',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'Collect page visits data',
    content: 'Automated testing guarantees front-end product quality',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
    color: '#1890FF',
    shadowColor: 'rgba(24,144,255,.12)',
  },
  {
    title: 'Customize the appearance',
    content: 'Developed with front-end technology such as React/dva/antd',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
  {
    title: 'Responsive',
    content: 'Designed for different screen sizes',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
  },
  {
    title: 'Predefined templates',
    content: 'Configurable themes to meet diverse brand appeals',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
  },
  {
    title: 'Personlize branding',
    content: 'Built-in industry-wide international solution (please stay tuned)',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
  },
  {
    title: 'Integrate easily',
    content: 'Good engineering practices help you consistently produce high quality code',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,.12)',
  },
  {
    title: '24x7 Support',
    content: 'Practical local data debugging solution',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,.12)',
  },
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }

  onMouseOver = i => {
    this.setState({
      hoverNum: i,
    });
  };

  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  };

  getEnter = e => {
    const i = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: 'easeOutBack',
        duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1,
      },
    ];
  };

  render() {
    const { hoverNum } = this.state;
    const { isMobile } = this.props;

    return (
      <div className="home-page">
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2>
            What can <span>ProofCred</span> do for you{' '}
          </h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <div className={`page1-box-wrapper ${isMobile ? 'mobile' : ''}`}>
            {isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '60px 10px 0px' }}>
                <EmailCollector />
              </Col>
            )}
            <Col lg={12} md={12} sml={24} style={{ padding: '0 10px' }}>
              <h1>Email collector</h1>
              <div>
                Collect email addresses for of website visitors for your mailing list or as contact
                us method
              </div>
            </Col>
            {!isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '0 10px' }}>
                <EmailCollector />
              </Col>
            )}
          </div>
          <div className={`page1-box-wrapper ${isMobile ? 'mobile' : ''}`}>
            {!isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '0px 10px' }}>
                <ActiveUsers />
              </Col>
            )}
            <Col lg={12} md={12} sml={24} style={{ padding: '0 10px' }}>
              <h1>Email collector</h1>
              <div>
                Collect email addresses for of website visitors for your mailing list or as contact
                us method
              </div>
            </Col>
            {isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '60px 10px 0px' }}>
                <ActiveUsers />
              </Col>
            )}
          </div>
          <div className={`page1-box-wrapper ${isMobile ? 'mobile' : ''}`}>
            {isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '60px 10px 0px' }}>
                <Discounts />
              </Col>
            )}
            <Col lg={8} md={8} sml={24} style={{ padding: '0 10px' }}>
              <h1>Email collector</h1>
              <div>
                Collect email addresses for of website visitors for your mailing list or as contact
                us method
              </div>
            </Col>
            {!isMobile && (
              <Col lg={16} md={16} sml={24} style={{ padding: '0 10px' }}>
                <Discounts />
              </Col>
            )}
          </div>
          <div className={`page1-box-wrapper ${isMobile ? 'mobile' : ''}`}>
            {!isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '0px 10px' }}>
                <EmailCollector />
              </Col>
            )}
            <Col lg={12} md={12} sml={24} style={{ padding: '0 10px' }}>
              <h1>Email collector</h1>
              <div>
                Collect email addresses for of website visitors for your mailing list or as contact
                us method
              </div>
            </Col>
            {!isMobile && (
              <Col lg={12} md={12} sml={24} style={{ padding: '60px 10px 0' }}>
                <EmailCollector />
              </Col>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  isMobile: PropTypes.bool,
};

export default Notifications;
