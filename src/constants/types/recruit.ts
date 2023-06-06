export type OrganizationType =
  | '동아리'
  | '대외활동'
  | '스타트업'
  | '소모임'
  | '기타';

export interface RecruitPostType {
  title: string;
  introduce: string;
  organizationType: OrganizationType;
  target: string;
  recruitStartDate: string;
  recruitEndDate: string;
  activityStartDate: string;
  acitivityEndDate: string;
  recruitCount: number;
  content: string;
  recruitURL: string;
  thumbnailImg: string;
}

export type PageTransformType = 'promotion' | 'document' | 'interview';

export interface ProcessStepType {
  step: number;
  title: string;
  content: string;
  btn: string;
  path: string;
}
