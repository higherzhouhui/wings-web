import styled from 'styled-components';

export const TimeLineContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: hidden;
  position: relative;
  min-width: 900px;
`;
export const TimeLineContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url('/static/image/timeline-bg.jpg'); */
  /* background-size: cover; */
  position: relative;
  .imgWrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    .des {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      height: 100px;
      p {
        width: 650px;
        font-size: 16px;
        font-family: 'Gloria';
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .bgImageHide {
    opacity: 0;
  }
  .bgImageShow {
    opacity: 1;
  }
  .step-box {
    position: absolute;
    z-index: 888;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #453939;
    display: flex;
    align-content: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      border: 1px solid #1d1d1d;
    }
  }
  .prev-box {
    left: 50px;
  }
  .next-box {
    right: 50px;
  }
`;
export const TimeLineBannerContainer = styled.div`
  width: 100%;
  height: 696px;
  margin-top: -30px;
  position: relative;
  @media (min-width: 2400px) {
    height: 820px;
  }
  @media (max-width: 1400px) {
    height: 600px;
  }
  @media (max-width: 1300px) {
    height: 500px;
  }
  @media (max-width: 1200px) {
    height: 450px;
  }
  @media (max-width: 1000px) {
    height: 400px;
  }
  @media (max-width: 800px) {
    height: 350px;
  }
  .swiper {
    height: 100%;
    .swiper-slide {
      overflow: hidden;
      border-radius: 20px;
      opacity: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .swiper-slide-shadow-left {
        background-image: none;
      }
      .swiper-slide-shadow-right {
        background-image: none;
      }
      &.swiper-slide-visible {
        opacity: 1;
      }
      &.swiper-slide-prev {
        opacity: 0;
      }
      &.swiper-slide-next {
        opacity: 0;
      }
      img {
        cursor: pointer;
        /* object-fit: cover; */
        /* &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        } */
      }
      .banner-box {
        width: 100%;
        height: 100%;
        /* background: rgba(0, 0, 0, 0.8); */
        position: absolute;
        bottom: -2px;
        border-radius: 0 0 20px 20px;
        z-index: 2;
        transform: translate3d(0px, 0px, 0px);
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
        background: url('/static/image/story-bg.webp') no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 14% 10%;
        .banner-content-box {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: white;
    }
  }
  .mask-box {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9;
  }
`;
export const TimeLineTopContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  h2 {
    font-size: 40px;
    font-family: 'Gloria';
    font-weight: 400;
    color: #ffffff;
  }
`;
export const TimeLineBottomContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  z-index: 999;
  p {
    width: 650px;
    font-size: 16px;
    font-family: 'Gloria';
    font-weight: 400;
    color: #ffffff;
  }
  .box {
    width: 650px;
    position: relative;
  }
  .content {
    width: 100%;
    position: absolute;
    border-radius: 4px;
  }
  /* filter是对该元素的模糊，因此对content添加并模糊伪元素，并定位到content的下层，而不是直接修改背景图或content的样式 */
  .content::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(3px);
    margin: -21px;
    opacity: 0.8;
  }
  .content p {
    font-size: 16px;
    font-family: 'Gloria';
    font-weight: 400;
    color: #ffffff;
    /* 清除子元素对父元素filter属性值的继承 */
    filter: blur(0);
  }
`;
