import Image from 'next/image';
import styles from './RecruitPost.style';

interface RecruitPostProps {
  //id:number;
  title: string;
  introduce: string;
  thumbnailImg: string;
}

const RecruitPost = ({ title, introduce, thumbnailImg }: RecruitPostProps) => (
  <>
    <div className="post-wrap">
      <Image
        src={thumbnailImg}
        width={330}
        height={330}
        alt={`${title}-post-img`}
      />
      <div className="title">{title}</div>
      <div className="introduce">{introduce}</div>
    </div>

    <style jsx>{styles}</style>
  </>
);

export default RecruitPost;
