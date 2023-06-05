import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import RecruitProcessMenu from '../RecruitProcessMenu';
import StepContainer from '../StepContainer';

import { DOCUMENTONLY, INTERVIEWONLY } from '@/constants/recruit';
import { PageTransformType } from '@/constants/types/recruit';

import styles from './RecruitTemplate.style';

const RecruitTemplate = () => {
  const router = useRouter();
  const [pageTransform, setPageTransform] = useState<PageTransformType | null>(
    null,
  );

  const onClickProcessMenu = (menu: PageTransformType) => {
    if (menu === 'promotion') {
      router.push('/promotion/new');
    }
    setPageTransform(menu);
    localStorage.setItem('pageTransform', menu);
  };

  useEffect(() => {
    const pageTransformStoraged = localStorage.getItem('pageTransform');
    if (pageTransformStoraged) {
      setPageTransform(pageTransformStoraged as PageTransformType);
    }
  }, []);

  const [stepActive, setStepActive] = useState(1);

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

  function renderRecruitTemplate() {
    if (pageTransform === 'document') {
      return (
        // 서류평가 지원
        <div className="container">
          <div className="title">
            <span className="group-name">SSC</span> 의 리쿠르팅
          </div>
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
      );
    } else if (pageTransform === 'interview') {
      return (
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
      );
    } else {
      return <RecruitProcessMenu onClickProcessMenu={onClickProcessMenu} />;
    }
  }

  return (
    <>
      <div>{renderRecruitTemplate()}</div>
      <style jsx>{styles}</style>
    </>
  );
};

export default RecruitTemplate;
