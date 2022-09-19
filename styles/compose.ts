import styled from 'styled-components';

export const ComponseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 140px 28px 0 28px;
  box-sizing: border-box;
  main {
    width: 100%;
    display: flex;
    position: relative;
    .title {
      text-align: center;
      height: 36px;
      font-size: 1.3rem;
      font-family: 'Regular';
      font-weight: 400;
      line-height: 36px;
      color: #ffffff;
      position: relative;
    }
    .active {
      color: #ffffff;
    }
    .disable {
      color: rgba(255, 255, 255, 0.3);
    }
    aside {
      flex: 1;
    }
    section {
      flex: 2;
      text-align: center;
      .composeWrapper {
        width: 100%;
        min-height: calc(100vh - 140px - 36px);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }
      .imageWrapper {
        position: relative;
        width: 55%;
        padding-bottom: 55%;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 3.1rem;
      }
      .buttonWrapper {
        width: 45%;
      }
    }
    .wings {
      margin-top: 40px;
      max-height: calc(100vh - 140px - 36px - 40px);
      overflow: auto;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
    }
    .wings::-webkit-scrollbar {
      width: 0 !important;
    }
    .comOrdecom {
      .marginR {
        margin-right: 38px;
      }
      span {
        cursor: pointer;
      }
      .underline {
        position: absolute;
        width: 3rem;
        height: 4px;
        background: #e82648;
        border-radius: 42px;
        opacity: 1;
        top: 2.75rem;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    .collection {
      position: absolute;
      top: 0;
      left: 26%;
      border-radius: 45px;
      opacity: 1;
      border: 2px solid rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 4px 6px;
      cursor: pointer;
      .text {
        font-size: 0.9rem;
        font-family: 'Medium';
        font-weight: 500;
        color: #ffffff;
        line-height: 24px;
      }
    }
  }
  .imageBorder {
    border: 2px solid transparent;
  }
  .choose {
    border: 2px solid #ff2b51;
    box-shadow: 0px 8px 24px 1px rgba(230, 54, 67, 0.4);
  }
  .decomposeWrapper {
    position: absolute;
    width: 80%;
    box-sizing: border-box;
    top: 48px;
    left: 10%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  .sk {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const CollectionContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  .close {
    float: right;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
  h1 {
    height: 42px;
    font-size: 1.5rem;
    font-family: 'Bold';
    font-weight: bold;
    color: #ffffff;
    line-height: 42px;
    margin: 64px 0 24px 0;
  }
  .radio {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .text {
      height: 30px;
      font-size: 1.1rem;
      font-family: 'Regular';
      font-weight: 400;
      color: #ffffff;
      line-height: 30px;
      opacity: 0.5;
    }
    .circle {
      width: 24px;
      height: 24px;
      opacity: 1;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
    }
    svg {
      cursor: pointer;
    }
  }
`;

export const DeCompProduct = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  .image {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }
  .sk {
    padding-bottom: 100%;
  }
  .productName {
    margin: 1.1rem 0;
    text-align: center;
    font-size: 1rem;
    font-family: 'Regular';
    font-weight: 400;
    color: #ffffff;
    line-height: 1.6rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    padding: 0 10%;
    box-sizing: border-box;
  }
  &:hover .mask {
    opacity: 1;
    animation: all 0.5s forwards;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(17, 17, 17, 0.5);
    border-radius: 8px;
    opacity: 1;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    cursor: pointer;
  }
`;
