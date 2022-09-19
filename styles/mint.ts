import styled from 'styled-components';

export const MintContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  .num-tip-box {
    position: absolute;
    left: 70px;
    bottom: 78px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 500px) {
      left: 20px;
      bottom: 28px;
    }
    .mindes {
      font-size: 20px;
      font-family: 'Medium';
      font-weight: 500;
      color: #ffffff;
      line-height: 23px;
      margin-top: 10px;
      min-width: 180px;
      @media (max-width: 500px) {
        font-size: 14px;
        min-width: 150px;
      }
    }
  }
  &::before {
    content: '';
    display: none;
    width: 0;
    height: 0;
    /*边框颜色*/
    border-color: #e82648 transparent transparent;
    /*边框样式*/
    border-style: solid;
    border-width: 550px 430px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1700px) {
      border-width: 500px 380px 0 0;
    }
    @media (max-width: 1600px) {
      border-width: 450px 330px 0 0;
    }
    @media (max-width: 1400px) {
      border-width: 430px 310px 0 0;
    }
    @media (max-width: 1200px) {
      border-width: 380px 200px 0 0;
    }
    @media (max-width: 1000px) {
      border-width: 350px 180px 0 0;
    }
    @media (max-width: 600px) {
      border-width: 300px 140px 0 0;
    }
    @media (max-width: 500px) {
      border-width: 200px 80px 0 0;
    }
  }
  &::after {
    content: '';
    display: none;
    width: 0;
    height: 0;
    /*边框颜色*/
    border-color: transparent #e82648 transparent transparent;
    /*边框样式*/
    border-style: solid;
    border-width: 550px 430px 0 0;
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 1700px) {
      border-width: 500px 380px 0 0;
    }
    @media (max-width: 1600px) {
      border-width: 450px 330px 0 0;
    }
    @media (max-width: 1400px) {
      border-width: 430px 310px 0 0;
    }
    @media (max-width: 1200px) {
      border-width: 380px 200px 0 0;
    }
    @media (max-width: 1000px) {
      border-width: 350px 180px 0 0;
    }
    @media (max-width: 600px) {
      border-width: 300px 140px 0 0;
    }
    @media (max-width: 500px) {
      border-width: 200px 80px 0 0;
    }
  }
`;

export const MintLeftContainer = styled.div`
  width: 508px;
  height: 100%;
  min-height: 100vh;
  background: #e82648;
  position: relative;
  flex-shrink: 1;
  @media (min-width: 1600px) and (max-width: 1800px) {
    width: 400px;
  }
  @media (max-width: 1600px) {
    width: 300px;
  }
  .wings-box {
    width: 560px;
    height: 560px;
    position: absolute;
    overflow: hidden;
    right: -280px;
    top: 50%;
    margin-top: -280px;
    background: #fefefe;
    @media (min-width: 1600px) and (max-width: 1800px) {
      width: 420px;
      height: 420px;
      right: -210px;
      margin-top: -210px;
    }
    @media (max-width: 1600px) {
      width: 320px;
      height: 320px;
      right: -160px;
      margin-top: -160px;
    }
  }
`;

export const MintRightContainer = styled.div`
  flex: 1;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin-left: 280px;
  @media (min-width: 1600px) and (max-width: 1800px) {
    width: 210px;
  }
  @media (max-width: 1600px) {
    width: 160px;
  }
  .project-box {
    width: 712px;
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1400px) {
      width: 528px;
    }
    h1 {
      font-size: 56px;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      line-height: 84px;
      margin-top: 16px;
      text-transform: uppercase;
      @media (max-width: 1400px) {
        font-size: 46px;
        margin-top: 7px;
      }
    }
    .banner-box {
      width: 712px;
      height: 160px;
      margin-top: 72px;
      @media (min-width: 1600px) and (max-width: 1800px) {
        margin-top: 50px;
      }
      @media (max-width: 1600px) {
        margin-top: 30px;
      }
      @media (max-width: 1400px) {
        width: 528px;
      }
      .banner-img-box {
        width: 160px;
        height: 160px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        &.active {
          border: 2px solid #e82648;
          box-sizing: border-box;
          .selected-icon {
            position: absolute;
            top: 8px;
            right: 8px;
          }
        }
      }
    }
    .btn-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 52px;
      opacity: 0;
      transition: all 0.3s;
      .left {
        display: flex;
        align-items: center;
        .banner-btn-box {
          margin-right: 32px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          &:hover {
            background: #e82648;
            border-color: #e82648;
            svg {
              fill: #ffffff;
            }
          }
        }
      }
      .right {
      }
    }
  }
