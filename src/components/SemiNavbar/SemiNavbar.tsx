import React, { useEffect, useState } from 'react';
import styles from './SemiNavbar.style';
import { useRouter } from 'next/router';
interface MyComponentProps {
  content: string;
}
interface NavItems {
  support: string[];
  recruit: string[];
}

const SemiNavbar = ({ content }: MyComponentProps) => {
  const navItems: NavItems = {
    support: ['나의 프로필', '지원 현황', '지원서 관리'],
    recruit: ['조직 정보', '리크루팅 관리', '멤버 관리'],
  };

  const [active, setActive] = useState(0);
  const router = useRouter();

  const ActiveItem = (idx: number) => {
    if (idx === 0) {
      setActive(0);
      router.push(`/${content}`);
    } else if (idx === 1) {
      setActive(1);
      router.push(`/${content}/${idx}`);
    } else {
      setActive(2);
      router.push(`/${content}/${idx}`);
    }
  };

  useEffect(() => {
    const pageId = router.query.id;
    if (pageId === '1') {
      setActive(1);
    } else if (pageId === '2') {
      setActive(2);
    }
  }, [active, router.query.id]);

  return (
    <>
      <div className="container">
        <div className="content">
          {navItems[content as keyof NavItems].map((item, idx) => {
            //{{content ==="support" ? SEMINAVSUPPORT:SEMINAVRECRUIT }.map((item)=> ... )} 이런식으로 하고 싶었는데 안되더라고ㅇㅅ
            return (
              <div
                key={item}
                className={
                  active === idx ? 'content-item-active' : 'content-item'
                }
                onClick={() => ActiveItem(idx)}
              >
                {item}
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
