import './static/style';

import DocumentTitle from 'react-document-title';
import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
import Notifications from './Notifications';
// import Page2 from './Page2';
import Footer from './Footer';
import Header from './Header';
import Pricing from './component/Pricing';
import TermsAndCondition from './component/TermsAndCondition';
import PrivacyPolicy from './component/PrivacyPolicy';

let isMobile;

enquireScreen(b => {
  isMobile = b;
});

configureAnchors({ offset: -150, scrollDuration: 200 });

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    const { isMobile } = this.state;
    const hashRoute = window.location.hash;
    return (
      <DocumentTitle title="ProofCred">
        <div>
          <Header isMobile={isMobile} />
          {hashRoute === '#terms' ? (
            <TermsAndCondition />
          ) : (
            <div />
          )}
          {hashRoute === '#privacy-policy' ? (
            <PrivacyPolicy />
          ) : (
            <div />
            )}
          {hashRoute !== '#privacy-policy' && hashRoute !== '#terms' ? (
            <div className="home-wrapper">
              <ScrollableAnchor id="home">
                <div>
                  <div
                    className="home-placeholder"
                    style={{ height: '100vh', position: 'absolute' }}
                  />
                  <Banner isMobile={isMobile} />
                </div>
              </ScrollableAnchor>
              <ScrollableAnchor id="features">
                <Notifications isMobile={isMobile} />
              </ScrollableAnchor>
              <ScrollableAnchor id="pricing">
                <Pricing />
              </ScrollableAnchor>
            </div>
          ) : (
            <div />
          )}
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
