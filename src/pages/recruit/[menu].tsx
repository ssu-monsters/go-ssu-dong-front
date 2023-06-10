import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SemiNavbar from '@/components/SemiNavbar';
import UserInfo from '@/components/UserInfo';
import RecruitTemplate from '@/components/RecruitTemplate';

import { organizationDummyData } from '@/dummyData';
import { RecruitSubMenuType } from '@/constants/navigation';
import ApplicantList from '@/components/ApplicantList';
import { ApplicantData } from '@/dummyData';
import SelectTemplate from '@/components/SelectTemplate';
import { FirstSelectData } from '@/selectDummyData';

const FirstSelectContent = [''];

const Recruit = () => {
  const router = useRouter();
  const [organizationInfo, setOrganizationInfo] = useState({} || null);

  useEffect(() => {
    setOrganizationInfo(JSON.parse(localStorage.getItem('userInfo') ?? ''));
  }, []);

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
        return (
          <UserInfo info={organizationDummyData} info1={organizationInfo} />
        );
      }
      case 'members': {
        alert('멤버 관리는 준비중이에요!');
        break;
      }
      case 'manage-members': {
        return <ApplicantList content={ApplicantData} />;
      }
      case 'first-select': {
        return <SelectTemplate selectType="first" content={FirstSelectData} />;
      }

      case 'final-select': {
        return <SelectTemplate selectType="final" content={FirstSelectData} />;
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
