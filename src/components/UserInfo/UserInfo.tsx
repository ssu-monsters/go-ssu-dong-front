import React from 'react';
import styles from './UserInfo.style';
interface MyComponentProps {
  info: any[];
}

const UserInfo = ({ info }: MyComponentProps) => {
  return (
    <div>
      <div className="container">
        <div className="user-image"></div>
        <div className="user-info">
          <div className="name">{info[0]}</div>
          <div className="user-semi-info">
            <div className="semi">
              <div className="email">이메일</div>
              <div className="text">{info[1]}</div>
            </div>
            <div className="semi">
              <div className="indentity">신분</div>
              <div className="text">{info[2]}</div>
            </div>
            <div className="semi">
              <div className="age">나이</div>
              <div className="text">{info[3]}세</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

export default UserInfo;
