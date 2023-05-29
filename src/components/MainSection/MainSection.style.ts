import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .section {
    height: 100vh;
    scroll-snap-align: center;
  }

  /** 첫번째 Section  */

  .first-section-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto 0px;
  }

  .first-section-content .title {
    font-size: 35px;
    font-weight: 400;
    line-height: 60px;
    color: ${COLORS.primary.purple};
    margin-right: 80px;
  }

  .title > .bold {
    font-weight: 800;
  }

  .circle {
    position: absolute;
    z-index: -10;
  }

  .circle1 {
    top: 124px;
    left: 0px;
  }

  .circle2 {
    top: 566px;
    left: 309px;
  }

  .circle3 {
    top: 236px;
    right: 468px;
  }

  .circle4 {
    top: 317px;
    right: 0px;
  }

  /** 두번째 Section  */

  .second-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro-wrap {
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 0 110px;
  }

  .recruit {
    justify-content: flex-end;
  }

  .intro-wrap .title {
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: ${COLORS.grayscale.gray500};
    margin-bottom: 15px;
  }

  .intro-wrap .sub-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: ${COLORS.grayscale.gray300};
  }

  .apply-intro-text {
    margin-left: 50px;
  }

  .recruit-intro-text {
    margin-right: 50px;
  }

  /** 세번째 Section  */
  .third-section {
    padding-top: 90px;
  }

  .third-section-title {
    width: fit-content;
    margin: 0px auto;
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 80px;
  }

  .posts-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-more-button {
    width: 300px;
    height: 40px;
    background-color: ${COLORS.primary.purple};
    border-radius: 10px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayscale.white};

    display: block;
    margin: 66px auto 0px;
  }
`;
