import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RecruitProcessMenu from '../RecruitProcessMenu';
import ProcessDashboard from './ProcessDashboard';

import { DOCUMENTONLY, INTERVIEWONLY } from '@/constants/recruit';
import { PageTransformType } from '@/constants/types/recruit';

import styles from './RecruitTemplate.style';

const RecruitTemplate = () => {
  const router = useRouter();

  // 현재 어떤 리쿠르트 프로세스를 진행하고 있는지
  const [pageTransform, setPageTransform] = useState<PageTransformType | null>(
    null,
  );
  // 현재 리쿠르트 프로세스 내 어떤 step을 진행하고 있는지
  const [activeStep, setActiveStep] = useState<number>(1);

  // 리쿠르트 프로세스 메뉴 선택
  const onClickProcessMenu = (menu: PageTransformType) => {
    if (menu === 'promotion') {
      router.push('/promotion/new');
      return;
    }
    setPageTransform(menu);
    localStorage.setItem('pageTransform', menu);
  };

  // 리쿠르트 프로세스 step 선택
  const onClickProcessStep = (step: number, path: string) => {
    router.push(path).then(() => {
      // 프로세스 모두 완료했다면 종료
      if (step === 4 && pageTransform === 'document') {
        finishProcess();
        return;
      } else if (step === 6 && pageTransform === 'interview') {
        finishProcess();
        return;
      }
      setActiveStep(step + 1);
      localStorage.setItem('activeStep', `${step + 1}`);
    });
  };

  // 모든 프로세스를 종료하고 관련 정보 reset
  const finishProcess = () => {
    setActiveStep(1);
    setPageTransform(null);

    localStorage.removeItem('activeStep');
    localStorage.removeItem('pageTransform');
  };

  useEffect(() => {
    const pageTransformStoraged = localStorage.getItem('pageTransform');
    if (pageTransformStoraged) {
      setPageTransform(pageTransformStoraged as PageTransformType);
    }

    const activeStepStoraged = localStorage.getItem('activeStep');
    if (activeStepStoraged) {
      setActiveStep(Number(activeStepStoraged));
    }
  }, []);

  // 각 step에 대한 정보
  const stepInfo = pageTransform === 'interview' ? INTERVIEWONLY : DOCUMENTONLY;

  return (
    <>
      <div>
        {pageTransform ? (
          <ProcessDashboard
            stepInfo={stepInfo}
            activeStep={activeStep}
            onClickProcessStep={onClickProcessStep}
          />
        ) : (
          <RecruitProcessMenu onClickProcessMenu={onClickProcessMenu} />
        )}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default RecruitTemplate;
