import styled from 'styled-components';
import {LayoutProps, SpaceProps} from 'styled-system';

interface EmptyCompProps extends LayoutProps, SpaceProps {}

export const EmptyComp = styled.div<EmptyCompProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 120px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  line-height: 26px;
  font-family: 'Medium';
  opacity: 0.6;
  .image-wrapper {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 120px;
    margin: 0 auto 32px auto;
  }
`;
