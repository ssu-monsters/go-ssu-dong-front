import React from 'react';
import Slider from 'react-slick';
import styles from './PromotionSlider.style';
import { promotionSliderDummyData } from '@/dummyData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const REACT_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 1500,
};

const PromotionSlider = () => {
  return (
    <>
      <div className="container">
        <Slider {...REACT_SLIDER_SETTINGS}>
          {promotionSliderDummyData.map((item, idx) => {
            return (
              <div className={`main ${item.club}`} key={idx}>
                <div className="text">
                  <div className="content">{item.content}</div>
                  <div className="title">{item.title}</div>
                  <div className="date"> {item.date}</div>
                </div>
                <div className="thumnail">
                  <img
                    width={400}
                    style={{ borderRadius: '10px' }}
                    src={item.img}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default PromotionSlider;
