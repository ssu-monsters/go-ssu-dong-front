import PromotionTemplate from '@/components/PromotionTemplate';
import PromotionWriting from '@/components/PromotionWrting';
import { useRouter } from 'next/router';
import React from 'react';

const Promotion = () => {
  const router = useRouter();
  // 홍보글 작성하기 : `/promotion/new`
  // 홍보글 둘러보기 : `/promotion`
  // 홍보글 상세보기 : `/promotion/[id]`
  const params = router.query.new as 'new' | string | undefined;

  if (params === 'new') {
    return <PromotionWriting />;
  } else {
    return <PromotionTemplate />;
  }
};

export default Promotion;
