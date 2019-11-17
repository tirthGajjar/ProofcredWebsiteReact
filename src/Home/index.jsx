import './static/style';

import DocumentTitle from 'react-document-title';
import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
// import Page2 from './Page2';
import Footer from './Footer';
import Header from './Header';
import Page1 from './Page1';
import Pricing from './component/Pricing';

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
    return (
      <DocumentTitle title="Proofcread">
        <div>
          <Header isMobile={isMobile} />
          <div className="home-wrapper">
            <ScrollableAnchor id="home">
              <div className="home-placeholder" style={{ height: '100vh', position: 'absolute' }} />
            </ScrollableAnchor>
            <Banner isMobile={isMobile} />
            <ScrollableAnchor id="features">
              <Page1 />
            </ScrollableAnchor>
            <ScrollableAnchor id="pricing">
              <Pricing />
            </ScrollableAnchor>
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
