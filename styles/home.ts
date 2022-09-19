import styled from 'styled-components';

export const HomeContainer = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  box-sizing: border-box;
  /* @media (max-width: 500px) {
    overflow: auto;
    height: auto;
  } */
`;

export const HomeMobileContainer = styled.div`
  display: block;
  height: auto;
  width: 100%;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const HomeWebContainer = styled.div`
  background: #1b1b1b;
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: block;
  @media (max-width: 500px) {
    display: none;
  }
  .full-page-section {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }
  .fp-watermark {
    display: none;
  }
`;

export const HomeOneContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/static/image/home-bg.webp') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media (max-width: 700px) {
    background-size: cover;
    background-position: center;
  }
  .butterfly-box {
    position: absolute;
    width: 500px;
    height: 200px;
    margin: -200px 0 3rem 0;
    cursor: pointer;
    position: relative;
    @media (max-width: 1000px) {
      width: 400px;
      height: 160px;
      margin-top: -160px;
    }
    @media (max-width: 500px) {
      width: 300px;
      height: 120px;
      margin-top: -120px;
    }
    .butterfly-item-box {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      animation: move 4s ease-in-out infinite alternate;
      svg {
        width: 100%;
        height: 100%;
      }
      &.butterfly-item-bg-box {
        z-index: 2;
        svg {
          animation: filter 4s linear infinite alternate;
        }
      }
      svg {
        filter: drop-shadow(0px 0px 4px #e82648);
        animation: filter2 4s linear infinite alternate;
      }
    }
    &:hover {
      animation-play-state: paused;
    }
    img {
      width: 100%;
      animation: filter 2s linear infinite alternate;
    }
  }
  .slogan-box {
    /* width: 815px;
    height: 109px;
    @media (max-width: 600px) {
      width: 500px;
      height: 50px;
    }
    @media (max-width: 500px) {
      width: 400px;
      height: 50px;
    }
    @media (max-width: 400px) {
      width: 300px;
      height: 50px;
    }
    svg {
      width: 100%;
      height: 100%;
    } */
    span {
      word-break: break-all;
      font-size: 120px;
      letter-spacing: 12px;
      font-family: 'Facon';
      color: rgb(232, 32, 72);
      opacity: 0;
      animation: showText 0.1s forwards 0.3s;
      @media (max-width: 500px) {
        font-size: 70px;
      }
    }
  }
  @keyframes showText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .tombstone-box {
    width: 240px;
    height: 240px;
    right: 13%;
    top: 60%;
    position: absolute;
    cursor: pointer;
    @media (max-width: 700px) {
      right: 20%;
    }
    @media (max-width: 500px) {
      width: 150px;
      height: 150px;
      top: 70%;
    }
    .tomb-2 {
      opacity: 1;
      animation: lighting 8s linear infinite alternate;
    }
    .tomb-3 {
      opacity: 0;
    }
    &:hover {
      .tomb-3 {
        opacity: 1;
      }
      .tomb-2 {
        animation: none;
      }
    }
  }
  @keyframes lighting {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes move {
    from {
      margin-top: 0px;
    }
    to {
      margin-top: -100px;
      @media (max-width: 500px) {
        margin-top: -50px;
      }
    }
  }
  @keyframes filter {
    from {
      filter: none;
      opacity: 0;
    }
    to {
      filter: drop-shadow(0px 0px 4px #e82648);
      opacity: 1;
    }
  }
  @keyframes filter2 {
    from {
      filter: none;
    }
    to {
      filter: drop-shadow(0px 0px 4px #e82648);
    }
  }
`;

export const HomeTwoContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  min-height: 700px;
  box-sizing: border-box;
  padding: 8px 228px 0 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 4px 100px;
  }
  @media (max-width: 1000px) {
    padding: 4px 50px;
  }
  @media (max-width: 500px) {
    padding: 4px 30px;
    display: block;
    height: auto;
    min-height: auto;
  }
  .videos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 16px;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .specialVideo {
    /* @media (max-width: 1440px) {
      padding-top: 0px;
    } */
  }
  .videosWrapper {
    width: 456px;
    border-radius: 8px;
    opacity: 1;
    border: 2px solid #111111;
    box-sizing: border-box;
    position: relative;
    margin-right: 12px;
    :last-child {
      margin-right: 0;
    }
    height: 550px;
    @media (max-width: 1440px) {
      width: 350px;
      height: 450px;
    }
    @media (max-width: 1200px) {
      width: 280px;
      height: 380px;
    }
    @media (max-width: 1000px) {
      width: 450px;
      height: 520px;
      margin-top: 24px;
    }
    @media (max-width: 500px) {
      width: 320px;
      height: 360px;
      margin-right: 0;
      margin-top: 16px;
    }
    video {
      width: 100%;
      height: 450px;
      @media (max-width: 1440px) {
        height: 370px;
      }
      @media (max-width: 1200px) {
        height: 320px;
      }
      @media (max-width: 1000px) {
        height: 370px;
      }
      @media (max-width: 500px) {
        height: 320px;
      }
    }
    .videoDes {
      left: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      background: #111111;
      font-size: 20px;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      line-height: 30px;
      box-sizing: border-box;
      text-align: center;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      text-transform: uppercase;
      @media (max-width: 1440px) {
        font-size: 18px;
        line-height: 27px;
      }
      @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  h2 {
    font-size: 32px;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 48px;
    margin-top: 80px;
    margin-bottom: 24px;
    text-transform: uppercase;
    @media (max-width: 500px) {
      font-size: 20px;
      line-height: 30px;
      margin-top: 35px;
      margin-bottom: 15px;
    }
  }
  p {
    font-size: 16px;
    font-family: 'Regular';
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    margin-bottom: 16px;
    &.ides {
      font-size: 22px;
      @media (max-width: 500px) {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 10px;
      }
    }
    &.italic {
      font-style: italic;
      opacity: 0.9;
    }
    &.hallelujah {
      font-family: 'Gloria';
      display: flex;
      align-items: center;
      svg {
        margin-left: 5px;
      }
    }
    .fontStyle {
      opacity: 0.9;
    }
    .wingsCollection {
      opacity: 1;
      font-size: 20px;
      font-family: 'Medium';
      font-weight: 500;
      color: #ffffff;
    }
    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    a {
      display: inline;
      font-size: 16px;
      color: #ffffff;
      text-decoration: underline;
      &:hover {
        color: #2196f3;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    margin-top: 96px;
    @media (max-width: 500px) {
      margin-bottom: -20px;
      margin-top: 20px;
    }
    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
    }
    button {
      &:first-child {
        margin-right: 88px;
        @media (max-width: 850px) {
          margin-right: 0;
          margin-bottom: 30px;
        }
        @media (max-width: 500px) {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 500px) {
        width: 260px;
        height: 45px;
        font-size: 15px;
      }
    }
    svg {
      margin-right: 12px;
      @media (max-width: 500px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  .faq-box {
    margin-bottom: 87px;
    p {
      background: #262626;
      font-size: 16px;
      font-family: 'SemBold';
      font-weight: 500;
      color: #fff;
      line-height: 24px;
      box-sizing: border-box;
      padding: 16px 32px;
      margin-bottom: 0;
      border-radius: 0 0 8px 8px;
      @media (max-width: 850px) {
        font-size: 12px;
        padding: 8px 16px;
      }
    }
  }
`;

export const HomeThreeContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 32px 228px 0px 228px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1400px) {
    padding: 32px 100px 0 100px;
  }
  @media (max-width: 1000px) {
    padding: 32px 50px 0 50px;
  }
  @media (max-width: 500px) {
    padding: 0 30px;
    height: auto;
  }
  h2 {
    font-size: 32px;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 48px;
    margin-top: 56px;
    margin-bottom: 24px;
    @media (max-width: 500px) {
      font-size: 20px;
      line-height: 30px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
  .faq-box {
    margin-bottom: 50px;
    p {
      background: #262626;
      font-size: 16px;
      font-family: 'Medium';
      font-weight: 500;
      color: #ffffff;
      line-height: 24px;
      box-sizing: border-box;
      padding: 16px 32px;
      margin-bottom: 0;
      border-radius: 0 0 8px 8px;
      a {
        font-size: 16px;
        font-family: 'Medium';
        font-weight: 500;
        color: #ffffff;
        display: inline;
        text-decoration: underline;
        &:hover {
          color: #2196f3;
        }
      }
      @media (max-width: 850px) {
        font-size: 12px;
        padding: 8px 16px;
        a {
          font-size: 12px;
        }
      }
    }
  }
`;

export const CommingComp = styled.div`
  width: 300px;
  height: 200px;
  max-width: 80vmin;
  max-height: 80vmin;
  background: #101217;
  border-radius: 16px;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
  }
  .imgWrapper {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 18px;
  }
  span {
    font-size: 20px;
    font-family: 'Medium';
    line-height: 30px;
    color: #fff;
  }
`;
