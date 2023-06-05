import { useRouter } from 'next/router';

import ApplyList from '@/components/ApplyList';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';

import { ApplySubMenuType } from '@/constants/navigation';
import { ApplyDummyData, userDummyData } from '@/dummyData';

const Apply = () => {
  const router = useRouter();
  const menu = router.query.menu as ApplySubMenuType;

  function renderApplyMenu() {
    if (menu === 'profile') {
      return <UserInfo info={userDummyData} />;
    } else if (menu === 'status') {
      return <ApplyList content={ApplyDummyData} />;
    } else if (menu === 'documents') {
      return <>documents</>;
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
