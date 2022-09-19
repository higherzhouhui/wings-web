import styled from 'styled-components';

export const WalletContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 40px;
  background-color: rgba(17, 17, 17, 1);
  position: relative;
  h3 {
    width: 100%;
    font-size: 18px;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 26px;
    text-align: center;
  }
  .loading {
    position: absolute;
    width: 100%;
    height: 46px;
    left: 0;
    top: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wallet-item-box {
    width: 100%;
    height: 46px;
    border-radius: 2px;
    margin-top: 16px;
    background: #1d1d1d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    cursor: pointer;
    &.active {
      margin-top: 24px;
      &:hover {
        background: linear-gradient(
          90deg,
          #ff2b51 0%,
          rgba(255, 43, 81, 0) 100%
        );
      }
    }
    .left {
      font-size: 14px;
      font-family: 'Medium';
      font-weight: 500;
      color: #ffffff;
    }
    .right {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        font-family: 'Medium';
        font-weight: 500;
        color: #c2c2c2;
        margin-right: 8px;
      }
    }
  }
`;
