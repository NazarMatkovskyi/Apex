import React, { useState } from 'react';
import './insights.css';
// import insightsOne from '../../assets/images/insightsOne.svg';
import insightsTwo from '../../assets/images/insightsTwo.svg';
import insightsThree from '../../assets/images/insightsThree.svg';
import insightsFour from '../../assets/images/insightsFour.svg';
import insightsFive from '../../assets/images/insightsFive.svg';
import Opportunities from '../Opportunities/Opportunities';
import PageVideo from './Page/PageVideo';
import PageNews from './Page/PageNews';
import PageBlock from './Page/PageBlog';
import PagePress from './Page/PagePress';


const listInfo = [
  {
    images: insightsTwo,
    title: 'Interdum vel aliquet viverra habitant purus tempus, sagittis',
    data: '17.02.2021',
    position: 'BLOG',
  },
  {
    images: insightsThree,
    title: 'Pellentesque sit auctor justo, non pulvinar enim est',
    data: '17.02.2021',
    position: 'BLOG',
  },
  {
    images: insightsFour,
    title: 'Euismod libero, et commodo purus dui, enim, ut',
    data: '17.02.2021',
    position: 'BLOG',
  },
  {
    images: insightsFive,
    title: 'Eu diam aliquam, et sit quis dictumst suspendisse',
    data: '17.02.2021',
    position: 'BLOG',
  },
];

const Insights = () => {
  const [active, setActive] = useState('press');

  const pages = {
    press: <PagePress />,
    blog: <PageBlock />,
    video: <PageVideo />,
    news: <PageNews />,
  };
  return (
    <>
      <div className="insights container">
        <div className="insights_title">Insights</div>
        <div className="insights_list">
          <ul className="insights_list_inner">
            <li
              className={`${
                active === 'press' ? 'insights_list_text-active ' : ''
              } insights_list_text`}
              onClick={() => {
                setActive('press');
              }}>
              Press
            </li>
            <li
              className={`${
                active === 'blog' ? 'insights_list_text-active ' : ''
              } insights_list_text`}
              onClick={() => {
                setActive('blog');
              }}>
              Blog
            </li>
            <li
              className={`${
                active === 'video' ? 'insights_list_text-active ' : ''
              } insights_list_text`}
              onClick={() => {
                setActive('video');
              }}>
              Video
            </li>
            <li
              className={`${
                active === 'news' ? 'insights_list_text-active ' : ''
              } insights_list_text`}
              onClick={() => {
                setActive('news');
              }}>
              News
            </li>
          </ul>
        </div>
        <div className="insights_info">
          {pages[active]}

          <div className="insights_info-right">
            <ul className="insights_info-right_list">
              {listInfo.map((item, index) => (
                <li key={index}>
                  <div className="insights_info-right-inner">
                    <img src={item.images} alt="insights" className="insightsImages" />
                    <div className="insights_info-right-first">
                      <span className="insights_info-right-title">{item.title}</span>
                      <div className="insights_info-left_time">
                        <span>
                          {item.data}
                          <span className="insights_info-blog">{item.position}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <button className="insights_info-right_list-btn">View More</button>
            </ul>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter_title">Subcribe to our newsletter</div>
        <div className="newsletter_subtitle">Keep up with our latest news</div>
        <form className="newsletter_form">
          <input className="newsletter_list" placeholder="Email Address" />
          <button className="insights_info-right_list-btn newsletter-btn"> Subscribe</button>
        </form>
      </div>
      <Opportunities />
    </>
  );
};

export default Insights;
