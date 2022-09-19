import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 80px;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.2s;
  @media (max-width: 1440px) {
    height: 80px;
    padding: 0 40px;
  }
  @media (max-width: 500px) {
    height: 60px;
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  font-size: 20px;
  font-family: 'SemiBold';
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: Uppercase;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 350px) {
    font-size: 15px;
  }
  svg {
    @media (max-width: 500px) {
      width: 80px;
    }
  }
`;

export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItemContainer = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 48px;
  font-size: 14px;
  font-family: 'Regular';
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  svg {
    margin-right: 4px;
  }
`;
