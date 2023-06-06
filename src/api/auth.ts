import { ApiResponse } from '@/constants/types/api';
import { postAsync } from './API';

/** 로그인 요청 함수 */
export async function loginAsync(
  type: 'organization' | 'general',
  account: string,
  password: string,
): ApiResponse<any> {
  const url = type === 'organization' ? '/og_login' : '/login';
  const response = await postAsync(url, {
    account,
    password,
  });
  return response;
}
