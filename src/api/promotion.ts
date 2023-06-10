import { ApiResponse } from '@/constants/types/api';
import { postAsync } from './API';

/** 로그인 요청 함수 */
export async function writePromotionAsync(
  promotionInfo: any,
  dayInfo: any,
): ApiResponse<any> {
  const {
    title,
    description,
    target,
    recruitmentCount,
    organizationType,
    content,
    thumbnailImage,
  } = promotionInfo;

  const recruitmentPeriod = `${dayInfo.recruitStartDay} - ${dayInfo.recruitEndDay}`;
  const activityPeriod = `${dayInfo.activityStartDay} - ${dayInfo.activityEndDay}`;

  const data = {
    title,
    description,
    target,
    recruitmentCount,
    organizationType,
    content,
    thumbnailImage,
    recruitmentPeriod,
    activityPeriod,
    organizationId: JSON.parse(localStorage.getItem('ID') || ''),
  };

  console.log(data);
  const response = await postAsync('/promotion/write', data);
  return response;
}
