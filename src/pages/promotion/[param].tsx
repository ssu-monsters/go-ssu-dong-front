import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RecruitPostDummyData } from '@/dummyData';

import DetailPromotion from '@/components/DetailPromotion';
import PromotionTemplate from '@/components/PromotionTemplate';
import PromotionWriting from '@/components/PromotionWrting';

const Promotion = () => {
  const router = useRouter();

  // 홍보글 둘러보기 : `/promotion`
  // 홍보글 작성하기 : `/promotion/new`
  // 홍보글 상세보기 : `/promotion/[title]`
  const { param } = router.query;
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const DETAILDATA = RecruitPostDummyData.filter((item) => {
      if (item.title == param) {
        return item;
      }
    });
    setDetailData(DETAILDATA[0]);
  }, []);

  if (param === 'new') {
    console.log(param);
    return <PromotionWriting />;
  } else {
    return <DetailPromotion title={param} detailData={detailData} />;
  }
};

export default Promotion;
