import React from 'react';
import styles from './UserInfo.style';
interface MyComponentProps {
  info: any;
  info1: any;
}

const UserInfo = ({ info, info1 }: MyComponentProps) => {
  return (
    <>
      <div className="container">
        <div className="user-image">
          <img
            src={
              info.type === 'user'
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKid9pP8GtZN7KG27yZJCyUTBMnVaWsUr-lmHtzcnniwP3D0J8k-qO5z636i-2TGAbFeY&usqp=CAU'
                : 'https://en.pimg.jp/086/004/006/1/86004006.jpg'
            }
          />
        </div>
        <div className="user-info">
          <div className="name">{info1.name}</div>
          <div className="user-semi-info">
            <div className="semi">
              <div className="email ">
                {info.type === 'user' ? '이메일' : '유형'}
              </div>
              <div className="text">
                {info.type === 'user' ? info1.email : info.subtype}
              </div>
            </div>
            <div className="semi">
              <div className="indentity ">
                {info.type === 'user' ? '학번' : '대표명'}
              </div>
              <div className="text">
                {info.type === 'user' ? info1.account : info.represent}
              </div>
            </div>
            {info.type === 'organization' && (
              <div className="semi">
                <div className="email ">이메일</div>
                <div className="text">{info.email}</div>
              </div>
            )}
            <div className="semi">
              <div className="age ">
                {info.type === 'user' ? '나이' : '소속'}
              </div>
              <div className="text">
                {info.type === 'user' ? `25세` : `${info.school} `}
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
