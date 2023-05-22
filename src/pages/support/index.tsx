import React from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';

const Support = () => {
  const PAGENAME = 'support';
  const USERINFO = ['배현서', 'qogustj@naver.com', '학생', 24];

  return (
    <>
      <SemiNavbar content={PAGENAME} />
      <div>
        <UserInfo info={USERINFO} />
      </div>
      <style jsx>{`
        div {
          font-family: 'NanumSquareNeo';
          max-width: 1280px;
          margin: auto;
          height: 1000px;
          margin-top: 130px;
        }
      `}</style>
    </>
  );
};

export default Support;
