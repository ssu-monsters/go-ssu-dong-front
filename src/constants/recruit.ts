import { ProcessStepType } from './types/recruit';

export const DOCUMENTONLY: Array<ProcessStepType> = [
  {
    step: 1,
    title: '지원폼 생성하기',
    content: '인재를 발굴하기 위해 지원자들에게 다양한 질문들을 물어보세요? 👋',
    btn: '지원폼',
    path: 'https://www.google.com/intl/ko_kr/forms/about/',
  },
  {
    step: 2,
    title: '홍보글 작성하기',
    content: '매니저브 플랫폼에 홍보글을 올려보세요 ',
    btn: '홍보글',
    path: '/promotion/new',
  },
  {
    step: 3,
    title: '지원자 관리하기',
    content: '지원자를 한 번에 관리해보세요 ',
    btn: '관리폼',
    path: '/recruit/manage-members',
  },
  {
    step: 4,
    title: '최종 합격자 선별하기',
    content: '최종 합격자들을 선별해보세요',
    btn: '합격폼',
    path: '/recruit/final-select',
  },
];

export const INTERVIEWONLY: Array<ProcessStepType> = [
  {
    step: 1,
    title: '지원폼 생성하기',
    content: '인재를 발굴하기 위해 지원자들에게 다양한 질문들을 물어보세요? 👋',
    btn: '지원폼',
    path: 'https://www.google.com/intl/ko_kr/forms/about/',
  },
  {
    step: 2,
    title: '홍보글 작성하기',
    content: '매니저브 플랫폼에 홍보글을 올려보세요 ',
    btn: '홍보글',
    path: '/promotion/new',
  },
  {
    step: 3,
    title: '지원자 관리하기',
    content: '지원자를 한 번에 관리해보세요 ',
    btn: '관리폼',
    path: '/recruit/manage-members',
  },
  {
    step: 4,
    title: '1차 합격자 선별하기',
    content: '1차 합격자들을 선별해보세요 ',
    btn: '합격폼',
    path: '/recruit/first-select',
  },
  {
    step: 5,
    title: '면접 시작하기',
    content: '면접을 위한 툴을 이용해보세요 ',
    btn: '면접툴',
    path: '/',
  },
  {
    step: 6,
    title: '최종 합격자 선별하기',
    content: '최종 합격자들을 선별해보세요',
    btn: '합격폼',
    path: '/recruit/final-select',
  },
];
