import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .template-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .carousel {
    width: 100%;
    height: 460px;
    background-color: ${COLORS.grayscale.gray100};
  }

  .title {
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: #000;
    margin: 45px 0px 25px;
  }

  .tags-container {
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
  }

  .tags-container > :global(.tag) {
    margin: 5px;
  }

  .posts-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 35px;

    margin-bottom: 70px;
  }
`;
