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
    @font-face {
      font-family: 'Lobster';
      font-weight: 400;
      font-display: swap;
      src: local('Lobster'),
        url('https://media.blumenbote.online/media/fonts/Lobster/Lobster-Regular.woff2') format('woff2'),
        url('https://media.blumenbote.online/media/fonts/Lobster/Lobster-Regular.woff') format('woff'),
        url('https://media.blumenbote.online/media/fonts/Lobster/Lobster-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 300;
      font-display: swap;
      src: local('Poppins'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-300.woff2') format('woff2'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-300.woff')
          format('woff'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-300.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 400;
      font-display: swap;
      src: local('Poppins'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-400.woff2') format('woff2'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-400.woff')
          format('woff'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-400.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 500;
      font-display: swap;
      src: local('Poppins'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-500.woff2') format('woff2'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-500.woff')
          format('woff'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-500.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 600;
      font-display: swap;
      src: local('Poppins'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-600.woff2') format('woff2'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-600.woff')
          format('woff'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-600.ttf')
          format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 700;
      font-display: swap;
      src: local('Poppins'),
        url('https://media.blumenbote.online/media/fonts/poppins/poppins-700.woff2') format('woff2'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-700.woff') format('woff'),
         url('https://media.blumenbote.online/media/fonts/poppins/poppins-700.ttf') format('truetype');
    } 
`
