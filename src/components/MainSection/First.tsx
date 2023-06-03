import LoginBox from '@/components/LoginBox';
import Image from 'next/image';

import styles from './MainSection.style';

import Circle1 from '@/assets/images/main-section-circle1.png';
import Circle2 from '@/assets/images/main-section-circle2.png';
import Circle3 from '@/assets/images/main-section-circle3.png';
import Circle4 from '@/assets/images/main-section-circle4.png';

const CIRCLES = [Circle1, Circle2, Circle3, Circle4];

const First = () => {
  return (
    <>
      <div className="section">
        <div className="first-section-content">
          <div className="title">
            <div>리쿠르팅 프로세스를 관리하는 매니저,</div>
            <div className="bold">매니저브</div>
          </div>
          <LoginBox />
        </div>
        {CIRCLES.map((circleSrc, idx) => (
          <div className={`circle circle${idx + 1}`} key={idx}>
            <Image src={circleSrc} alt={`circle${idx + 1}`} />
          </div>
        ))}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default First;
