import React from 'react';
import Table from '../Table';

import styles from './ApplicantList.style';

interface MyComponentProps {
  content: any[];
}

const current = ['번호', '이름', '지원서', '지원 날짜'];

const ApplicantList = ({ content }: MyComponentProps) => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <div className="user-name">SSC </div> 의 지원자 관리
        </div>
        <Table
          fieldNameList={current}
          fieldWidthList={['70px', '120px', '680px', '130px']}
          content={content}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default ApplicantList;