`;

export const MintContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('/static/image/mint-bg.webp') no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 1200px) {
    min-height: 700px;
  }
  @media (max-width: 500px) {
    min-height: 0;
  }
  .wing-box {
    width: 100%;
    height: 480px;
    position: relative;
    margin-top: -120px;
    .wings-text {
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: 1;
      position: absolute;
      display: none;
      p {
        font-size: 400px;
        font-family: 'Bold';
        font-weight: 600;
        color: #e82648;
        line-height: 480px;
        position: relative;
        text-align: center;
        @media (max-width: 1700px) {
          font-size: 350px;
        }
        @media (max-width: 1600px) {
          font-size: 350px;
        }
        @media (max-width: 1400px) {
          font-size: 300px;
        }
        @media (max-width: 1200px) {
          font-size: 280px;
        }
        @media (max-width: 1000px) {
          font-size: 230px;
        }
        @media (max-width: 800px) {
          font-size: 170px;
        }
        @media (max-width: 600px) {
          font-size: 150px;
        }
        @media (max-width: 500px) {
          font-size: 100px;
        }
        @media (max-width: 400px) {
          font-size: 90px;
        }
        @media (max-height: 800px) and (min-width: 800px) {
          font-size: 250px;
        }
      }
    }

    .wing-icon {
      position: absolute;
      width: 575px;
      height: 575px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      margin-left: -287px;
      margin-top: -287px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      display: none;
      @media (max-width: 500px) {
        width: 300px;
        height: 300px;
        margin-left: -150px;
        margin-top: -150px;
      }
      svg {
        position: absolute;
        width: 760px;
        height: 760px;
        @media (min-width: 1200px) and (max-width: 1400px) {
          width: 670px;
          height: 670px;
        }
        @media (max-width: 1200px) {
          width: 630px;
          height: 630px;
        }
        @media (max-width: 1000px) {
          width: 600px;
          height: 600px;
        }
        @media (max-width: 800px) {
          width: 500px;
          height: 500px;
        }
        @media (max-width: 600px) {
          width: 400px;
          height: 400px;
        }
        @media (max-width: 500px) {
          width: 300px;
          height: 300px;
        }
        @media (max-height: 800px) and (min-width: 800px) {
          width: 650px;
          height: 650px;
        }
      }
    }
    .btn-box {
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      bottom: -210px;

      @media (max-width: 500px) {
        bottom: -70px;
      }
      @media (max-width: 500px) and (min-height: 800px) {
        bottom: -130px;
      }
      @media (max-width: 320px) {
        bottom: -20px;
      }
      @media (max-height: 800px) and (min-width: 800px) {
        bottom: -120px;
      }
      .priceWrapper {
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        .price {
          font-family: 'Medium';
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 60px;
          color: #ffffff;
        }
      }
      .describe {
        font-family: 'SemBold';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 40px;
      }
      .number-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        background: #1d1d1d;
        @media (max-width: 500px) {
          margin-bottom: 20px;
        }
        .btn-item-box {
          cursor: pointer;
          height: 56px;
          @media (max-width: 500px) {
            height: 35px;
          }
          svg {
            width: 56px;
            height: 56px;
            fill: #ffffff;
            &:hover {
              fill: #e82648;
            }
            @media (max-width: 500px) {
              width: 35px;
              height: 35px;
            }
          }
        }
        .value {
          font-size: 26px;
          font-family: 'Regular';
          font-weight: 400;
          color: #ffffff;
          margin: 0 35px;
          @media (max-width: 500px) {
            font-size: 18px;
            margin: 0 20px;
          }
        }
      }
      button {
        @media (max-width: 500px) {
          width: 250px;
          height: 45px;
          font-size: 14px;
        }
      }
    }
  }
`;
