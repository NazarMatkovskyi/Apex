import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import logoMobile from '../../assets/images/logoSmall.png';
import Contact from '../ContactForm/Contact';
import useResize from '../../Constant/useResize';
import hamburger from '../../assets/images/iconHamburger.svg';
import newHamburger from '../../assets/images/newHamburger.svg';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Header from '../Header/Header';

const menu = ['Home', 'Properties ', 'Company', 'Latest'];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);

  const { innerWidth } = useResize();

  const hamburgerMenu = () => setActive(!active);
  const activeModal = () => setModalWindow(!modalWindow);
  return (
    <>
      <div className="navbar">
        <div className="navbar_menu ">
          {innerWidth && innerWidth >= 850 ? (
            <img src={logo} alt={'logo'} />
          ) : (
            <img src={logoMobile} alt={'logo'} />
          )}
          <div className="navbar_menu-list">
            {menu.map((item, index) => (
              <div key={index}>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="navbar_menu_contact" onClick={() => activeModal()}>
            <span>CONTACT US</span>
          </div>
        </div>
        <div onClick={hamburgerMenu} className="navbar_menu-hamburger">
          {innerWidth && innerWidth >= 722 ? (
            <img src={hamburger} alt="hamburger" />
          ) : (
            <img src={newHamburger} alt={'newHamburger'} />
          )}
        </div>
        <div className={`navbar_modal-menu ${active ? 'active' : ''}`}>
          <div className="navbar_modal-navigation">
            <BurgerMenu />
          </div>
        </div>
        {modalWindow && <Contact active={modalWindow} setActive={setModalWindow} />}
      </div>
      <Header />
    </>
  );
};

export default Navbar;
