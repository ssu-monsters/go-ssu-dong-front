import React from 'react';
import Image from 'next/image';

import Menu1Image from '@/assets/images/Megaphone.svg';
import Menu2Image from '@/assets/images/Folder.svg';
import Menu3Image from '@/assets/images/Chat.svg';

import styles from './RecruitTemplate.style';

const RecruitTemplate = () => {
  return (
    <>
      <div className="title">
        <p>조직 리쿠르팅 이력이 없습니다.</p>
        <p>저희와 함께 리쿠르팅을 시작해볼까요?</p>
      </div>
      <div className="menus-wrap">
        <div className="menu-wrap">
          <div className="image-container">
            <Image src={Menu1Image} alt="only-promotion" />
          </div>
          <div className="intro-test">
            저는 <span className="highlight">홍보글</span>만 <br /> 등록하고
            싶어요!
          </div>
        </div>
        <div className="menu-wrap">
          <div className="image-container">
            <Image src={Menu2Image} alt="resume-test" />
          </div>
          <div className="intro-test">
            조직 리쿠르팅을 <br />
            <span className="highlight">서류 평가</span>로 진행할게요!
          </div>
        </div>
        <div className="menu-wrap menu3">
          <div className="image-container">
            <Image src={Menu3Image} alt="resume-interview-test" />
          </div>
          <div className="intro-test">
            조직 리쿠르팅을 <br />
            <span className="highlight">서류+면접 평가</span>로 진행할게요!
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default RecruitTemplate;
