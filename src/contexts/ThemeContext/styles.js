import { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @media (min-width: 578px) {
      /* Mozilla scrollbar */
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }
      /* Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 6px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #CCCCCC;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #AFAFAF;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.3);
      }
    }
    html {
      height: 100%;
    }
    body {
      height: 100%;
      font-family: '${(props) =>
        props.theme.fonts.primary?.name || 'Helvetica'}', sans-serif;
      margin: 0;
      background-color: ${(props) => props.theme.colors.backgroundPage};
      color: ${(props) => props.getThemeColor()};
      direction: ltr;
      ${(props) =>
        props.theme.rtl &&
        css`
          direction: rtl;
        `}
      -webkit-overflow-scrolling: auto;

    }
    input, textarea, button {
      font-family: inherit;
    }
    h1,p,span {
      ${(props) =>
        props.isDarkTextColor &&
        css`
          color: ${(props) => props.theme.colors.darkTextColor};
        `}
    }
    .popup-backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2000;
    }
    .popup-component {
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #app {
      display: flex;
      flex-direction: column;
      height:100%;
    }
    .main {
      flex : 1 0 auto;
    }
    /* @font-face {
      font-family: 'Lobster';
      font-weight: 400;
      font-display: swap;
      src: local('Lobster'),
        url('/fonts/Lobster/Lobster-Regular.woff2') format('woff2'),
        url('/fonts/Lobster/Lobster-Regular.woff') format('woff'),
        url('/fonts/Lobster/Lobster-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 300;
      font-display: swap;
      src: local('Poppins'),
        url('/fonts/poppins/poppins-300.woff2') format('woff2'),
         url('/fonts/poppins/poppins-300.woff')
          format('woff'),
         url('/fonts/poppins/poppins-300.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 400;
      font-display: swap;
      src: local('Poppins'),
        url('/fonts/poppins/poppins-400.woff2') format('woff2'),
        url('/fonts/poppins/poppins-400.woff')
          format('woff'),
         url('/fonts/poppins/poppins-400.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 500;
      font-display: swap;
      src: local('Poppins'),
        url('/fonts/poppins/poppins-500.woff2') format('woff2'),
        url('/fonts/poppins/poppins-500.woff')
          format('woff'),
         url('/fonts/poppins/poppins-500.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 600;
      font-display: swap;
      src: local('Poppins'),
        url('/fonts/poppins/poppins-600.woff2') format('woff2'),
         url('/fonts/poppins/poppins-600.woff')
          format('woff'),
         url('/fonts/poppins/poppins-600.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 700;
      font-display: swap;
      src: local('Poppins'),
        url('/fonts/poppins/poppins-700.woff2') format('woff2'),
         url('/fonts/poppins/poppins-700.woff')
          format('woff'),
         url('/fonts/poppins/poppins-700.ttf')
          format('truetype');
    } */
/* cyrillic-ext */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zo-mM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoamM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zo2mM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoymM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoKmM4MwWJU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z11lFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src: local('Poppins'),url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1JlFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src: local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-display: swap;
	src: local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:local('Poppins'), url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`
