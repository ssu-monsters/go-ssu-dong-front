import React, { useEffect } from 'react';
import styles from './SupportList.style';
import { useState } from 'react';

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

const SupportList = ({ content }: MyComponentProps) => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <div className="user-name">배현서 </div> 님의 지원현황
        </div>
        <div className="list">
          <div className="category">
            {current.map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
          </div>
          <div className="list-item">
            {content.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="list-in">
                    <div>{idx + 1}</div>
                    <div>{item.name}</div>
                    <div>{item.paper}</div>

                    <div>{item.date}</div>
                    <div>{item.type}</div>

                    <div>{item.result}</div>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SupportList;
