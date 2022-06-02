import React from 'react';
import './opportunities.css';
import opportunities from '../../assets/images/opportunities.png';
import Footer from '../Footer/Footer';

const Opportunities = () => {
  return (
    <>
      <div className="opportunities">
        <div className="container">
          <div className="opportunities_info">
            <div className="opportunities_left">
              <span className="opportunities_subtitle">CAREER OPPORTUNITIES</span>
              <span className="opportunities_title">Open to new people</span>
              <span className="opportunities_inner-info">
                We’re always looking for hardworking, focused, determined individuals who want to
                add value to our team.
                <br /> If you feel you’re in a position to contribute meaningfully to our company,
                the communities we work with and the clients we serve, then we encourage you to
                reach out!
              </span>
              <button className="insights_info-right_list-btn newsletter-btn"> Contact us</button>
            </div>
            <div className="opportunities_right">
              <img src={opportunities} alt="opportunities" />
            </div>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="container service_info">
          <div className="service_title">Interested in our service?</div>
          <div className="service_subtitle">
            Take the next step of your South Florida and Miami <br /> commercial real estate journey
            with us
          </div>
          <button className="service_btn">Let’s talk</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Opportunities;
