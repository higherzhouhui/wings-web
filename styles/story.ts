import styled from 'styled-components';

export const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('/static/image/story-bg.png') no-repeat;
  background-size: 100% 100%;
  @media (max-width: 700px) {
    background-size: cover;
    background-position: center;
    min-height: 0;
  }
`;
export const StoryContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .banner-box {
    width: 872px;
    height: 634px;
    transform: translate3d(0px, 0px, 0px);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: url('/static/image/story-bg.webp') no-repeat;
    background-size: 100% 100%;
    padding: 121px 88px;
    @media (max-width: 900px) {
      width: 80vw;
      height: 60vw;
      padding: 12% 7%;
    }
    .banner-content-box {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
`;
export const BannerContainer = styled.div`
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
export const StoryTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  h2 {
    font-size: 40px;
    font-family: 'Gloria';
    font-weight: 400;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 26px;
    display: flex;
    a {
      font-size: 22px;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: #2196f3;
      }
    }
  }
`;
export const StoryBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 650px;
    font-size: 16px;
    font-family: 'Gloria';
    font-weight: 400;
    color: #ffffff;
    max-width: 70%;
  }
`;
