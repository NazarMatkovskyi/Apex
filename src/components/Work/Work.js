import React from 'react';
import Insights from '../Insights/Insights';
import './work.css';

const workInfo = [
  {
    price: '$331+',
    subtitle: 'Million in Transactional Volume Since our Inception',
  },
  {
    price: '60+',
    subtitle: 'Years of combined market experience',
  },
  {
    price: '275+',
    subtitle: 'Commercial Real Estate Transactions',
  },
];

const Work = () => {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="work_title">This is what we do</div>
          <div className="work_inner">
            {workInfo.map((item, index) => (
              <div className="work_inner-block" key={index}>
                <div className="work_inner-block-price">{item.price}</div>
                <div className="work_inner-block-subtitle">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="work_report">
        <div className="container">
          <div className="work_report_inner">
            <div className="work_report_title">TOP25</div>
            <div className="work_report_subtitle">
              APEX Capital RealtySouth Florida Commercial Real Estate <br /> BrokeragesRanked by Sum
              dollar volume sales/leases
            </div>
          </div>
        </div>
      </div>
      <Insights />
    </>
  );
};

export default Work;
