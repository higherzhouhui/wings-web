import styled from 'styled-components';

export const PotionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  #myCanvas2 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .main {
    width: 75%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  .left {
    position: relative;
    width: 45%;
    height: 100%;
  }
  .right {
    width: 50%;
    h1 {
      font-size: 3.1rem;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      line-height: 4.6rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.1rem;
      font-family: 'Regular';
      font-weight: 400;
      color: #555;
      line-height: 1.6rem;
      margin-bottom: 3.1rem;
    }
    .price {
      display: flex;
      margin-bottom: 1.8rem;
    }
    .ethSvg {
      width: 3.5rem;
      height: 3.5rem;
    }
    .number {
      font-size: 2.7rem;
      font-family: 'SemiBold';
      color: #ffffff;
    }
    .addorsubtract {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
    }
    .total {
      margin: 0 2rem;
      font-size: 1.4rem;
      font-family: 'Regular';
      font-weight: 400;
      color: #ffffff;
      line-height: 1.9rem;
    }
    .addSubSvg {
      position: relative;
      width: 3.1rem;
      height: 3.1rem;
      cursor: pointer;
      &:hover .svgicon {
        fill: #e82648;
      }
    }
    .svgicon {
      fill: #fff;
    }
  }
`;
