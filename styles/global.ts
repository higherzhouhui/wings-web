import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    font-display: auto;
    @font-face {
        font-family: 'Bold';
        src: url('/static/font/Poppins-Bold.otf');
    }
    @font-face {
        font-family: 'SemiBold';
        src: url('/static/font/Poppins-SemiBold.otf');
    }
    @font-face {
        font-family: 'Medium';
        src: url('/static/font/Poppins-Medium.otf');
    }

    @font-face {
        font-family: 'Regular';
        src: url('/static/font/Poppins-Regular.otf');
    }

    @font-face {
        font-family: 'Thin';
        src: url('/static/font/Poppins-Thin.otf');
    }
    @font-face {
        font-family: 'Gloria Hallelujah';
        src: url('/static/font/GloriaHallelujah.ttf');
    }
    body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, input, p, form, a, textarea{
        margin: 0;
        padding: 0;
        font-size: 12px; 
        font-family: 'Regular';
    }
    html, body{
        width: 100%;
        height: 100%;
        background-color: rgba(17, 17, 17, 1);
    }
    @media (min-width: 300px) and (max-width: 1000px) {
        html {
          font-size: 10px;
        }
    }
    @media (min-width: 1000px) and (max-width: 1120px) {
        html {
          font-size: 12px;
        }
    }
    @media (min-width: 1120px) and (max-width: 1440px) {
        html {
          font-size: 14px;
        }
    }
    @media (min-width: 1440px) and (max-width: 1920px) {
        html {
          font-size: 18px;
        }
    }
    @media (min-width: 1920px) and (max-width: 2560px) {
        html {
          font-size: 22px;
        }
    }
    ol, ul, li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        display: block;
    }
    
    img{
        border: none;
        display: block;
    }
    
    /* 给需要清除浮动的标签的class加上clearfloat类 */
    .clearfloat {  
        zoom: 1;        /* 适配IE */
    }
    .clearfloat:after {
        display: block;
        clear: both;
        content: '';
        visibility: hidden;
        height: 0;  
    }

    .show {
        display: block;
    }

    .hide {
        display: none;
    }

    .fadeIn {
        animation: appear 0.5s forwards;
    }
    .fadeOut {
        animation: disappear 0.5s forwards;
    }
    @keyframes appear {
        from {
            height: 0;
        }
        to {
            height: 38px;
        }
    }
    @keyframes disappear {
        from {
            height: 38px;
            opacity: 1;
        }
        to {
            height: 0;
            opacity: 0;
        }
    }
    /* 隐藏google人机验证 */
    .grecaptcha-badge{
        display: none;
    }
    .themeColor {
      background: #F5F8FB;
    }
    #nprogress .bar {
      background: green !important; //自定义颜色
      height: 5px;
    }
`;
