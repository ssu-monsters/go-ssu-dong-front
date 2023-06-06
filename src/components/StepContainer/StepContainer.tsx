import React from 'react';
import styles from './StepContainer.style';

import ActiveButtonIcon from '@/assets/images/activeBtn.svg';
import UnActiveButtonIcon from '@/assets/images/InActiveBtn.svg';
import { ProcessStepType } from '@/constants/types/recruit';

interface MyComponentProps {
  /** 긱 step에 필요한 정보  */
  form: ProcessStepType;
  /** 현재 활성화된 step 번호 */
  activeStep: number;
}

const StepContainer = ({ form, activeStep }: MyComponentProps) => {
  //form.step 번호와 같은 것을 active하게 바꿔주고, 버튼을 누름과 동시에 active를 해제하고, 완료된 container로 교체
  // 그리고 누름과 동시, activeStep +1 해주어 그 다음 step을 active하게 바꾼다.

  return (
    <>
      <div
        className={`container ${activeStep === form?.step ? 'active' : ''}  ${
          form?.step < activeStep ? 'complete' : ''
        }`}
      >
        <div className="inner-container">
          <div className="left-text">
            <div className="title">
              step {form?.step}. {form?.title}
            </div>
            <div className="content">{form?.content}</div>
          </div>
          <div className="right-btn">
            {form?.step < activeStep ? (
              <div>완료!</div>
            ) : (
              <button className="step-btn">
                {form?.btn} 생성하기
                {form?.step === activeStep ? (
                  <ActiveButtonIcon />
                ) : (
                  <UnActiveButtonIcon />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default StepContainer;
