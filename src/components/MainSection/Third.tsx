import Slider from 'react-slick';
import RecruitPost from '@/components/RecruitPost';

import styles from './MainSection.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { RecruitPostDummyData } from '@/dummyData';

const REACT_SLIDER_SETTINGS = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1500,
  cssEase: 'linear',
};

const Third = () => {
  return (
    <>
      <div className="section third-section">
        <div className="third-section-title">
          다양한 리쿠르팅을 탐색해보세요
        </div>
        <Slider {...REACT_SLIDER_SETTINGS}>
          {RecruitPostDummyData.map((post: RecruitPostType, index: number) => (
            <RecruitPost
              key={index}
              title={post.title}
              introduce={post.introduce}
              thumbnailImg={post.thumbnailImg}
            />
          ))}
        </Slider>
        <button className="search-more-button" onClick={() => {}}>
          더 많은 리쿠르팅 글 보기
        </button>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Third;
