import React from 'react';
import { Row, Col, Button, Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1513957_il1621bzc9t.js',
});

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={3} sm={24} xs={24}>
            <div className="footer-center">
              <h2>About us</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  Proofcred
                </a>
              </div>
              <IconFont type="icon-linkedin1" />
              <IconFont type="icon-facebook1" />
              <IconFont type="icon-instagram" />
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Product</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://motion.ant.design">
                  Ant Motion
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact us</h2>
              <div>
                <a href="#">support@proofcred.com</a>
              </div>
            </div>
          </Col>
          <span style={{ textAlign: 'center' }}>Copyright © Proofcred</span>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
