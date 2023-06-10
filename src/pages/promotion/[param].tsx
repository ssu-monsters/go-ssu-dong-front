import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import DetailPromotion from '@/components/DetailPromotion';
import PromotionWriting from '@/components/PromotionWrting';
import { getPromotionDetailAsync } from '@/api/promotion';

const Promotion = () => {
  const router = useRouter();

  // 홍보글 둘러보기 : `/promotion`
  // 홍보글 작성하기 : `/promotion/new`
  // 홍보글 상세보기 : `/promotion/[org_id]`
  const { param } = router.query;
  const [detailData, setDetailData] = useState({});

  const getDetailedInfo = async () => {
    const res = await getPromotionDetailAsync(Number(param));
    //TODO  데이터 가공해서 data만 return 해야함 !!
    const data = res.result;
    console.log(data);
    setDetailData(data);
    return data;
  };

  useEffect(() => {
    if (param && param !== 'new') {
      const data = getDetailedInfo();
      setDetailData(data);
    }
  }, []);

  if (param === 'new') {
    return <PromotionWriting />;
  } else {
    return <DetailPromotion title={param} detailData={detailData} />;
  }
};

export default Promotion;
