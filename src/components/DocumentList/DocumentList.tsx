import React from 'react';
import Table from '../Table';

import styles from './DocumentList.style';

interface MyComponentProps {
  content: any[];
}

const current = ['번호', '지원서', '지원 날짜'];

const DocumentList = ({ content }: MyComponentProps) => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <div className="user-name">배현서 </div> 님의 지원서 관리
        </div>
        <Table
          fieldNameList={current}
          fieldWidthList={['90px', '780px', '130px']}
          content={content}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default DocumentList;
