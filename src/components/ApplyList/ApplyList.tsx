import React, { useEffect } from 'react';
import styles from './ApplyList.style';
import { useState } from 'react';
import Table from '../Table';

interface MyComponentProps {
  content: any[];
}

const current = [
  '번호',
  '조직 이름',
  '지원서',
  '지원 날짜',
  '조직 유형',
  '지원 현황',
];

const ApplyList = ({ content }: MyComponentProps) => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <div className="user-name">배현서 </div> 님의 지원현황
        </div>
        <Table
          fieldNameList={current}
          fieldWidthList={['70px', '240px', '317px', '140px', '115px', '118px']}
          content={content}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default ApplyList;
