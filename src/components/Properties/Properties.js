import React from 'react';
import './properties.css';
import maps from '../../assets/images/maps.png';
import vector from '../../assets/images/vector.svg';
import arrowBtn from '../../assets/images/arrowBtn.svg';
import Capabilities from '../Capabilities/Capabilities';

const propertiesInput = [
  {
    name: 'Property',
  },
  {
    name: 'Size',
  },
  {
    name: 'Keyword',
  },
  {
    name: 'Location',
  },
];

const Properties = () => {
  return (
    <>
      <div className="properties-block container">
        <div className="properties_block-title">
          <span>Properties</span>
          <span className="properties_block-subtitle">
            Check out our affordable deals. Whatever your needs, from home <br /> to office, we'll
            find the best and at the best prices
          </span>
        </div>
        <div className="properties_map-info">
          <img src={maps} alt="maps" className='properties_map-info-map'/>
          <div className={'form-properties'}>
            {propertiesInput.map((item, index) => (
              <div className={'form-properties_inputs'} key={index}>
                <div className={'form-properties_inputs-inner'}>
                  <input value={item.name} className="form-properties_input-info" />
                  <img src={vector} alt={'vector'} className={'vector'} />
                </div>
              </div>
            ))}

            <div className="properties_btn">
              <button className="properties_inner_btn properties_inner_btn_first">
                Search <img src={arrowBtn} alt="line" />
              </button>
              <button className="properties_inner_btn">View more</button>
            </div>
          </div>
        </div>
      </div>
      <Capabilities />
    </>
  );
};

export default Properties;
