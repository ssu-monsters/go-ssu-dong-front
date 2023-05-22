import { useRouter } from 'next/router';
import React from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import SupportList from '@/components/SupportList';

const current = [
  {
    name: '영어회화 동아리',
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
    type: '동아리',
    result: '지원완료',
  },
  {
    name: '영어회화 동아리',
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
    type: '동아리',
    result: '합격',
  },
  {
    name: '영어회화 동아리',
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
    type: '동아리',
    result: '지원완료',
  },
  {
    name: '영어회화 동아리',
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
    type: '동아리',
    result: '지원완료',
  },
];

const after = [
  {
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
  },
  {
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
  },
  {
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
  },
  {
    paper: '숭실대 소프트웨어학부 배현서 지원서',
    date: '2023.04.11',
  },
];

const Detail = ({ id }: any) => {
  const router = useRouter();
  const pageId = router.query.id;
  const PAGENAME = 'support';

  if (pageId === '1') {
    return (
      <>
        <SemiNavbar content={PAGENAME} />
        <div>
          <SupportList content={current} />
        </div>
        <style jsx>{`
          div {
            font-family: 'NanumSquareNeo';
            max-width: 1280px;
            margin: auto;
            height: 1000px;
            margin-top: 110px;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <SemiNavbar content={PAGENAME} />
        <div>
          <div>zzzzzz</div>
        </div>
        ;
        <style jsx>{`
          div {
            font-family: 'NanumSquareNeo';
            background-color: red;
            max-width: 1280px;
            margin: auto;
            height: 1000px;
            margin-top: 110px;
          }
        `}</style>
      </>
    );
  }
};

export default Detail;
