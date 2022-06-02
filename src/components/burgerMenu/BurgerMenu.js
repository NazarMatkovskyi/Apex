import React, { useState } from 'react';
import useResize from '../../Constant/useResize';
import './burgerMenus.css';

const listMenu = ['Home', 'Properties ', 'Company', 'Latest', 'Capabilities', 'Lets talk'];
const contact = [
  {
    title: 'MIAMI OFFICE',
    name: 'APEX Capital Realty',
    location: '901 NE 79 ST Miami, FL 33138',
    number: '(305) 570-2600',
  },
  {
    title: 'MIAMI BEACH OFFICE',
    name: '901 NE 79 ST Miami, FL 33138',
    location: '(305) 570-2600',
    mail: 'info@apexcapitalrealty.com',
  },
  {
    name: 'Press inquiries contact:',
    mail: 'info@apexcapitalrealty.com',
  },
];

const BurgerMenu = () => {

  const { innerWidth } = useResize();
  return (
    <div>
      {innerWidth && innerWidth >= 870 ? (
        <div className="menu">
          <div className="menu_left">
            {listMenu.map((item, index) => (
              <ul key={index} className="menu_left_inner">
                <li className="menu_left_text">{item}</li>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <div className="menu">
          <div className="menu_left">
            {listMenu.map((item, index) => (
              <ul key={index} className="menu_left_inner">
                <li className="menu_left_text">{item}</li>
              </ul>
            ))}
          </div>
          <div className="menu_mobile-info">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>FACEBOOK</span>
          </div>
          <div className="menu_mobile-contacts">
            {contact.map((item, index) => (
              <div className="menu_mobile-contacts-info" key={index}>
                <span className="menu_mobile-contacts_title">{item.title}</span>
                <span>{item.name}</span>
                <span>{item.location}</span>
                <span>{item.number}</span>
                <span className='menu_mobile-contacts_mail'>{item.mail}</span>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
