import { useRouter } from 'next/router';
import React from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';
import RecruitTemplate from '@/components/RecruitTemplate';

import { organizationDummyData } from '@/dummyData';
import { RecruitSubMenuType } from '@/constants/navigation';
import ApplicantList from '@/components/ApplicantList';
import { ApplicantData } from '@/dummyData';

const Recruit = () => {
  const router = useRouter();

  const menu = router.query.menu as
    | RecruitSubMenuType
    | 'manage-members'
    | 'first-select'
    | 'final-select';

  function renderRecruitMenu() {
    switch (menu) {
      case 'process': {
        return <RecruitTemplate />;
      }
      case 'profile': {
        return <UserInfo info={organizationDummyData} />;
      }
      case 'members': {
        alert('멤버 관리는 준비중이에요!');
        break;
      }
      case 'manage-members': {
        return <ApplicantList content={ApplicantData} />;
      }
    }
    return <></>;
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
