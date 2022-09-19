import styled from 'styled-components';

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
  border-radius: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-family: 'SemiBold';
    font-weight: 600;
    color: #ffffff;
    line-height: 2rem;
  }
  .svgWrapper {
    position: relative;
    width: 7rem;
    height: 7rem;
    margin: 1.3rem 0;
  }
  .description {
    width: 50%;
    font-size: 0.9rem;
    font-family: 'Regular';
    font-weight: 400;
    color: #ffffff;
    line-height: 1.5rem;
    opacity: 0.6;
    text-align: center;
    margin-bottom: 1.8rem;
  }
`;
