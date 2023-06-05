import { useRouter } from 'next/router';
import React from 'react';

import Menu1Image from '@/assets/images/Megaphone.svg';
import Menu2Image from '@/assets/images/Folder.svg';
import Menu3Image from '@/assets/images/Chat.svg';

import styles from './RecruitProcessMenu.style';
import { PageTransformType } from '@/constants/types/recruit';

interface RecruitProcessMenuProps {
  onClickProcessMenu: (menu: PageTransformType) => void;
}

export const RecruitProcessMenu = ({
  onClickProcessMenu,
}: RecruitProcessMenuProps) => {
  const router = useRouter();

  return (
    <>
      <div className="title">
        <p>진행중인 리쿠르팅 프로세스가 없습니다.</p>
        <p>저희와 함께 리쿠르팅을 시작해볼까요?</p>
      </div>
      <div className="menus-wrap">
        <div
          className="menu-wrap"
          onClick={() => onClickProcessMenu('promotion')}
        >
          <div className="image-container">
            <Menu1Image />
          </div>
          <div className="intro-test">
            저는 <span className="highlight">홍보글</span>만 <br /> 등록하고
            싶어요!
          </div>
        </div>
        <div
          className="menu-wrap"
          onClick={() => onClickProcessMenu('document')}
        >
          <div className="image-container">
            <Menu2Image />
          </div>
          <div className="intro-test">
            조직 리쿠르팅을 <br />
            <span className="highlight">서류 평가</span>로 진행할게요!
          </div>
        </div>
        <div
          className="menu-wrap menu3"
          onClick={() => onClickProcessMenu('interview')}
        >
          <div className="image-container">
            <Menu3Image />
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

export default RecruitProcessMenu;
