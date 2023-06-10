import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import DetailPromotion from '@/components/DetailPromotion';
import PromotionWriting from '@/components/PromotionWrting';
import { getPromotionDetailAsync } from '@/api/promotion';

const Promotion = () => {
  const router = useRouter();

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
    console.log(param);
    console.log(typeof param);
    // param이 존재하는데 new가 아닐 때. 즉 홍보글 상세 페이지인 경우
    if (param && param !== 'new') {
      const data = getDetailedInfo();
      setDetailData(data);
      console.log('sss');
    }
  }, []);

  if (param === 'new') {
    return <PromotionWriting />;
  } else {
    return <DetailPromotion title={param} detailData={detailData} />;
  }
};

export default Promotion;

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
