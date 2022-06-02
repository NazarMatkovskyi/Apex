import React from 'react';
import './capabilities.css';
import capabilitiesOne from '../../assets/images/imagesOne.png';
import capabilitiesThree from '../../assets/images/imagesTwo.png';
import capabilitiesTwo from '../../assets/images/imagesThree.png';
import capabilitiesFour from '../../assets/images/imagesFour.png';
import capabilitiesOneMobile from '../../assets/images/capabilitiesOneMobile.svg';
import capabilitiesTwoMobile from '../../assets/images/capabilitiesTwoMobile.svg';
import capabilitiesThreeMobile from '../../assets/images/capabilitiesThreeMobile.svg';
import capabilitiesFourMobile from '../../assets/images/capabilitiesFourMobile.svg';
import Company from '../Company/Company';
import useResize from '../../Constant/useResize';

const list = [
  '- Destination Retail / F&B Curation',
  '- Regional Tenant Representation',
  '- Landlord Representation',
  '- Industrial/Last Mile Logistics',
  '- Creative Office / Co-Working',
];
const contentMobile = [
  {
    title: 'Agile Investment Sales',
    image: capabilitiesOneMobile,
  },
  {
    title: 'Debt & Advisory Services',
    image: capabilitiesTwoMobile,
  },
  {
    title: '  Marketing & Concept',
    image: capabilitiesThreeMobile,
  },
  {
    image: capabilitiesFourMobile,
  },
];

const Capabilities = () => {
  const { innerWidth } = useResize();
  return (
    <div>
      <div className="capabilities container">
        <div className="capabilities_title">Capabilities</div>
        {innerWidth && innerWidth >= 1200 ? (
          <div className="capabilities_inner">
            <div className="capabilities_info">
              <div className="capabilities_info_left_inner">
                <img src={capabilitiesOne} alt="capabilitiesOne" />
                <span className="capabilities_info_subtitle">Agile Investment Sales</span>
              </div>
              <div className="capabilities_info_left_inner">
                <img src={capabilitiesTwo} alt="capabilitiesTwo" />
                <span className="capabilities_info_subtitle">Debt & Advisory Services</span>
              </div>
            </div>
            <div className="capabilities_info">
              <div className="capabilities_info_right_inner">
                <img
                  className="capabilities_info_left_inner_images"
                  src={capabilitiesThree}
                  alt="capabilitiesThree"
                />
                <div className="capabilities_info_right_inner-info">
                  <span className="capabilities_info_right_inner-title">
                    Creative leasing & <br /> Consulting
                  </span>
                  <ul className="capabilities_info_right_inner-list">
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="capabilities_info_left_inner">
                <img src={capabilitiesFour} alt="capabilitiesFour" />
                <span className="capabilities_info_subtitle">Marketing & Concept Development</span>
              </div>
            </div>
          </div>
        ) : (
          //   ForMobile
          <div className="capabilities_inner">
            <div className="capabilities_info">
              <div className="capabilities_info-mobile">
                {contentMobile.map((item, index) => (
                  <div className="capabilities_info_left_inner" key={index}>
                    <img src={item.image} alt="capabilitiesOne" />
                    <span className="capabilities_info_subtitle">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="capabilities_info_right_inner-info">
                <span className="capabilities_info_right_inner-title">
                  Creative leasing & <br /> Consulting
                </span>
                <ul className="capabilities_info_right_inner-list">
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Company />
    </div>
  );
};

export default Capabilities;
