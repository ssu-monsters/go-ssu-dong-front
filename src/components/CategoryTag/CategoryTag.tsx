import { OrganizationType } from '@/constants/types/recruit';
import styles from './CategoryTag.style';

interface CategoryTagProps {
  organizationType: OrganizationType;
}

const CategoryTag = ({ organizationType }: CategoryTagProps) => (
  <>
    <div className="tag-wrapper tag">#{organizationType}</div>
    <style jsx>{styles}</style>
  </>
);

export default CategoryTag;
