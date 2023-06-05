// 조직 지원 관리 sub menu
export const applySubMenu = [
  { url: 'profile', name: '프로필 관리' },
  { url: 'status', name: '지원 현황' },
  { url: 'documents', name: '지원서 관리' },
] as const;

export type ApplySubMenuType = 'profile' | 'status' | 'documents';

// 조직 모집 관리 sub menu
export const recruitSubMenu = [
  { url: 'process', name: '리쿠르팅 관리' },
  { url: 'profile', name: '조직 정보' },
  { url: 'members', name: '멤버 관리' },
] as const;

export type RecruitSubMenuType = 'process' | 'profile' | 'members';
