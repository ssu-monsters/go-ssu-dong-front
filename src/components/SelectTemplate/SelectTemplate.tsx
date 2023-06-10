import React from 'react';
import Table from '../Table';

import styles from './SelectTemplate.style';
import { useRouter } from 'next/router';

interface MyComponentProps {
  selectType: 'first' | 'final';
  content: any[];
}

const current = ['번호', '이름', '지원서', '결과 선택'];

const SelectTemplate = ({ selectType, content }: MyComponentProps) => {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <div className="title">
          <div className="user-name">SSC</div>의{' '}
          {selectType === 'first' ? '1차' : '최종'} 합격자 선택
        </div>

        <Table
          fieldNameList={current}
          fieldWidthList={['70px', '120px', '650px', '160px']}
          content={content}
        />
        <div className="btn">
          <button className="okay" onClick={() => router.back()}>
            작성 완료
          </button>
          <button className="no" onClick={() => router.back()}>
            작성 취소
          </button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default SelectTemplate;
