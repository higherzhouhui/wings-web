import styled from 'styled-components';

export const TermsContainer = styled.div`
  width: 75%;
  padding: 100px 0 64px 0;
  color: #ffffff;
  box-sizing: border-box;
  margin: 0 auto;
  transition: all 0.2s;
  word-break: break-all;
  @media (max-width: 700px) {
    width: 90%;
    padding: 60px 0 34px 0;
  }
  .title {
    font-size: 48px;
    font-family: 'Bold';
    font-weight: 600;
    line-height: 72px;
    margin-top: 40px;
    margin-bottom: 8px;
    @media (max-width: 700px) {
      font-size: 32px;
      font-family: 'Bold';
      font-weight: 600;
      line-height: 48px;
      margin-top: 20px;
      margin-bottom: 6px;
    }
  }
  h1 {
    font-size: 40px;
    font-family: 'SemiBold';
    font-weight: 600;
    line-height: 60px;
    margin-top: 40px;
    margin-bottom: 8px;
    @media (max-width: 700px) {
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      margin-top: 10px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-size: 32px;
    font-family: 'SemiBold';
    font-weight: 600;
    line-height: 48px;
    margin-top: 16px;
    margin-bottom: 8px;
    @media (max-width: 700px) {
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      margin-top: 8px;
      margin-bottom: 6px;
    }
  }
  h3 {
    font-size: 24px;
    font-family: 'SemiBold';
    font-weight: 600;
    line-height: 36px;
    margin-top: 16px;
    margin-bottom: 8px;
    @media (max-width: 700px) {
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      margin-top: 8px;
      margin-bottom: 4px;
    }
  }
  li {
    list-style: disc;
    font-size: 16px;
    font-family: 'Medium';
    font-weight: 500;
    line-height: 24px;
    @media (max-width: 700px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
  p {
    font-size: 16px;
    font-family: 'Regular';
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 700px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
  .ul-step1 {
    padding-left: 30px;
    li {
      list-style: decimal;
    }
    @media (max-width: 700px) {
      padding-left: 18px;
    }
  }
  .ul-step2 {
    padding-left: 30px;
    li {
      list-style: decimal-leading-zero;
      font-family: 'Regular';
      font-weight: normal;
    }
    .li-step1 {
      font-size: 20px;
      font-family: 'Medium';
      line-height: 30px;
      margin-top: 16px;
      margin-bottom: 8px;
      margin-left: 30px;
      @media (max-width: 700px) {
        font-size: 14px;
        line-height: 21px;
        margin-top: 10px;
        margin-bottom: 6px;
        margin-left: 18px;
      }
    }
    @media (max-width: 700px) {
      padding-left: 18px;
    }
  }
  .ul-step3 {
    padding-left: 30px;
    li {
      list-style: upper-roman;
    }
    @media (max-width: 700px) {
      padding-left: 18px;
    }
  }
  .ul-step4 {
    padding-left: 30px;
    li {
      list-style: lower-roman;
    }
    @media (max-width: 700px) {
      padding-left: 18px;
    }
  }
  .ul-step5 {
    padding-left: 30px;
    li {
      list-style: decimal;
    }
    @media (max-width: 700px) {
      padding-left: 18px;
    }
  }
`;
