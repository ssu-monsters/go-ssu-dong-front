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

/** 로그인 요청 함수 */
export async function registerAsync(
  type: 'organization' | 'general',
  account: string,
  password: string,
  email: string,
  name: string,
  thumnail: string,
): ApiResponse<any> {
  const url = type === 'organization' ? '/og_register' : '/register';
  const response = await postAsync(url, {
    account,
    password,
    email,
    name,
    thumnail,
  });
  return response;
}
