import React from 'react';
import './company.css';
import companyImg from '../../assets/images/companyImg.png';
import Work from '../Work/Work';

const Company = () => {
  return (
    <>
      <div className="company container">
        <div className="company_title">Company</div>
        <div className="company_info">
          <div className="company_info-left">
            APEX Capital Realty is an independent commercial real estate brokerage firm like no
            other. We specialize in finding and creating South Florida’s most unique and lucrative
            opportunities in the market.
            <br /> <br />
            APEX Capital Realty is composed of industry experts and disruptors which possess an
            unparalleled understanding of the unique dynamics and trends that drive our local real
            estate market. We believe in having a transformative impact in our industry through
            leadership and advocacy which helps push the creative boundary of what can be achieved.
            With collaboration engrained in our company culture, we seek to develop each of our
            advisors’ specialty which in turn helps our clients reach optimal results.
            <br /> <br />
            Our focused range of services speaks to our extensive breadth of industry knowledge. We
            provide services within the traditional asset classes but also seek to integrate the new
            generation of specialized concepts including co-working, co-living, short-term rentals,
            last-mile distribution, senior living, and student housing. By applying future trends
            into our process, we can uncover additional value for our clients that realize the full
            potential of their properties.
          </div>
          <div className="capabilities_info_left_inner">
            <img src={companyImg} alt="capabilitiesFour" />
            <span className="capabilities_info_subtitle company_info_subtitle">
              <span className="sssss">
                WE LOOK AT COMMERCIAL
                <br /> REAL ESTATE THROUGH A <br /> DIFFERENT LENS THAN THE <br /> REST
              </span>
            </span>
          </div>
        </div>
      </div>
      <Work />
    </>
  );
};

export default Company;
