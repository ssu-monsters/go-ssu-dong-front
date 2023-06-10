import Logo from '@/assets/images/loginbox-logo.svg';
import { useState } from 'react';

import styles from './ResultCheckBox.style';
import { useRouter } from 'next/router';

const ResultCheckBox = () => {
  return (
    <>
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" name="type" value="합격" onChange={() => {}} />
          합격
        </label>
        <label>
          <input type="checkbox" name="type" value="합격" onChange={() => {}} />
          탈락
        </label>
      </div>
    </>
  );
};

export default ResultCheckBox;
