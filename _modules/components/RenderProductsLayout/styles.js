"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndBusinessCategories = exports.WrapperSearch = exports.WrappLayout = exports.WrapContent = exports.Title = exports.SectionTitle = exports.ScheduleSection = exports.ScheduleContainer = exports.ScheduleBlock = exports.OffersSection = exports.OfferTextP = exports.OfferText = exports.OfferTable = exports.Map = exports.FlexTabs = exports.EmptyCart = exports.EmptyBtnWrapper = exports.Description = exports.DeliveryInfo = exports.DeliveryContent = exports.BusinessMediaContent = exports.BusinessContent = exports.BusinessCategoryProductWrapper = exports.BusinessCategoriesContainer = exports.BusinessCartContent = exports.BusinessCartContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../SearchBar/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.Title = Title;

var WrappLayout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n\n      .bp-list,\n      .cart {\n        width: 100%;\n      }\n\n      @media (min-width: 870px) {\n        flex-direction: row;\n        .bp-list {\n          width: 55%;\n        }\n        .cart {\n          width: calc(45% - 20px);\n          margin-left: 20px;\n        }\n      }\n\n      @media (min-width: 1024px) {\n        .bp-list {\n          width: 60%;\n        }\n        .cart {\n          width: calc(40% - 20px);\n        }\n      }\n\n      @media (min-width: 1200px) {\n        .bp-list {\n          width: 70%;\n        }\n        .cart {\n          width: calc(30% - 20px);\n        }\n      }\n    "])));
});

exports.WrappLayout = WrappLayout;

var WrapperSearch = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  /* margin: 15px 0px 0px; */\n  display: flex;\n  flex: 3 0 50%;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n  span {\n    transform: translate(-70%, 0%);\n  }\n\n  ", " {\n    margin-right: 8px;\n    width: 200px;\n    &:focus {\n      width: 50%;\n    }\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    @media (max-width: 960px) {\n      width: 100%;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, _styles.BusinessSearch);

exports.WrapperSearch = WrapperSearch;

var WrapperSearchAndBusinessCategories = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #d9d9d9;\n\n  @media (max-width: 960px) {\n    align-items: unset;\n    flex-direction: column-reverse;\n  }\n"])));

exports.WrapperSearchAndBusinessCategories = WrapperSearchAndBusinessCategories;

var WrapContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.WrapContent = WrapContent;

var BusinessContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 701px) {\n    flex-direction: row;\n  }\n"])));

exports.BusinessContent = BusinessContent;

var BusinessCategoryProductWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .category-lists::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .category-lists {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  @media (min-width: 1024px) {\n    width: 70%;\n  }\n"])));

exports.BusinessCategoryProductWrapper = BusinessCategoryProductWrapper;

var BusinessCategoriesContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 0;\n  width: 100%;\n\n  @media (min-width: 701px) {\n    width: 30%;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-right: 25px;\n        margin-left: 0;\n      "])));
});

exports.BusinessCategoriesContainer = BusinessCategoriesContainer;
var BusinessCartContainer = (0, _styledComponents.default)(BusinessCategoriesContainer)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (min-width: 500px) {\n    display: block;\n  }\n"])));
exports.BusinessCartContainer = BusinessCartContainer;

var BusinessCartContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 30px;\n  position: relative;\n\n  .product.accordion {\n    margin: 0;\n  }\n\n  .accordion.active {\n    padding: 10px 0;\n  }\n\n  ", "\n\n  @media (min-width: 1200px) {\n    position: sticky;\n    top: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 35px 30px;\n  }\n"])), function (_ref2) {
  var isModal = _ref2.isModal;
  return !isModal && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      border: 1px solid #e9ecef;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 7.6px;\n    "])));
});

exports.BusinessCartContent = BusinessCartContent;

var EmptyCart = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #b1bccc;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #b1bccc;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));

exports.EmptyCart = EmptyCart;

var EmptyBtnWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #f8f9fa;\n    border: 1px solid #f8f9fa;\n    border-radius: 7.6px;\n    height: 44px;\n    font-size: 14px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.EmptyBtnWrapper = EmptyBtnWrapper;

var BusinessMediaContent = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(100% - 12px);\n      cursor: pointer;\n\n      @media (min-width: 481px) {\n        width: calc(50% - 20px);\n      }\n\n      @media (min-width: 681px) {\n        width: calc(33% - 20px);\n      }\n\n      @media (min-width: 993px) {\n        width: calc(25% - 20px);\n      }\n    }\n  }\n"])));

exports.BusinessMediaContent = BusinessMediaContent;

var DeliveryInfo = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: 10px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n\n  div {\n    width: 100%;\n  }\n\n  @media (min-width: 769px) {\n    flex-wrap: nowrap;\n    div {\n      width: 50%;\n    }\n  }\n"])));

exports.DeliveryInfo = DeliveryInfo;

var DeliveryContent = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  h5:first-child {\n    margin-top: 0;\n  }\n"])));

exports.DeliveryContent = DeliveryContent;

var Description = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n"])));

exports.Description = Description;

var FlexTabs = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  height: 10%;\n  padding-top: 30px;\n  overflow-x: auto;\n  white-space: nowrap;\n"])));

exports.FlexTabs = FlexTabs;

var Map = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));

exports.Map = Map;

var OffersSection = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0 20px;\n"])));

exports.OffersSection = OffersSection;

var OfferText = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));

exports.OfferText = OfferText;

var OfferTextP = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n"])));

exports.OfferTextP = OfferTextP;

var ScheduleBlock = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 0px 15px;\n  border-right: 1px solid #ccc;\n  width: 10%;\n  min-width: 80px;\n  ", "\n  h4 {\n    margin: 0px 0px 3px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n  }\n\n  &:last-child {\n    border: 0;\n  }\n  @media (min-width: 768px) {\n    min-width: initial;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      border-left: 1px solid #ccc;\n      border-right: none;\n    "])));
}, function (props) {
  var _props$theme5, _props$theme5$colors;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : (_props$theme5$colors = _props$theme5.colors) === null || _props$theme5$colors === void 0 ? void 0 : _props$theme5$colors.primary;
});

exports.ScheduleBlock = ScheduleBlock;

var SectionTitle = _styledComponents.default.h3(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  font-weight: bold;\n"])));

exports.SectionTitle = SectionTitle;

var ScheduleSection = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 25px;\n"])));

exports.ScheduleSection = ScheduleSection;

var ScheduleContainer = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  > div {\n    width: 100%;\n  }\n"])));

exports.ScheduleContainer = ScheduleContainer;
var OfferTable = _styledComponents.default.div;
exports.OfferTable = OfferTable;