import React from 'react';
import styles from './StepContainer.style';

interface MyComponentProps {
  form: any;
  stepActive: any;
}

const StepContainer = ({ form, stepActive }: MyComponentProps) => {
  //form.step 번호와 같은 것을 active하게 바꿔주고, 버튼을 누름과 동시에 active를 해제하고, 완료된 container로 교체
  // 그리고 누름과 동시, stepActive +1 해주어 그 다음 step을 active하게 바꾼다.

  return (
    <>
      <div
        className={`container ${stepActive === form?.step ? 'active' : ''}  ${
          form?.step < stepActive ? 'complete' : ''
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
            {form?.step < stepActive ? (
              <div>완료!</div>
            ) : (
              <button>
                {form?.btn} 생성하기
                <img
                  src={
                    stepActive === form?.step
                      ? 'ActiveBtn.svg'
                      : 'InActiveBtn.svg'
                  }
                />
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
