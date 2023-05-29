import React from 'react';
import styles from './PromotionWriting.style';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const PromotionWriting = () => {
  const RECRUITMEMBER = ['동아리', '대외할동', '스타트업', '소모임', '기타'];
  let inputRef: any;
  const [imageSrc, setImageSrc]: any = useState(null);
  const [ChangeImg, setChangeImg]: any = useState(false);
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);
  const [recruitStartDay, setRecruitStartDay] = useState('YYYY.MM.DD');
  const [recruitEndDay, setRecruitEndDay] = useState('YYYY.MM.DD');
  const [activeStartDay, setActiveStartDay] = useState('YYYY.MM.DD');
  const [activeEndDay, setActiveEndDay] = useState('YYYY.MM.DD');

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null);
        resolve();
        console.log(reader.result); // 서버에 보내줄 image url
      };
    });
  };

  const openCalendar = (idx: number) => {
    setOpen(true);
    setNum(idx);
  };

  const clickDay = (value: any) => {
    if (num === 1) {
      setRecruitStartDay(moment(value).format('YYYY-MM-DD'));
    } else if (num === 2) {
      setRecruitEndDay(moment(value).format('YYYY-MM-DD'));
    } else if (num === 3) {
      setActiveStartDay(moment(value).format('YYYY-MM-DD'));
    } else {
      setActiveEndDay(moment(value).format('YYYY-MM-DD'));
    }

    setOpen(false);
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
            />
          </div>
          <div className="intro text">
            한줄소개
            <input
              className="input"
              placeholder="조직에 대한 한 줄 소개를 작성해주세요"
            />
          </div>
          <div className="user text">
            대상
            <input
              className="input"
              placeholder="조직 홍보 대상을 기재해주세요"
            />
          </div>

          <div className="text">
            모집 기간
            <div className="recruit-date">
              <div className="day" onClick={() => openCalendar(1)}>
                {recruitStartDay}
              </div>
              <div className="flow">~</div>
              <div className="day" onClick={() => openCalendar(2)}>
                {recruitEndDay}
              </div>
            </div>
          </div>

          <div className="text">
            활동 기간
            <div className="recruit-date">
              <div className="day" onClick={() => openCalendar(3)}>
                {activeStartDay}
              </div>
              <div className="flow">~</div>
              <div className="day" onClick={() => openCalendar(4)}>
                {activeEndDay}
              </div>
            </div>
          </div>

          {open ? (
            <Calendar
              className="calendar"
              //  onChange={onChange}
              value={new Date()}
              onClickDay={clickDay}
              goToRangeStartOnSelect={true}
              formatDay={(locale, date) => moment(date).format('DD')}
              locale="ko"
              showNeighboringMonth={false}
            />
          ) : (
            ''
          )}

          <div className="member text">
            모집 인원
            <input
              className="input"
              placeholder="조직 홍보 대상을 기재해주세요"
            />
          </div>

          <div className="orga-type text">
            조직 유형
            {RECRUITMEMBER.map((item: any) => {
              return (
                <label>
                  <input type="radio" name="recruit" value={item} />
                  {item}
                </label>
              );
            })}
          </div>

          <div className="text-area">내용</div>
          <textarea placeholder="내용을 입력해주세요"></textarea>
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
            />
          </div>
          <div className="link text">
            관련 링크
            <input
              className="input"
              placeholder="홈페이지, SNS 등 링크를 설정해주세요 (최대 3개)"
            />
          </div>
        </div>
        <div className="btn">
          <button className="okay">작성 완료</button>
          <button className="no">작성 취소</button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default PromotionWriting;
