import React from 'react';
import { Row, Col, Button, Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1518617_t6ler3oyl6a.js',
});

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={10} md={10} sm={24} xs={24}>
            <div className="footer-center">
              <h2>About us</h2>
              <div>
                We want to empower our customers to increase conversation rate of the visitors on
                their platform by enabling them to perform targeted engagement with the visitors
                with minimum development requirement.
              </div>
              <a
                href="https://www.linkedin.com/company/ProofCred/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFont type="icon-linked" />
{' '}
              </a>
              <a
                href="https://www.facebook.com/ProofCred/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFont type="icon-facebook" />
{' '}
              </a>
              <a href="https://twitter.com/ProofCred/" target="_blank" rel="noopener noreferrer">
                <IconFont type="icon-twitter" />
{' '}
              </a>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Product</h2>
              <div>
                <a href="/#pricing">Pricing</a>
              </div>
              <div>
                <a href="/#features">Features</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">
                  Blog
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">
                  FAQ
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact us</h2>
              <div>
                <a href="#">support@Proofcred.com</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center', paddingTop: '60px' }}>
          <span style={{ color: 'white' }}>Copyright © ProofCred</span>
          <span style={{ margin: '0px 1rem' }}>|</span>
          <span>
            <a href="/#terms">Terms and Condition</a>
          </span>
          <span style={{ margin: '0px 1rem' }}>|</span>
          <span>
            <a href="/#privacy-policy">Privacy Policy</a>
          </span>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
