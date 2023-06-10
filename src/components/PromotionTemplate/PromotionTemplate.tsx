import { OrganizationType } from '@/constants/types/recruit';
import styles from './PromotionTemplate.style';
import CategoryTag from '../CategoryTag';
import { RecruitPostDummyData } from '@/dummyData';
import RecruitPost from '../RecruitPost';
import PromotionSlider from '../PromotionSlider';
import { useEffect, useState } from 'react';
import { allpromotionAsync } from '@/api/promotion';

const ORG_LIST: Array<OrganizationType> = [
  '동아리',
  '대외활동',
  '스타트업',
  '소모임',
  '기타',
];

interface MyComponentProps {
  title: any;
  detailData: any;
}

const PromotionTemplate = () => {
  const [allpromotionData, setAllpromotionData] = useState<any>([]);

  const allprmotion = async () => {
    const res = await allpromotionAsync();

    setAllpromotionData(res.result.splice(2));
    console.log(res.result[0].organizationId);
    //console.log(res.result.splice(2));
  };

  useEffect(() => {
    allprmotion();
  }, []);

  return (
    <>
      <div className="template-wrapper">
        <div className="carousel">
          <PromotionSlider />
        </div>
        <div className="title">전체 리쿠르팅</div>
        <div className="tags-container">
          {ORG_LIST.map((org) => (
            <CategoryTag key={org} organizationType={org} />
          ))}
        </div>
        <div className="posts-container">
          {allpromotionData.map((post: any) => (
            <RecruitPost
              key={post.title}
              title={post.title}
              introduce={post.description}
              thumbnailImg={post.thumbnailImage}
            />
          ))}
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default PromotionTemplate;
