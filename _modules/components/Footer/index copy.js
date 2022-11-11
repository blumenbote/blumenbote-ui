"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterUI = exports.Footer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FooterUI = function FooterUI(props) {
  var businessesList = props.businessesList,
      getCities = props.getCities,
      citiesState = props.citiesState;
  console.log(businessesList);

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      businessCities = _useState2[0],
      setBusinessCities = _useState2[1];

  (0, _react.useEffect)(function () {
    console.log('citiesState :>> ', citiesState);
    console.log('getCities() :>> ', getCities());
  }, []);
  (0, _react.useEffect)(function () {
    var newCities = businessesList.businesses.filter(function (value, index, self) {
      return index === self.findIndex(function (t) {
        return t.city_id === value.city_id;
      });
    }).map(function (i) {
      var _i$city;

      return (_i$city = i.city) === null || _i$city === void 0 ? void 0 : _i$city.name;
    });
    setBusinessCities(newCities);
  }, [businessesList]);
  console.log('businessCities :>> ', businessCities);
  var Cities = businessCities.map(function (c, index) {
    console.log(c);
    if (!c) return;
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/search?region=".concat(c),
      key: index,
      "aria-label": "link2"
    }, "".concat(t('FLOWERS', 'Flowers'), " ").concat(c));
  });
  console.log('Cities :>> ', Cities);
  return /*#__PURE__*/_react.default.createElement(_styles.FooterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", {
    name: "title-1"
  }, t('REGIONS', 'Regions')), Cities.length !== 0 ? Cities : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 21
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 21
  }))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", {
    name: "title-2"
  }, "NEUE PARTNER"), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    "aria-label": "link4",
    href: "/store/reinweissblumen"
  }, "REINWEISS BLUMEN"), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    "aria-label": "link5",
    href: "/https://www.blumenbote.online/store/marsanoblumen"
  }, "MARSANO BLUMEN"), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    "aria-label": "link6",
    href: "/"
  }, "BLUMEN KOCH")), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", {
    name: "title-3"
  }, "BLUMENBOTE.ONLINE"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://blumenbote.online/pages/impressum"
  }, "IMPRESSUM")), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://blumenbote.online/pages/datenschutz"
  }, "DATENSCHUTZERKL\xC4RUNG")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: "https://www.facebook.com/blumenbote.online",
    target: "_blank",
    rel: "noreferrer",
    arialabel: "facebook"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/\nsvg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25\n245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52\n4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31\n482.38 504 379.78 504 256z"
  }))), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: "https://www.instagram.com/blumenbote.online/",
    target: "_blank",
    rel: "noreferrer",
    arialabel: "instagram"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/\nsvg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339\n319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7\n74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8\n26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1\n27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9\n0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7\n36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.234.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5\n11.7-99.5 9-132.1 9s-102.7\n2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7\n9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8\n34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  }))), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: "https://www.youtube.com/channel/UCp7xYZfARyxSDchcLsTcO8w",
    target: "_blank",
    rel: "noreferrer",
    arialabel: "youtube"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 576 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/\nsvg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64\n288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412\n42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5\n48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321\n42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305\n11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739\n81.205-142.739 81.201z"
  }))), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: "https://wa.me/+491623074191",
    target: "_blank",
    rel: "noreferrer",
    arialabel: "whatsapp"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/\nsvg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1\n10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6\n224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8\n18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0\n95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6\n184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6\n21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3\n1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.\n2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7\n94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1\n3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  }))))), /*#__PURE__*/_react.default.createElement(_styles.Copy, null, "COPYRIGHT 2022 BLUMENBOTE.ONLINE"));
};

exports.FooterUI = FooterUI;

var Footer = function Footer(props) {
  var FooterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FooterUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, FooterProps);
};

exports.Footer = Footer;