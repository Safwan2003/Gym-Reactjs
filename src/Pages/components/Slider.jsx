import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '30rem',
  color: '#fff',
  lineHeight: '20rem',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <Carousel autoplay className='pt-10  mb-44'>
    <div >
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Slider;