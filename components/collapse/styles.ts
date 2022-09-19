import styled, {css} from 'styled-components';

interface CollapseInterface {
  type: string;
}

export const CollapseContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${(props: CollapseInterface) =>
    props.type === 'CollapsePanel' &&
    css`
      padding: 20px 24px;
      border: 2px solid rgba(35, 38, 47, 0.1);
      border-radius: 16px;
    `}
  ${(props: CollapseInterface) =>
    props.type === 'FilterOption' &&
    css`
      margin-top: 14px;
    `}
    .option-item-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    h4 {
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 0.05em;
      color: #23262f;
    }
    .operator-box {
      font-size: 23px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .open {
        color: #4075f4;
      }
      .close {
        color: #b1b5c3;
      }
    }
  }
  .panel-item-box {
    width: 100%;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: #111111;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0 32px;
    @media (max-width: 500px) {
      padding: 0 16px;
    }
    h4 {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: 'SemiBold';
      font-weight: 600;
      color: #ffffff;
      @media (max-width: 500px) {
        font-size: 14px;
      }
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 12px;
        position: relative;
      }
    }
    .operator-box {
      font-size: 25px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .operator-icon-box {
        transition: all 0.5s;
        &.active {
          transform: rotate(90deg);
        }
      }
      .open {
        color: #4075f4;
      }
      .close {
        color: #b1b5c3;
      }
    }
  }
  .collapse-content-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 1px 0;
    ${(props: CollapseInterface) =>
      props.type === 'CollapsePanel' &&
      css`
        box-sizing: border-box;
        padding: 20px 0;
      `}
  }
  .ReactCollapse--collapse {
    transition: all 0.5s;
  }
`;
