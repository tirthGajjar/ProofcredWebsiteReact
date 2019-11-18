/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import Pricing2 from './Pricing2';
import QueueAnim from 'rc-queue-anim';
import { Pricing20DataSource } from './data.source';
import './less/antMotionStyle.less';
import { Button } from 'antd';

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
      isMonthlyPlan: false,
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  onPlanChange(e) {
    const val = this.state.isMonthlyPlan;
    this.setState({
      isMonthlyPlan: !val,
    });
  }

  render() {
    const children = [
      <Pricing2
        id="Pricing2_0"
        key="Pricing2_0"
        dataSource={Pricing20DataSource}
        isMobile={this.state.isMobile}
        onPlanChange={this.onPlanChange.bind(this)}
        isMonthlyPlan={this.state.isMonthlyPlan}
      />,
    ];
    return (
      <div>
        <QueueAnim
            type="bottom"
            leaveReverse
            ease={['easeOutQuad', 'easeInOutQuad']}
            key="content"
          >
            <div className="pricing-header-message">
              <h1 className="c-white f-2-5">Plan and Pricing</h1>
              <span className="pricing-header-span">Use free for 15 days.</span>
              <span className="pricing-header-span">Get started immediately, pay when ypu are ready.</span>
              <div className="m-2">
                <a target="_blank" href="https://app.proofcred.com/register">
                  <Button className="pricing-custom-sign-up-butoon" size='large'>SIGN UP FOR FREE</Button>
                </a>
              </div>
            </div>
        </QueueAnim>    
        <div
          className="pricing-table-wrapper"
          ref={d => {
            this.dom = d;
          }}
        >
          {this.state.show && children}
        </div>
      </div>
    );
  }
}
