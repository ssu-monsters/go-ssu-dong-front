import React from 'react';
import RegisterBox from '@/components/RegisterBox';

const register = () => {
  return (
    <div>
      <RegisterBox />
      <style jsx>{`
        div {
          max-width: 1280px;
          margin: auto;
          margin-top: 66px;
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default register;
