import RecruitTemplate from '@/components/RecruitTemplate';
import React, { useState } from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import StepContainer from '@/components/StepContainer';
import { useRouter } from 'next/router';

const PAGENAME = 'recruit';

const DOCUMENTONLY = [
  {
    step: 1,
    title: '지원폼 생성하기',
    content: '인재를 발굴하기 위해 지원자들에게 다양한 질문들을 물어보세요? 👋',
    btn: '지원폼',
  },
  {
    step: 2,
    title: '홍보글 작성하기',
    content: '매니저브 플랫폼에 홍보글을 올려보세요 ',
    btn: '홍보글',
  },
  {
    step: 3,
    title: '지원자 관리하기',
    content: '지원자를 한 번에 관리해보세요 ',
    btn: '관리폼',
  },
  {
    step: 4,
    title: '최종 합격자 선별하기',
    content: '최종 합격자들을 선별해보세요',
    btn: '합격폼',
  },
];

const INTERVIEWONLY = [
  {
    step: 1,
    title: '지원폼 생성하기',
    content: '인재를 발굴하기 위해 지원자들에게 다양한 질문들을 물어보세요? 👋',
    btn: '지원폼',
  },
  {
    step: 2,
    title: '홍보글 작성하기',
    content: '매니저브 플랫폼에 홍보글을 올려보세요 ',
    btn: '홍보글',
  },
  {
    step: 3,
    title: '지원자 관리하기',
    content: '지원자를 한 번에 관리해보세요 ',
    btn: '관리폼',
  },
  {
    step: 4,
    title: '1차 합격자 선별하기',
    content: '1차 합격자들을 선별해보세요 ',
    btn: '합격폼',
  },
  {
    step: 5,
    title: '면접 시작하기',
    content: '면접을 위한 툴을 이용해보세요 ',
    btn: '면접툴',
  },
  {
    step: 6,
    title: '최종 합격자 선별하기',
    content: '최종 합격자들을 선별해보세요',
    btn: '합격폼',
  },
];

const Recruit = () => {
  const router = useRouter();
  const [pageTransform, setPageTransform] = useState<string>('default');
  const [stepActive, setStepActive] = useState(1);
  // 이부분은 나중에 바뀔수 있는 값이기 때문에 localstorage에 저장해야될거가타요 프로세스 하나 정하면 그 다음에 들어가면 그대로 떠야하니까요

  const CreateForm = (doing: string) => {
    // 생성하기 버튼 눌렀을때, 이벤트 발생로직
    switch (doing) {
      case '지원폼':
        window.open('https://www.google.com/intl/ko_kr/forms/about/');
        break;
      case '홍보글':
        router.push('/recruit/promotion'); // 이거 여기서 들어가는거랑 그냥 홍보글만 생성 구분해서 작성완료 눌렀을때, 여기서는 다시 돌아와야하고, 홍보글만 생성은 어떻게 해야하지?
        break;
      case '관리폼':
        router.push('/recruit/2');
        break;
      case '합격폼':
        router.push('/recruit/2');
        break;
    }
    setStepActive(stepActive + 1);
  };

  return (
    <div>
      <SemiNavbar content={PAGENAME} />
      {pageTransform === 'default' ? (
        <RecruitTemplate setPageTransform={setPageTransform} />
      ) : pageTransform === 'document' ? (
        // 서류평가 지원
        <div className="container">
          <div className="group-name">SSC 의 리쿠르팅</div>
          <div>
            {DOCUMENTONLY.map((item, idx) => {
              return (
                <div onClick={() => CreateForm(item?.btn)}>
                  <StepContainer
                    form={item}
                    key={idx}
                    stepActive={stepActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // 서류평가 + 면접
        <div className="container">
          <div className="group-name">SSC 의 리쿠르팅</div>
          <div>
            {INTERVIEWONLY.map((item, idx) => {
              return (
                <div onClick={() => CreateForm(item?.btn)}>
                  <StepContainer
                    form={item}
                    key={idx}
                    stepActive={stepActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          font-family: 'NanumSquareNeo';
          max-width: 1280px;
          margin: auto;
          height: 1000px;
          margin-top: 66px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .group-name {
          width: 980px;
          font-weight: 700;
          font-size: 25px;
          line-height: 40px;
          color: #101010;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default Recruit;
