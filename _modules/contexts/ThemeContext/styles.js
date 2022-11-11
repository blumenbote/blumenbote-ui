"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    @media (min-width: 578px) {\n      /* Mozilla scrollbar */\n      * {\n        scrollbar-color: #CCC !important;\n        scrollbar-width: thin !important;\n      }\n      /* Scrollbar for browser based on webkit */\n      ::-webkit-scrollbar {\n        width: 6px;\n        height: 0px;\n      }\n      ::-webkit-scrollbar-thumb {\n        background: #CCCCCC;\n      }\n      ::-webkit-scrollbar-thumb:hover {\n        background: #AFAFAF;\n      }\n      ::-webkit-scrollbar-thumb:active {\n        background: #6b6b6b;\n      }\n      ::-webkit-scrollbar-track {\n        background: rgba(204, 204, 204, 0.3);\n      }\n    }\n    html {\n      height: 100%;\n    }\n    body {\n      height: 100%;\n      font-family: '", "', sans-serif;\n      margin: 0;\n      background-color: ", ";\n      color: ", ";\n      direction: ltr;\n      ", "\n      -webkit-overflow-scrolling: auto;\n\n    }\n    input, textarea, button {\n      font-family: inherit;\n    }\n    h1,p,span {\n      ", "\n    }\n    .popup-backdrop {\n      background-color: rgba(0, 0, 0, 0.4);\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 2000;\n    }\n    .popup-component {\n      background-color: rgba(0, 0, 0, 0.3);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #app {\n      display: flex;\n      flex-direction: column;\n      height:100%;\n    }\n    .main {\n      flex : 1 0 auto;\n    }\n    ", "\n"])), function (props) {
  var _props$theme$fonts$pr;

  return ((_props$theme$fonts$pr = props.theme.fonts.primary) === null || _props$theme$fonts$pr === void 0 ? void 0 : _props$theme$fonts$pr.name) || 'Helvetica';
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.getThemeColor();
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          direction: rtl;\n        "])));
}, function (props) {
  return props.isDarkTextColor && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          color: ", ";\n        "])), function (props) {
    return props.theme.colors.darkTextColor;
  });
}, ''
/* @font-face {
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
url('https://media.blumenbote.online/media/fonts/poppins/poppins-700.woff')
 format('woff'),
url('https://media.blumenbote.online/media/fonts/poppins/poppins-700.ttf')
 format('truetype');
}  */
);
exports.GlobalStyle = GlobalStyle;