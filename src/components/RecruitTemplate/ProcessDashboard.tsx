import { useRouter } from 'next/router';
import StepContainer from '../StepContainer';

import styles from './ProcessDashboard.style';
import { ProcessStepType } from '@/constants/types/recruit';

interface ProcessDashboardProps {
  stepInfo: Array<ProcessStepType>;
  activeStep: number;
  onClickProcessStep: (step: number, path: string) => void;
}

const ProcessDashboard = ({
  stepInfo,
  activeStep,
  onClickProcessStep,
}: ProcessDashboardProps) => {
  const onClickStepButton = (step: number, path: string) => {
    if (step < activeStep) {
      alert('이미 완료된 단계입니다.');
    } else if (step > activeStep) {
      alert('현재 리쿠르팅 단계부터 진행해주세요');
    } else {
      onClickProcessStep(step, path);
    }
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <span className="group-name">GAME</span> 의 리쿠르팅
        </div>
        <div>
          {stepInfo.map((item, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => onClickStepButton(item.step, item.path)}
              >
                <StepContainer form={item} activeStep={activeStep} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default ProcessDashboard;
