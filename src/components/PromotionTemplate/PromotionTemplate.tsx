import { OrganizationType } from '@/constants/types/recruit';
import styles from './PromotionTemplate.style';
import CategoryTag from '../CategoryTag';
import { RecruitPostDummyData } from '@/dummyData';
import RecruitPost from '../RecruitPost';

const ORG_LIST: Array<OrganizationType> = [
  '동아리',
  '대외활동',
  '스타트업',
  '소모임',
  '기타',
];

const PromotionTemplate = () => (
  <>
    <div className="template-wrapper">
      <div className="carousel"></div>
      <div className="title">전체 리쿠르팅</div>
      <div className="tags-container">
        {ORG_LIST.map((org) => (
          <CategoryTag key={org} organizationType={org} />
        ))}
      </div>
      <div className="posts-container">
        {RecruitPostDummyData.map((post) => (
          <RecruitPost
            key={post.title}
            title={post.title}
            introduce={post.introduce}
            thumbnailImg={post.thumbnailImg}
          />
        ))}
      </div>
    </div>

    <style jsx>{styles}</style>
  </>
);

export default PromotionTemplate;
