import Slider from 'react-slick';
import RecruitPost from '@/components/RecruitPost';

import styles from './MainSection.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { RecruitPostDummyData } from '@/dummyData';
import { RecruitPostType } from '@/constants/types/recruit';
import { useRouter } from 'next/router';
import { allpromotionAsync } from '@/api/promotion';
import { useEffect, useState } from 'react';

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
  const router = useRouter();
  const [allpromotionData, setAllpromotionData] = useState<any>([]);

  const allprmotion = async () => {
    // const res = await getAsync('/user/get?account=20192995');
    const res = await allpromotionAsync();
    setAllpromotionData(res.result.splice(2));
    console.log(res.result.splice(2));
    // setUser(res);

    //router.push('/register');
  };

  useEffect(() => {
    allprmotion();
  }, []);

  return (
    <>
      <div className="section third-section">
        <div className="third-section-title">
          다양한 리쿠르팅을 탐색해보세요
        </div>
        <Slider {...REACT_SLIDER_SETTINGS}>
          {allpromotionData.map((post: any, index: number) => (
            <RecruitPost
              key={index}
              title={post.title}
              introduce={post.description}
              thumbnailImg={post.thumbnailImage}
            />
          ))}
        </Slider>
        <button
          className="search-more-button"
          onClick={() => router.push('/promotion')}
        >
          더 많은 리쿠르팅 글 보기
        </button>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Third;
