import DetailPromotion from '@/components/DetailPromotion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RecruitPostDummyData } from '@/dummyData';

const Detail = ({ params }: any) => {
  const router = useRouter();
  const title = router.query.params;
  const [detailData, setDetailData] = useState({});
  // 여기서 서버랑 통신? 해서 보내주는거지 . 정보를

  useEffect(() => {
    const DETAILDATA = RecruitPostDummyData.filter((item) => {
      if (item.title == title) {
        return item;
      }
    });
    setDetailData(DETAILDATA[0]);
  }, []);

  return <DetailPromotion title={title} detailData={detailData} />;
};

export default Detail;
