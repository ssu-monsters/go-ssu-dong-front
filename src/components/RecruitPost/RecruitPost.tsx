import Image from 'next/image';
import styles from './RecruitPost.style';
import { useRouter } from 'next/router';

interface RecruitPostProps {
  //id:number;
  title: string;
  introduce: string;
  thumbnailImg: string;
  promotionId: string;
}

const RecruitPost = ({
  title,
  introduce,
  thumbnailImg,
  promotionId,
}: RecruitPostProps) => {
  const router = useRouter();
  const DetailPage = (promotionId: string) => {
    router.push(`/promotion/${promotionId}`);
  };

  return (
    <>
      <div className="post-wrap" onClick={() => DetailPage(promotionId)}>
        <Image
          src={thumbnailImg}
          width={340}
          height={350}
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
