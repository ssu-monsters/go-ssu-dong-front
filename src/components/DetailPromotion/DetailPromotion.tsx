import React from 'react';
import styles from './DetailPromotion.style';
import { useRouter } from 'next/router';

const TEXT =
  '그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터 어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤 기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점 증가하면서 더 많은 설정들이 필요해지기 시작했습니다. 그래서 많은 개발자들이 스프링은 무겁고 불편하다고 느끼기 시작했습니다. 그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터 어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤 기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점 증가하면서 더 많은 설정들이 필요해지기 시작했습니다. 그래서 많은 개발자들이 스프링은 무겁고 불편하다고 느끼기 시작했습니다. 그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터 어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤 기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점 증가하면서 더 많은 설정들이 필요해지기 시작했습니다. 그래서 많은 개발자들이 스프링은 무겁고 불편하다고 느끼기 시작했습니다. 그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터 어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤 기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점 증가하면서 더 많은 설정들이 필요해지기 시작했습니다. 그래서 많은 개발자들이 스프링은 무겁고 불편하다고 느끼기 시작했습니다.';

interface MyComponentProps {
  title: any;
  detailData: any;
}

const DetailPromotion = ({ title, detailData }: MyComponentProps) => {
  const router = useRouter();
  const RoutingSupport = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfKex69vMhjL3rv0hQX_UaQrJvh3NMgWkFhTIx7ihoTjd1WIg/viewform?vc=0&c=0&w=1&flr=0',
    );
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="main">
            <div className="inner-info">
              <div className="inner-left">
                <div className="intro">
                  <div className="tag-wrapper">
                    #{detailData?.organizationType}
                  </div>
                  <div className="title">{detailData?.title}</div>
                  <div className="introduce">{detailData?.introduce}</div>
                </div>
                <div className="date">
                  <div className="inner-date">
                    <div className="type">모집 대상</div>
                    <div className="type-result">{detailData?.target}</div>
                  </div>
                  <div className="inner-date">
                    <div className="type">모집 기간</div>
                    <div className="type-result">
                      {' '}
                      {detailData?.recruitStartDate} ~{' '}
                      {detailData?.recruitEndDate}
                    </div>
                  </div>
                  <div className="inner-date">
                    <div className="type">활동 기간</div>
                    <div className="type-result">
                      {' '}
                      {detailData?.activityStartDate} ~{' '}
                      {detailData?.acitivityEndDate}
                    </div>
                  </div>
                  <div className="inner-date-last">
                    <div className="type">모집 인원</div>
                    <div className="type-result">
                      {' '}
                      {detailData?.recruitCount}
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-right">
                <img src={detailData?.thumbnailImg} />
              </div>
            </div>
            <div className="btn">
              <button onClick={RoutingSupport}>
                {detailData?.title} 지원하기
              </button>
            </div>
          </div>
          <div className="detail-text">{detailData?.content}</div>
          {/*<div className="detail-text">{TEXT}</div>*/}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default DetailPromotion;
