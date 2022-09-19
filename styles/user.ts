import styled from 'styled-components';
export const UserContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  @media (max-width: 1440px) {
    padding-top: 80px;
  }
  .fliterWrapper {
    padding: 20px 0;
    position: sticky;
    top: 100px;
    background: #1d1d1d;
    z-index: 9;
    @media (max-width: 1440px) {
      top: 80px;
    }
    @media (max-width: 500px) {
      top: 60px;
    }
  }
  .fliter {
    margin: auto;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 700px) {
      width: 90%;
    }
  }
  main {
    margin: auto;
    width: 75%;
    padding: 5px 0;
    @media (max-width: 700px) {
      width: 90%;
    }
  }
  .text {
    font-size: 18px;
    font-family: 'Regular';
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    opacity: 0.5;
    margin-right: 18px;
    @media (max-width: 700px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
  .slide {
    width: 48px;
    height: 24px;
    border-radius: 24px;
    position: relative;
    cursor: pointer;
  }
  .on {
    background: #e82648;
  }
  .off {
    background: #8d8080;
  }
  .circle {
    position: absolute;
    top: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #fff;
  }
  @keyframes right {
    from {
      left: 1px;
    }
    to {
      left: 24px;
    }
  }
  .right {
    animation: right 0.5s forwards;
  }
  @keyframes left {
    from {
      left: 24px;
    }
    to {
      left: 1px;
    }
  }
  .left {
    animation: left 0.5s forwards;
  }
  .content {
    width: 100%;
  }
`;

export const ProductContainer = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #1d1d1d;
  padding: 20px;
  @media (max-width: 700px) {
    border-radius: 4px;
    padding: 10px;
  }
  .image {
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    cursor: pointer;
  }
  .title {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-family: 'Regular';
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    box-sizing: border-box;
    @media (max-width: 700px) {
      margin-top: 10px;
      font-size: 14px;
      line-height: 21px;
    }
  }
  :hover {
    box-shadow: rgba(170, 170, 192, 0.4) 0px 8px 15px 1px;
    transform: scale(1.02);
  }
`;
export const NftContainer = styled.div`
  main {
    width: 100%;
    height: 640px;
    position: relative;
    @media (max-width: 1200px) {
      height: 500px;
    }
    @media (max-width: 1000px) {
      height: 400px;
    }
    @media (max-width: 500px) {
      height: 300px;
    }
  }
  .imageWrapper {
    width: 420px;
    height: 420px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-30%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1400px) {
      width: 360px;
      height: 360px;
    }
    @media (max-width: 1200px) {
      width: 320px;
      height: 320px;
    }
    @media (max-width: 1000px) {
      width: 40%;
      height: 40%;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .image {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
    .skWrapper {
      position: relative;
      width: 100%;
    }
    .sk {
      padding-bottom: 100%;
    }
  }
  .contentWrapper {
    width: 100%;
    height: 100%;
    background: #e82648;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-right: 5%;
    justify-content: end;
    box-sizing: border-box;
    @media (max-width: 1000px) {
      padding-top: 10%;
    }
  }
  .content {
    width: 60%;
    @media (max-width: 1000px) {
      width: 95%;
    }
    float: right;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.8rem;
      .title {
        font-size: 2.2rem;
        font-family: 'SemiBold';
        font-weight: 600;
        color: #ffffff;
        line-height: 3.3rem;
      }
      .svgWrapper {
        position: relative;
        width: 2.2rem;
        height: 2.2rem;
      }
    }
    .parentTitle {
      height: 1.8rem;
      font-size: 1.2rem;
      font-family: 'Medium';
      color: #ffffff;
      line-height: 1.8rem;
      margin-bottom: 0.8rem;
    }
    .sktop {
      height: 3.3rem;
      margin-bottom: 2.7rem;
    }
    .detailWrapper {
      width: 100%;
    }
    .detail {
      height: 4rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 1rem;
      margin-bottom: 0.9rem;
    }
    .skdetail {
      height: 2.8rem;
      margin-bottom: 0.9rem;
    }
    .left {
      display: flex;
      align-items: center;
    }
    .detailImg {
      position: relative;
      width: 2.7rem;
      height: 2.7rem;
      border-radius: 4px;
      overflow: hidden;
      margin-right: 0.9rem;
    }
  }
  .description {
    font-size: 0.9rem;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 1.5rem;
    margin-right: 0.9rem;
    opacity: 0.8;
  }
  .detailsvg {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    margin-right: 1.2rem;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
    }
  }
  .fengexian {
    width: 1px;
    height: 1.5rem;
    background: #ffffff;
    opacity: 1;
    margin-right: 2.2rem;
    opacity: 0.8;
  }
  .earning {
    font-size: 0.9rem;
    font-family: 'Medium';
    color: #ffffff;
    line-height: 1.5rem;
    opacity: 0.8;
  }
`;
