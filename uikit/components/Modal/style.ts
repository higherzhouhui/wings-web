import styled from 'styled-components';
import {
  borderRadius,
  border,
  backgroundImage,
  color,
  space,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
} from 'styled-system';

import {ModalProps, ModalContainerProps} from './types';

import {handleToPx} from '@/utils';

export const ModalContainer = styled.div<ModalContainerProps>`
  opacity: ${({visible}) => (visible ? '1' : '0')};
  width: 100%;
  height: 100%;
  z-index: ${({visible}) => (visible ? '9999' : '-1000')};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .show {
    animation: show 0.5s forwards;
  }
  @keyframes show {
    form {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .hide {
    animation: hide 0.5s forwards;
  }
  @keyframes hide {
    form {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
export const ModalMaskContainer = styled.div<ModalContainerProps>`
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: ${({backdrop}) => (backdrop ? backdrop : '')};
`;
export const ModalContentContainer = styled.div<ModalProps>`
  opacity: 0;
  width: ${({width}) => (width ? handleToPx(width) : '')};
  height: ${({height}) => (height ? handleToPx(height) : '')};
  background: ${(props) => (props.background ? props.background : '')};
  border-radius: 16px;
  z-index: 1000;
  ${borderRadius};
  ${border};
  ${backgroundImage};
  ${color};
  ${space};
  ${maxWidth};
  ${maxHeight};
  ${minHeight}
  ${minWidth}
`;
export const ModalLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(17, 17, 17);
  .text {
    width: 100%;
    text-align: center;
    font-family: 'Bold';
    font-size: 1.6rem;
    margin-top: 2.4rem;
    color: #fff;
  }
  .loading {
    margin-top: -70px;
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
