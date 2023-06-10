import Image from 'next/image';
import styles from './RecruitPost.style';
import { useRouter } from 'next/router';

interface RecruitPostProps {
  //id:number;
  title: string;
  introduce: string;
  thumbnailImg: string;
}

const RecruitPost = ({ title, introduce, thumbnailImg }: RecruitPostProps) => {
  const router = useRouter();
  const DetailPage = (title: string) => {
    router.push(`/promotion/${title}`);
  };

  return (
    <>
      <div className="post-wrap" onClick={() => DetailPage(title)}>
        <Image
          src={thumbnailImg}
          width={330}
          height={330}
          style={{ borderRadius: '10px' }}
          alt={`${title}-post-img`}
        />
        <div className="title">{title}</div>
        <div className="introduce">{introduce}</div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default RecruitPost;
