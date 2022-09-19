import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 69px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .left {
    font-size: 14px;
    font-family: 'Medium';
    font-weight: 500;
    color: #ffffff;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    span {
      margin: 0 16px;
    }
    a {
      font-size: 14px;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      @media (max-width: 500px) {
        font-size: 12px;
      }
    }
  }
`;
