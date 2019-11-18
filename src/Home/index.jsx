import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
// import Page2 from './Page2';
import Footer from "./Footer";
import "./static/style";
import Pricing from "./component/Pricing";

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    return (
      <DocumentTitle title="Proofcread">
        <div>
          <Header isMobile={this.state.isMobile} />
          <ScrollableAnchor id="scroll-anchor-banner">
            <div />
          </ScrollableAnchor>
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <ScrollableAnchor id="scroll-anchor-features">
              <Page1 />
            </ScrollableAnchor>
            <ScrollableAnchor id="scroll-anchor-pricing">
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
