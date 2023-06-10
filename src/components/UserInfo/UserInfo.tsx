import React from 'react';
import styles from './UserInfo.style';
interface MyComponentProps {
  info: any[];
}

const UserInfo = ({ info }: MyComponentProps) => {
  return (
    <>
      <div className="container">
        <div className="user-image"></div>
        <div className="user-info">
          <div className="name">{info[1]}</div>
          <div className="user-semi-info">
            <div className="semi">
              <div className="email ">
                {info[0] === 'user' ? '이메일' : '유형'}
              </div>
              <div className="text">{info[2]}</div>
            </div>
            <div className="semi">
              <div className="indentity ">
                {info[0] === 'user' ? '신분' : '대표명'}
              </div>
              <div className="text">{info[3]}</div>
            </div>
            {info[0] === 'organization' && (
              <div className="semi">
                <div className="email ">이메일</div>
                <div className="text">{info[4]}</div>
              </div>
            )}
            <div className="semi">
              <div className="age ">{info[0] === 'user' ? '나이' : '소속'}</div>
              <div className="text">
                {info[0] === 'user' ? `${info[4]}세` : `${info[5]} `}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default UserInfo;
