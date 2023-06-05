import React, { useEffect, useState } from 'react';
import styles from './SemiNavbar.style';
import { useRouter } from 'next/router';
import { applySubMenu, recruitSubMenu } from '@/constants/navigation';
interface MyComponentProps {
  content: 'apply' | 'recruit';
}

const SemiNavbar = ({ content }: MyComponentProps) => {
  const router = useRouter();
  const navItems = {
    apply: applySubMenu,
    recruit: recruitSubMenu,
  };

  const [active, setActive] = useState(0);
  const ActiveItem = (idx: number) => {
    setActive(idx);
    router.push(`/${content}/${navItems[content][idx].url}`);
  };

  return (
    <>
      <div className="container">
        <div className="content">
          {navItems[content].map((item, idx) => {
            //{{content ==="apply" ? SEMINAVSUPPORT:SEMINAVRECRUIT }.map((item)=> ... )} 이런식으로 하고 싶었는데 안되더라고ㅇㅅ
            return (
              <div
                key={item.url}
                className={
                  active === idx ? 'content-item-active' : 'content-item'
                }
                onClick={() => ActiveItem(idx)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default SemiNavbar;
