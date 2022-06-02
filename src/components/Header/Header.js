import React from 'react';
import './header.css';
import arrowBtn from '../../assets/images/arrowBtn.svg';
import arrowScroll from '../../assets/images/arrowScroll.svg';
import Properties from '../Properties/Properties';

const Header = () => {
  return (
    <>
      <div className="header_info">
        <div className="header_info-left">
          <span className="header_info-left_title">
            Breaking away from traditional <br /> commercial brokerage and bringing <br /> an edge
            to today’s market
          </span>
          <button className="header_info-left_btn">
            EXPLORE <img src={arrowBtn} alt="arrow" />
          </button>
        </div>
        <div className="header_info-right">
          <span className="header_info-right_inner">
            SCROLL
            <img src={arrowScroll} alt="arrowScroll" />
            <img src={arrowScroll} alt="arrowScroll" className="header_right-arrow" />
          </span>
        </div>
      </div>
      <Properties />
    </>
  );
};

export default Header;
