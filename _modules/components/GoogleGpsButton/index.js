"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleGpsButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _AgreementContext = require("../../contexts/AgreementContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GoogleGpsButtonUI = function GoogleGpsButtonUI(props) {
  var handleGPS = props.handleGPS,
      isGoogleButton = props.isGoogleButton,
      googleReady = props.googleReady,
      isLoading = props.isLoading,
      IconButton = props.IconButton,
      IconLoadingButton = props.IconLoadingButton;
  return /*#__PURE__*/_react.default.createElement(_styles.GpsButtonStyle, {
    className: props.className || '',
    type: "button",
    disabled: isGoogleButton && !googleReady || isLoading,
    onClick: handleGPS
  }, isLoading ? IconLoadingButton ? /*#__PURE__*/_react.default.createElement(IconLoadingButton, null) : '...' : IconButton ? /*#__PURE__*/_react.default.createElement(IconButton, null) : 'GPS');
};

var GoogleGpsButton = function GoogleGpsButton(props) {
  var _useAgreement = (0, _AgreementContext.useAgreement)(),
      _useAgreement2 = _slicedToArray(_useAgreement, 1),
      isAgreement = _useAgreement2[0];

  var gpsButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GoogleGpsButtonUI
  });

  return isAgreement && /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleGpsButton, gpsButtonProps);
};

exports.GoogleGpsButton = GoogleGpsButton;