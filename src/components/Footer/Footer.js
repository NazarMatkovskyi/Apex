import React from 'react';
import './footer.css';
import linkedln from '../../assets/images/linkedln.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import footerLogo from '../../assets/images/footerLogo.svg';

const menuFooter = [
  {
    title: 'APEX',
    info: 'Legal',
    infoTwo: 'Privacy policy',
  },
  {
    title: 'Company',
    info: 'About',
    infoTwo: 'Listing',
    infoThree: 'Careers',
  },
  {
    title: 'Support',
    info: 'Contact US',
    infoTwo: 'Media',
  },
  {
    title: 'Contact US',
    info: 'APEX Capital Realty',
    infoTwo: '901 NE 79 ST Miami, FL 33138',
    infoThree: '(305) 570-2600',
    infoFour: 'info@apexcapitalrealty.com',
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer container">
        <div className="footer_menu">
          {menuFooter.map((item, index) => (
            <ul key={index} className="footer_menu-list">
              <span className="footer_menu-title">{item.title}</span>
              <li> {item.info}</li>
              <li> {item.infoTwo} </li>
              <li> {item.infoThree}</li>
              <li> {item.infoFour}</li>
            </ul>
          ))}
        </div>
        <div className="footer_menu-info">
          <div className="footer_menu-info-inner">
            <span>FOLLOW US IN SOCIAL MEDIAS</span>
            <span className="footer_menu-info-inner-icon">
              <img src={linkedln} alt="linkedln" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </span>
          </div>
        </div>
      </div>
      <hr className="footer_line" />
      <div className="footer_last container">
        <div className="footer_last-info">
          <img src={footerLogo} alt="footerLogo" />
          <span>© 2018 APEX Capital Realty</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
