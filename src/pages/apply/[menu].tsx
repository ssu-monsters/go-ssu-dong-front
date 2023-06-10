import { useRouter } from 'next/router';

import ApplyList from '@/components/ApplyList';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';

import { ApplySubMenuType } from '@/constants/navigation';
import { ApplyDocumentData, ApplyDummyData, userDummyData } from '@/dummyData';
import DocumentList from '@/components/DocumentList';
import { useEffect, useState } from 'react';

const Apply = () => {
  const router = useRouter();
  const menu = router.query.menu as ApplySubMenuType;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo') ?? ''));
  }, []);

  function renderApplyMenu() {
    if (menu === 'profile') {
      return <UserInfo info={userDummyData} info1={userInfo} />;
    } else if (menu === 'status') {
      return <ApplyList content={ApplyDummyData} />;
    } else if (menu === 'documents') {
      return <DocumentList content={ApplyDocumentData} />;
    }
  }

  return (
    <>
      <div className="apply-page-container">
        <SemiNavbar content="apply" />
        {renderApplyMenu()}
      </div>

      <style jsx>{`
        .apply-page-container {
          margin-top: 80px;
        }
      `}</style>
    </>
  );
};

export default Apply;
