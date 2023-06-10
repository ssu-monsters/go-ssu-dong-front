import React, { useEffect, useRef } from 'react';
import styles from './PromotionWriting.style';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import AddIcon from '@/assets/images/add.svg';
import { useRouter } from 'next/router';
import { writePromotionAsync } from '@/api/promotion';

const ORGANIZATION_TYPE = ['동아리', '대외할동', '스타트업', '소모임', '기타'];

type DayType =
  | 'recruitStartDay'
  | 'recruitEndDay'
  | 'activityStartDay'
  | 'activityEndDay';

const PromotionWriting = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const [imageSrc, setImageSrc] = useState<string>('');
  const [ChangeImg, setChangeImg] = useState(false);
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [dayType, setDayType] = useState<DayType>('recruitStartDay');

  const [dayInputs, setDayInputs] = useState({
    recruitStartDay: '',
    recruitEndDay: '',
    activityStartDay: '',
    activityEndDay: '',
  });

  const [promotionInfo, setPromotionInfo] = useState({
    title: '',
    description: '',
    target: '',
    recruitmentCount: 30,
    organizationType: '',
    content: '',
    thumbnailImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/220px-Google_Photos_icon_%282020%29.svg.png',
    applyLink: '',
    relatedLink: '',
  });

  const onChangePromotionInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPromotionInfo({
      ...promotionInfo,
      [name]: value,
    });
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as Blob;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const res = reader.result as string;
        setImageSrc(res ?? '');
        resolve();
        // setPromotionInfo({ ...promotionInfo, thumbnailImage: "" });
      };
    });
  };

  const openCalendar = (type: DayType) => {
    setIsCalendarOpened(true);
    setDayType(type);
  };

  const onClickCalendar = (value: object) => {
    setDayInputs({
      ...dayInputs,
      [dayType]: moment(value).format('YYYY-MM-DD'),
    });

    setIsCalendarOpened(false);
  };

  const FormSubmit = async () => {
    const res = await writePromotionAsync(promotionInfo, dayInputs);
    console.log(res);
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
              name="title"
              placeholder="리쿠르팅 홍보글 제목을 입력해주세요"
              value={promotionInfo.title}
              onChange={onChangePromotionInfo}
            />
          </div>
          <div className="intro text">
            한줄소개
            <input
              className="input"
              name="description"
              placeholder="조직에 대한 한 줄 소개를 작성해주세요"
              value={promotionInfo.description}
              onChange={onChangePromotionInfo}
            />
          </div>
          <div className="user text">
            대상
            <input
              className="input"
              name="target"
              placeholder="조직 홍보 대상을 기재해주세요"
              value={promotionInfo.target}
              onChange={onChangePromotionInfo}
            />
          </div>
          <div className="text">
            모집 기간
            <div className="recruit-date">
              <div
                className="day"
                onClick={() => openCalendar('recruitStartDay')}
              >
                {dayInputs.recruitStartDay}
              </div>
              <div className="flow">~</div>
              <div
                className="day"
                onClick={() => openCalendar('recruitEndDay')}
              >
                {dayInputs.recruitEndDay}
              </div>
            </div>
          </div>
          <div className="text">
            활동 기간
            <div className="recruit-date">
              <div
                className="day"
                onClick={() => openCalendar('activityStartDay')}
              >
                {dayInputs.activityStartDay}
              </div>
              <div className="flow">~</div>
              <div
                className="day"
                onClick={() => openCalendar('activityEndDay')}
              >
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
              name="recruitmentCount"
              placeholder="조직 홍보 대상을 기재해주세요"
              value={promotionInfo.recruitmentCount}
              onChange={onChangePromotionInfo}
            />
          </div>
          <div className="orga-type text">
            조직 유형
            {ORGANIZATION_TYPE.map((item, idx: any) => {
              return (
                <label key={idx}>
                  <input
                    type="radio"
                    name="organizationType"
                    value={item}
                    onChange={onChangePromotionInfo}
                  />
                  {item}
                </label>
              );
            })}
          </div>
          <div className="text-area">내용</div>
          <textarea
            name="content"
            placeholder="내용을 입력해주세요"
            value={promotionInfo.content}
            onChange={(e) =>
              setPromotionInfo({
                ...promotionInfo,
                content: e.target.value,
              })
            }
          ></textarea>
          <div className="thumnail-img">
            썸네일 이미지
            <div className="inner-img">
              <div className="add-image">
                {ChangeImg ? (
                  <img width={330} height={400} src={imageSrc} />
                ) : (
                  <AddIcon
                    className="add"
                    onClick={() => {
                      inputRef.current?.click();
                      setChangeImg(true);
                    }}
                  />
                )}
                <input
                  accept="image/*"
                  type="file"
                  onChange={onUpload}
                  ref={(node: HTMLInputElement) => (inputRef.current = node)}
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
              name="applyLink"
              placeholder="지원 폼 링크를 설정해주세요"
              value={promotionInfo.applyLink}
              onChange={onChangePromotionInfo}
            />
          </div>
          <div className="link text">
            관련 링크
            <input
              className="input"
              name="relatedLink"
              placeholder="홈페이지, SNS 등 링크를 설정해주세요 (최대 3개)"
              value={promotionInfo.relatedLink}
              onChange={onChangePromotionInfo}
            />
          </div>
        </div>
        <div className="btn">
          <button className="okay" onClick={FormSubmit}>
            작성 완료
          </button>
          <button className="no" onClick={() => router.back()}>
            작성 취소
          </button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default PromotionWriting;
