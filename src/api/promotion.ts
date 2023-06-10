import { ApiResponse } from '@/constants/types/api';
import { postAsync, getAsync } from './API';

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

  const response = await postAsync('/promotion/write', data);
  return response;
}

export async function allpromotionAsync(): ApiResponse<any> {
  const response = await getAsync('/promotion/all');
  return response;
}

export const getPromotionDetailAsync = async (organizationid: number) => {
  const response = await getAsync<any>(
    `/promotion/get?organizationid=${organizationid}`,
  );
  return response;
};
