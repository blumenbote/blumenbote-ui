"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAutocompleteInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

var _AgreementContext = require("../../contexts/AgreementContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GoogleAutocompleteInput = function GoogleAutocompleteInput(props) {
  var className = props.className,
      placeholder = props.placeholder;

  var _useAgreement = (0, _AgreementContext.useAgreement)(),
      _useAgreement2 = _slicedToArray(_useAgreement, 1),
      isAgreement = _useAgreement2[0];

  return isAgreement ? /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleAutocompleteInput, props) : /*#__PURE__*/_react.default.createElement("input", {
    className: className,
    placeholder: placeholder,
    disabled: "true"
  });
};

exports.GoogleAutocompleteInput = GoogleAutocompleteInput;
GoogleAutocompleteInput.propTypes = {
  onChangeAddress: _propTypes.default.func.isRequired,
  className: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired
};