import React from 'react';
import insightsOne from '../../../assets/images/insightsOne.svg';


const PagePress = () => {
  return <div>
      <div className="insights_info-left">
            <img src={insightsOne} alt="insightsOne" className="insightsOneImages" />
            <div className="insights_info-left-inner">
              <div className="insights_info-left_time">
                <span>
                  SEP 11, 2020
                  <span className="insights_info-blog">BLOG</span>
                </span>
              </div>

              <span className="insights_info_subtitle">
                Lacinia laoreet metus sed magna sapien sodales consequat
              </span>
            </div>
          </div>
  </div>;
};

export default PagePress;
