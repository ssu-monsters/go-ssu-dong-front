import Image from 'next/image';

import ApplyImageSrc from '@/assets/images/main-apply-image.svg';
import RecruitImageSrc from '@/assets/images/main-recruit-image.svg';

import styles from './MainSection.style';

const SECTION_INFO = {
  apply: {
    img: ApplyImageSrc,
    title: '다양한 조직의 멤버가 되어보세요!',
    subTitle: '여러 리쿠르팅 홍보글들을 탐색하고, 빠르게 지원할 수 있어요',
  },
  recruit: {
    img: RecruitImageSrc,
    title: '조직의 인재를 효율적으로 모집해보아요!',
    subTitle: ' 리쿠르팅 프로세스를 통합적으로 관리할 수 있어요',
  },
};

const Second = () => {
  return (
    <>
      <div className="section second-section">
        <div className="intro-wrap">
          <Image src={SECTION_INFO.apply.img} alt="apply-img" />
          <div className="apply-intro-text">
            <div className="title">{SECTION_INFO.apply.title}</div>
            <div className="sub-title">{SECTION_INFO.apply.subTitle}</div>
          </div>
        </div>
        <div className="intro-wrap recruit">
          <div className="recruit-intro-text">
            <div className="title">{SECTION_INFO.recruit.title}</div>
            <div className="sub-title">{SECTION_INFO.recruit.subTitle}</div>
          </div>
          <Image src={SECTION_INFO.recruit.img} alt="recruit-img" />
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Second;
