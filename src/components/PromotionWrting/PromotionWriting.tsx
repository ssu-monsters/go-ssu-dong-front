import React from 'react';
import styles from './PromotionWriting.style';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const PromotionWriting = () => {
  const ORGANIZATION_TYPE = [
    '동아리',
    '대외할동',
    '스타트업',
    '소모임',
    '기타',
  ];
  let inputRef: any;
  const [imageSrc, setImageSrc] = useState(null);
  const [ChangeImg, setChangeImg] = useState(false);
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [dayType, setDayType] = useState('');
  const [dayInputs, setDayInputs] = useState({
    recruitStartDay: '',
    recruitEndDay: '',
    activityStartDay: '',
    activityEndDay: '',
  });

  const [promotionInfo, setPromotionInfo] = useState({
    title: '',
    intro: '',
    user: '',
    memberNumber: '',
    type: '',
    text: '',
    thumnail: '',
    supportLink: '',
    relatedLink: '',
  });

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null);
        resolve();
        setPromotionInfo({ ...promotionInfo, thumnail: reader.result });
      };
    });
  };

  const openCalendar = (type: string) => {
    setIsCalendarOpened(true);
    setDayType(type);
  };

  const onClickCalendar = (value: any) => {
    switch (dayType) {
      case 'recruitStart':
        setDayInputs({
          ...dayInputs,
          recruitStartDay: moment(value).format('YYYY-MM-DD'),
        });
        break;
      case 'recruitEnd':
        setDayInputs({
          ...dayInputs,
          recruitEndDay: moment(value).format('YYYY-MM-DD'),
        });
        break;
      case 'activityStart':
        setDayInputs({
          ...dayInputs,
          activityStartDay: moment(value).format('YYYY-MM-DD'),
        });
        break;
      case 'activityEnd':
        setDayInputs({
          ...dayInputs,
          activityEndDay: moment(value).format('YYYY-MM-DD'),
        });
        break;
    }

    setIsCalendarOpened(false);
  };

  const FormSubmit = () => {
    console.log(promotionInfo);
  };

  return (
    <>
      <div className="header">
        <div className="title">홍보글 작성</div>
      </div>

      <div className="container">
        <div className="input-tag">
          <div className="name text">
            제목
            <input
              className="input"
              placeholder="리쿠르팅 홍보글 제목을 입력해주세요"
              value={promotionInfo.title}
              onChange={(e) =>
                setPromotionInfo({ ...promotionInfo, title: e.target.value })
              }
            />
          </div>
          <div className="intro text">
            한줄소개
            <input
              className="input"
              placeholder="조직에 대한 한 줄 소개를 작성해주세요"
              value={promotionInfo.intro}
              onChange={(e) =>
                setPromotionInfo({ ...promotionInfo, intro: e.target.value })
              }
            />
          </div>
          <div className="user text">
            대상
            <input
              className="input"
              placeholder="조직 홍보 대상을 기재해주세요"
              value={promotionInfo.user}
              onChange={(e) =>
                setPromotionInfo({ ...promotionInfo, user: e.target.value })
              }
            />
          </div>
          <div className="text">
            모집 기간
            <div className="recruit-date">
              <div className="day" onClick={() => openCalendar('recruitStart')}>
                {dayInputs.recruitStartDay}
              </div>
              <div className="flow">~</div>
              <div className="day" onClick={() => openCalendar('recruitEnd')}>
                {dayInputs.recruitEndDay}
              </div>
            </div>
          </div>
          <div className="text">
            활동 기간
            <div className="recruit-date">
              <div
                className="day"
                onClick={() => openCalendar('activityStart')}
              >
                {dayInputs.activityStartDay}
              </div>
              <div className="flow">~</div>
              <div className="day" onClick={() => openCalendar('activityEnd')}>
                {dayInputs.activityEndDay}
              </div>
            </div>
          </div>
          {isCalendarOpened && (
            <Calendar
              className="calendar"
              value={new Date()}
              onClickDay={onClickCalendar}
              goToRangeStartOnSelect={true}
              formatDay={(locale, date) => moment(date).format('DD')}
              locale="ko"
              showNeighboringMonth={false}
            />
          )}
          <div className="member text">
            모집 인원
            <input
              className="input"
              placeholder="조직 홍보 대상을 기재해주세요"
              value={promotionInfo.memberNumber}
              onChange={(e) =>
                setPromotionInfo({
                  ...promotionInfo,
                  memberNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="orga-type text">
            조직 유형
            {ORGANIZATION_TYPE.map((item, idx: any) => {
              return (
                <label key={idx}>
                  <input
                    type="radio"
                    name="recruit"
                    value={item}
                    onChange={(e) =>
                      setPromotionInfo({
                        ...promotionInfo,
                        type: e.target.value,
                      })
                    }
                  />
                  {item}
                </label>
              );
            })}
          </div>
          <div className="text-area">내용</div>
          <textarea
            placeholder="내용을 입력해주세요"
            onChange={(e) =>
              setPromotionInfo({ ...promotionInfo, text: e.target.value })
            }
          ></textarea>
          <div className="thumnail-img">
            썸네일 이미지
            <div className="inner-img">
              <div className="add-image">
                {ChangeImg ? (
                  <img width={330} height={400} src={imageSrc} />
                ) : (
                  <img
                    className="add"
                    src="add.svg"
                    onClick={() => {
                      inputRef.click();
                      setChangeImg(true);
                    }}
                  />
                )}
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => onUpload(e)}
                  ref={(refParam) => (inputRef = refParam)}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="img-text">
                이미지 권장 사이즈는 330*400 입니다.
                <br /> png, jpg, jpeg 확장자만 첨부 가능합니다.
              </div>
            </div>
          </div>
          <div className="link text">
            지원 링크
            <input
              className="input"
              placeholder="지원 폼 링크를 설정해주세요"
              value={promotionInfo.supportLink}
              onChange={(e) =>
                setPromotionInfo({
                  ...promotionInfo,
                  supportLink: e.target.value,
                })
              }
            />
          </div>
          <div className="link text">
            관련 링크
            <input
              className="input"
              placeholder="홈페이지, SNS 등 링크를 설정해주세요 (최대 3개)"
              value={promotionInfo.relatedLink}
              onChange={(e) =>
                setPromotionInfo({
                  ...promotionInfo,
                  relatedLink: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="btn">
          <button className="okay" onClick={FormSubmit}>
            작성 완료
          </button>
          <button className="no">작성 취소</button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default PromotionWriting;
