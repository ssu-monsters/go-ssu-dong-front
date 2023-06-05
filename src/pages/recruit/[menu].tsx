import { useRouter } from 'next/router';
import React from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';
import RecruitTemplate from '@/components/RecruitTemplate';

import { organizationDummyData } from '@/dummyData';
import { RecruitSubMenuType } from '@/constants/navigation';

const Recruit = () => {
  const router = useRouter();
  const menu = router.query.menu as RecruitSubMenuType;

  function renderRecruitMenu() {
    if (menu === 'process') {
      return <RecruitTemplate />;
    } else if (menu === 'profile') {
      return <UserInfo info={organizationDummyData} />;
    } else if (menu === 'members') {
      return <div>members</div>;
    }
  }

  return (
    <>
      <div className="recruit-page-container">
        <SemiNavbar content="recruit" />
        {renderRecruitMenu()}
      </div>

      <style jsx>{`
        .recruit-page-container {
          margin-top: 80px;
        }
      `}</style>
    </>
  );
};

export default Recruit;
