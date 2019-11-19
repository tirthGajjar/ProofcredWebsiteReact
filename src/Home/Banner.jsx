import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';
import BannerSVGAnimMobile from './component/BannerSVGAnimMobile';

function Banner({ isMobile }) {
  return (
    <div className="banner-wrapper">
      {isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnimMobile />
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={isMobile ? 'bottom' : 'right'}>
        <h1 key="h1">Attract & convert your website visitors</h1>
        <p key="content">Increases trust, credibility, and sales with social proof</p>
        <div key="button" className="button-wrapper">
          <a href="https://app.Proofcred.com/register" target="_blank" rel="noopener noreferrer">
            <Button type="primary">Start your free trial</Button>
          </a>
        </div>
      </QueueAnim>
      {!isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
