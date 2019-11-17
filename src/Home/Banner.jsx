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
        <h1 key="h1">Proofcred</h1>
        <p key="content">Increase Conversions & Site Growth - Proofcred</p>
        <div key="button" className="button-wrapper">
          <a href="https://app.proofcred.com/register" target="_blank" rel="noopener noreferrer">
            <Button type="primary">Sign Up Now</Button>
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
