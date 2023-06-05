import { useRouter } from 'next/router';
import React from 'react';
import PromotionWriting from '@/components/PromotionWrting';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';

const ORGANIZATIONINFO = [
  'organization',
  'SSC',
  '축구동아리',
  '배현서',
  'qogustj@naver.com',
  '숭실대학교',
];
const PAGENAME = 'recruit';

const Detail = ({ params }: any) => {
  const router = useRouter();
  const parameter = router.query.params;

  if (parameter == 'promotion') {
    return (
      <>
        <PromotionWriting />
      </>
    );
  } else if (parameter == '1') {
    return (
      <>
        <SemiNavbar content={PAGENAME} />
        <div>
          <UserInfo info={ORGANIZATIONINFO} />
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
  } else if (parameter == '2') {
    return (
      <>
        <SemiNavbar content={PAGENAME} />
        <div>아직 준비중입니다.!</div>
        <style jsx>{`
          div {
            font-family: 'NanumSquareNeo';
            max-width: 1280px;
            margin: auto;
            height: 1000px;
            margin-top: 130px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </>
    );
  }
};

export default Detail;
