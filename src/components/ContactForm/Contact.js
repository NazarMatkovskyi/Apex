import React from 'react';
import './contact.css';
import close from './assets/ic_close.svg';
import vectorDown from '../../assets/images/vector.svg';
import arrowExplore from '../../assets/arrow-explore.svg';

const formLast = [
  {
    name: 'Full Name',
  },
  {
    name: 'Company',
  },
  {
    name: 'Email',
    type: 'email',
    placeholder: '',
  },
  {
    name: 'Phone',
    type: 'number',
    placeholder: '+44 (000) 000 00 00',
  },
];

function Contact(props) {
  return (
    <div
      style={{ background: props.active ? 'rgba(0, 0, 0, 0.2)' : 'transparent' }}
      className={props.active ? 'contactForm active' : 'contactForm'}>
      <div className="form">
        <img
          src={close}
          alt="close"
          className="close-button"
          onClick={() => props.setActive(false)}
        />
        <div className="right-block">
          <div className="top-block">
            <span className="title">We’re here for you</span>
            <p className="desc">
              Send us a message through our form and someone from our team will get in touch with
              you shortly.
            </p>
          </div>
          <div className={'block-bottom'}>
            <span className={'title'}>Our contacts</span>
            <span>APEX Capital Realty</span>
            <span>901 NE 79 ST Miami, FL 33138</span>
            <span>(305) 570-2600</span>
            <a href={'info@apexcapitalrealty.com'}>info@apexcapitalrealty.com</a>
            <span className={'press-text'}>Press inquiries contact:</span>
            <a href={'info@apexcapitalrealty.com'}>info@apexcapitalrealty.com</a>
          </div>
        </div>
        <div className={'left-block'}>
          <div className={'first-inputs'}>
            {formLast.map((item, index) => (
              <div className={'input-contact'}>
                <span>{item.name}</span>
                <input placeholder={item.placeholder} type={item.type} />
              </div>
            ))}
          </div>
          <div className={'full-name-message'}>
            <div className={'input-type'}>
              <span>Full name</span>
              <input value={'Property'} />
              <img src={vectorDown} alt={'vector-down'} className={'vector-down'} />
            </div>
            <div className={'input-type'}>
              <span>Message</span>
              <textarea className="form_message" />
            </div>
            <div className={'contact-footer-submit'}>
              <div className={'submit'}>
                <span>Submit</span>
                <img src={arrowExplore} alt={'arrow'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
