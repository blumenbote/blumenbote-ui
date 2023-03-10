"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAndProductList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);

var BusinessAndProductList = function BusinessAndProductList(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _businessState$busine17, _orderState$options26, _orderState$options27, _orderState$options28, _orderState$options29;

  var isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      city = props.city,
      slug = props.slug,
      categoryId = props.categoryId,
      productId = props.productId,
      isInitialRender = props.isInitialRender,
      ordering = props.ordering,
      businessProps = props.businessProps,
      menusProps = props.menusProps,
      isGetMenus = props.isGetMenus,
      UIComponent = props.UIComponent,
      location = props.location;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      removeProduct = _useOrder2[1].removeProduct;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var _useState3 = (0, _react.useState)({
    id: null,
    name: t('ALL', 'All')
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      categorySelected = _useState4[0],
      setCategorySelected = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      sortByValue = _useState8[0],
      setSortByValue = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      filterByMenus = _useState10[0],
      setFilterByMenus = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      professionalSelected = _useState12[0],
      setProfessionalSelected = _useState12[1];

  var _useState13 = (0, _react.useState)({
    business: {},
    menus: null,
    loading: !props.avoidBusinessLoading,
    error: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      businessState = _useState14[0],
      setBusinessState = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      categoriesState = _useState16[0],
      setCategoriesState = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      orderOptions = _useState18[0],
      setOrderOptions = _useState18[1];

  var _useState19 = (0, _react.useState)({
    product: null,
    loading: false,
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      productModal = _useState20[0],
      setProductModal = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      featuredProducts = _useState22[0],
      setFeaturedProducts = _useState22[1];

  var _useState23 = (0, _react.useState)({
    values: []
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      openCategories = _useState24[0],
      setOpenCategories = _useState24[1];

  var _useState25 = (0, _react.useState)({
    min: null,
    max: null
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      priceFilterValues = _useState26[0],
      setPriceFilterValues = _useState26[1];

  var requestsState = {};
  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };

  var _useState27 = (0, _react.useState)(categoryStateDefault),
      _useState28 = _slicedToArray(_useState27, 2),
      categoryState = _useState28[0],
      setCategoryState = _useState28[1];

  var _useState29 = (0, _react.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      errors = _useState30[0],
      setErrors = _useState30[1];

  var _useState31 = (0, _react.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      errorQuantityProducts = _useState32[0],
      setErrorQuantityProducts = _useState32[1];

  var categoryKey = searchValue ? 'search' : categorySelected.id === 'featured' ? 'featured' : categorySelected.id ? "categoryId:".concat(categorySelected.id) : 'all';
  var isUseParentCategory = (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1';
  /**
   * Change category selected
   * @param {Object} category Category object
   */

  var handleChangeCategory = function handleChangeCategory(category) {
    var _category$subcategori;

    if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
      if (!(category !== null && category !== void 0 && category.parent_category_id) && !openCategories.values.includes(category.id)) {
        openCategories.values = [];
      }

      if (openCategories.values.includes(category.id)) {
        openCategories.values = openCategories.values.filter(function (categoryId) {
          return categoryId !== category.id;
        });
      } else {
        openCategories.values.push(category.id);
      }

      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: openCategories.values
      }));
    }

    if ((category === null || category === void 0 ? void 0 : category.id) === null) {
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: []
      }));
    }

    setCategorySelected(category);
  };

  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };

  var handleChangeSortBy = function handleChangeSortBy(val) {
    setSortByValue(val);
  };

  var handleChangeFilterByMenus = function handleChangeFilterByMenus(val) {
    setFilterByMenus(val);
  };

  var handleChangePriceFilterValues = function handleChangePriceFilterValues(name, value) {
    setPriceFilterValues(_objectSpread(_objectSpread({}, priceFilterValues), {}, _defineProperty({}, name, value)));
  };

  var isMatchSearch = function isMatchSearch(name, description, price) {
    if (!searchValue && !(priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min) && !(priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max)) return true;
    return (searchValue ? name && name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min ? parseFloat(price) >= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min) : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max ? parseFloat(price) <= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max) : true) || (searchValue ? description && description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min ? parseFloat(price) >= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min) : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max ? parseFloat(price) <= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max) : true);
  };

  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };

  var isFeaturedSearch = function isFeaturedSearch(product) {
    if (product.featured) {
      if (!searchValue) return true;
      return product.name && product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName || product.description && product.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription;
    }

    return false;
  };

  var sortProductsArray = function sortProductsArray(option, array) {
    if (option === 'rank' || option === null) {
      return array.sort(function (a, b) {
        return a.rank - b.rank;
      });
    }

    if (option === 'rank_desc') {
      return array.sort(function (a, b) {
        return b.rank - a.rank;
      });
    }

    if (option === 'a-z') {
      return array.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    }

    return array;
  };

  var subCategoriesList = [];

  var iterateCategories = function iterateCategories(categories) {
    return (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && (categories === null || categories === void 0 ? void 0 : categories.forEach(function (category) {
      subCategoriesList.push(category);
      iterateCategories(category.subcategories);
    }));
  };
  /**
   * Method to change professional
   * @param {object} professional a professional info
   */


  var handleChangeProfessionalSelected = function handleChangeProfessionalSelected(professional) {
    setProfessionalSelected(professional);
  };

  var handleUpdateProducts = function handleUpdateProducts(productId, changes) {
    var _categoryState, _categoriesState$feat, _businessState$busine, _businessState$busine2;

    var updatedProducts = (_categoryState = categoryState) === null || _categoryState === void 0 ? void 0 : _categoryState.products.map(function (product) {
      if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
        return _objectSpread(_objectSpread({}, product), changes);
      }

      return product;
    });
    setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
      products: updatedProducts
    }));

    if (categoriesState !== null && categoriesState !== void 0 && (_categoriesState$feat = categoriesState.featured) !== null && _categoriesState$feat !== void 0 && _categoriesState$feat.products) {
      var _categoriesState$feat2;

      var updatedFeaturedProducts = categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat2 = categoriesState.featured) === null || _categoriesState$feat2 === void 0 ? void 0 : _categoriesState$feat2.products.map(function (product) {
        if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
          return _objectSpread(_objectSpread({}, product), changes);
        }

        return product;
      });
      setCategoriesState(_objectSpread(_objectSpread({}, categoriesState), {}, {
        featured: _objectSpread(_objectSpread({}, categoriesState.featured), {}, {
          products: updatedFeaturedProducts
        })
      }));
    }

    var updatedCategories = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : (_businessState$busine2 = _businessState$busine.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.map(function (_category) {
      var updatedProducts = _category === null || _category === void 0 ? void 0 : _category.products.map(function (_product) {
        if ((_product === null || _product === void 0 ? void 0 : _product.id) === productId) {
          return _objectSpread(_objectSpread({}, _product), changes);
        }

        return _product;
      });
      return _objectSpread(_objectSpread({}, _category), {}, {
        products: updatedProducts
      });
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
        categories: updatedCategories
      })
    }));
  };

  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _categoryState$produc;

      var i, _ref2, _businessState$busine3, _businessState$busine4, _businessState$busine5, _category$products, category, isFeatured, categoryState, _businessState$busine6, _ref3, _businessState$busine7, _businessState$busine8, _categories$find, _subCategoriesList$fi, _businessState$busine9, _businessState$busine10, _businessState$busine11, categoriesList, categories, parentCategory, categoryFinded, productsFiltered, _businessState$busine12, _businessState$busine13, _productsFiltered, _businessState$busine14, _businessState$busine15, _productsFiltered2;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!((_ref2 = i < (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : (_businessState$busine4 = _businessState$busine3.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.length)) !== null && _ref2 !== void 0 ? _ref2 : 0)) {
                _context.next = 10;
                break;
              }

              category = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.categories[i];
              isFeatured = category === null || category === void 0 ? void 0 : (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.some(function (product) {
                return product.featured;
              });

              if (!isFeatured) {
                _context.next = 7;
                break;
              }

              setFeaturedProducts(isFeatured);
              return _context.abrupt("break", 10);

            case 7:
              i++;
              _context.next = 1;
              break;

            case 10:
              categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
                loading: false
              });

              if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
                iterateCategories(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.categories);
                categoriesList = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.categories.map(function (category) {
                  return category.children;
                })));
                categories = isUseParentCategory ? categoriesList : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.categories;
                parentCategory = (_categories$find = categories === null || categories === void 0 ? void 0 : categories.find(function (category) {
                  return category.category_id === categorySelected.id;
                })) !== null && _categories$find !== void 0 ? _categories$find : {};
                categoryFinded = (_subCategoriesList$fi = subCategoriesList.find(function (subCat) {
                  return subCat.id === parentCategory.category_id;
                })) !== null && _subCategoriesList$fi !== void 0 ? _subCategoriesList$fi : {};
                productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : (_businessState$busine10 = _businessState$busine9.categories) === null || _businessState$busine10 === void 0 ? void 0 : (_businessState$busine11 = _businessState$busine10.find(function (category) {
                  return category.id === (isUseParentCategory ? parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.parent_category_id : categorySelected.id);
                })) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.products.filter(function (product) {
                  var _categoryFinded$child;

                  return isUseParentCategory ? (categoryFinded === null || categoryFinded === void 0 ? void 0 : (_categoryFinded$child = categoryFinded.children) === null || _categoryFinded$child === void 0 ? void 0 : _categoryFinded$child.some(function (cat) {
                    return cat.category_id === (product === null || product === void 0 ? void 0 : product.category_id);
                  })) && isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price) : isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price);
                });
                categoryState.products = productsFiltered || [];
              } else if (categorySelected.id === 'featured') {
                _productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : (_businessState$busine13 = _businessState$busine12.categories) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return isFeaturedSearch(product);
                });
                categoryState.products = _productsFiltered || [];
              } else {
                _productsFiltered2 = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : (_businessState$busine15 = _businessState$busine14.categories) === null || _businessState$busine15 === void 0 ? void 0 : _businessState$busine15.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price);
                });
                categoryState.products = _productsFiltered2 || [];
              }

              categoryState.products = sortProductsArray(sortByValue, categoryState.products);
              setErrorQuantityProducts(!((_categoryState$produc = categoryState.products) !== null && _categoryState$produc !== void 0 && _categoryState$produc.length));
              setCategoryState(_objectSpread({}, categoryState));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  var getLazyProducts = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref4) {
      var _orderState$options$t, _orderState$options, _orderState$options2, _orderState$options3, _where, _where$conditions, _where2, _where2$conditions;

      var page, _ref4$pageSize, pageSize, parameters, _orderState$options4, moment, where, searchConditions, source, promises, functionFetch, productEndpoint, _where3, _where3$conditions;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = _ref4.page, _ref4$pageSize = _ref4.pageSize, pageSize = _ref4$pageSize === void 0 ? categoryStateDefault.pagination.pageSize : _ref4$pageSize;
              parameters = {
                type: (_orderState$options$t = (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) !== null && _orderState$options$t !== void 0 ? _orderState$options$t : 1,
                page: page,
                page_size: pageSize
              };

              if ((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.moment && isValidMoment((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              if (sortByValue) {
                parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue;
              }

              where = null;
              searchConditions = [];

              if (searchValue) {
                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  searchConditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
              }

              if (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min) {
                searchConditions.push({
                  attribute: 'price',
                  value: {
                    condition: '>=',
                    value: encodeURI(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min)
                  }
                });
              }

              if (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max) {
                searchConditions.push({
                  attribute: 'price',
                  value: {
                    condition: '<=',
                    value: encodeURI(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max)
                  }
                });
              }

              where = {
                conditions: searchConditions,
                conector: 'OR'
              };

              if (categorySelected.id === 'featured') {
                parameters.params = 'features';
              }

              if (categorySelected.id === 'featured' && searchValue) {
                parameters.params = 'features';
                where = {
                  conditions: [{
                    conditions: searchConditions,
                    conector: 'OR'
                  }],
                  conector: 'AND'
                };
              }

              source = {};
              requestsState.products = source;
              promises = [];
              functionFetch = categorySelected.id && categorySelected.id !== 'featured' ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : !isUseParentCategory ? ordering.businesses(businessState.business.id).products() : !(((_where = where) === null || _where === void 0 ? void 0 : (_where$conditions = _where.conditions) === null || _where$conditions === void 0 ? void 0 : _where$conditions.length) > 0) ? ordering.businesses(businessState.business.id).categories() : ordering.businesses(businessState.business.id).products();
              productEndpoint = ((_where2 = where) === null || _where2 === void 0 ? void 0 : (_where2$conditions = _where2.conditions) === null || _where2$conditions === void 0 ? void 0 : _where2$conditions.length) > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
              _context2.t0 = promises;
              _context2.next = 20;
              return productEndpoint.get({
                cancelToken: source
              });

            case 20:
              _context2.t1 = _context2.sent;

              _context2.t0.push.call(_context2.t0, _context2.t1);

              if (!(isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured'))) {
                _context2.next = 30;
                break;
              }

              parameters.params = 'features';
              productEndpoint = ((_where3 = where) === null || _where3 === void 0 ? void 0 : (_where3$conditions = _where3.conditions) === null || _where3$conditions === void 0 ? void 0 : _where3$conditions.length) > 0 ? ordering.businesses(businessState.business.id).products().parameters(parameters).where(where) : ordering.businesses(businessState.business.id).products().parameters(parameters);
              _context2.t2 = promises;
              _context2.next = 28;
              return productEndpoint.get({
                cancelToken: source
              });

            case 28:
              _context2.t3 = _context2.sent;

              _context2.t2.push.call(_context2.t2, _context2.t3);

            case 30:
              return _context2.abrupt("return", promises);

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getLazyProducts(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var loadProducts = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _categoriesState$cate, _curCategoryState$pro, _businessState$busine16;

      var _ref7,
          newFetch,
          curCategoryState,
          isLazy,
          pageSize,
          _featuredRes$content,
          _featuredRes$content3,
          _featuredRes$content4,
          _yield$getLazyProduct,
          _yield$getLazyProduct2,
          lazyRes,
          featuredRes,
          _lazyRes$content,
          error,
          result,
          pagination,
          errorsList,
          _featuredRes$content2,
          _featuredRes$content5,
          _featuredRes$content6,
          _featuredRes$content7,
          _featuredRes$content8,
          _featuredRes$content9,
          _featuredRes$content10,
          _featuredRes$content11,
          _oldFeatured$products,
          _featuredRes$content12,
          _featureState$product,
          oldFeatured,
          featureState,
          _newcategoryState$pro,
          _categoriesState$feat3,
          _categoriesState$feat4,
          newcategoryState,
          isFeatured,
          _ref8,
          _featuredRes$content$,
          _featuredRes$content13,
          _categoriesState$feat5,
          _categoriesState$feat6,
          _curCategoryState$pag,
          _featuredRes$content14,
          _featuredRes$content15,
          _featuredRes$content16,
          _featuredRes$content17,
          _featuredRes$content18,
          _featuredRes$content19,
          _categoriesState$feat7,
          _categoriesState$feat8,
          productsList,
          productsListFeatured,
          paginationData,
          _newcategoryState,
          _isFeatured,
          _err$constructor,
          _err$message,
          _args3 = arguments;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref7 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref7.newFetch;
              curCategoryState = (_categoriesState$cate = categoriesState[categoryKey]) !== null && _categoriesState$cate !== void 0 ? _categoriesState$cate : categoryStateDefault;

              if (!(!newFetch && (curCategoryState.pagination.currentPage > 0 && curCategoryState.pagination.currentPage === curCategoryState.pagination.totalPages || (curCategoryState === null || curCategoryState === void 0 ? void 0 : (_curCategoryState$pro = curCategoryState.products) === null || _curCategoryState$pro === void 0 ? void 0 : _curCategoryState$pro.length) > 0 && curCategoryState.pagination.totalPages > 0))) {
                _context3.next = 5;
                break;
              }

              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
              return _context3.abrupt("return");

            case 5:
              isLazy = !!(businessState !== null && businessState !== void 0 && (_businessState$busine16 = businessState.business) !== null && _businessState$busine16 !== void 0 && _businessState$busine16.lazy_load_products_recommended);

              if (isLazy) {
                _context3.next = 9;
                break;
              }

              getProducts();
              return _context3.abrupt("return");

            case 9:
              pageSize = categoryStateDefault.pagination.pageSize;
              _context3.prev = 10;
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: true
              }));
              _context3.next = 14;
              return getLazyProducts({
                page: 1,
                pageSize: pageSize
              });

            case 14:
              _yield$getLazyProduct = _context3.sent;
              _yield$getLazyProduct2 = _slicedToArray(_yield$getLazyProduct, 2);
              lazyRes = _yield$getLazyProduct2[0];
              featuredRes = _yield$getLazyProduct2[1];
              _lazyRes$content = lazyRes.content, error = _lazyRes$content.error, result = _lazyRes$content.result, pagination = _lazyRes$content.pagination;
              errorsList = [];

              if (error) {
                errorsList.push(result[0]);
              }

              if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content = featuredRes.content) !== null && _featuredRes$content !== void 0 && _featuredRes$content.error) {
                errorsList.push(featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content2 = featuredRes.content) === null || _featuredRes$content2 === void 0 ? void 0 : _featuredRes$content2.result[0]);
              }

              if (!(errorsList !== null && errorsList !== void 0 && errorsList.length)) {
                _context3.next = 26;
                break;
              }

              setErrors(errorsList[0]);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
              return _context3.abrupt("return");

            case 26:
              if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content3 = featuredRes.content) !== null && _featuredRes$content3 !== void 0 && (_featuredRes$content4 = _featuredRes$content3.result) !== null && _featuredRes$content4 !== void 0 && _featuredRes$content4.length) {
                oldFeatured = categoriesState === null || categoriesState === void 0 ? void 0 : categoriesState.featured;
                featureState = {
                  pagination: _objectSpread(_objectSpread({}, oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.pagination), {}, {
                    currentPage: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content5 = featuredRes.content) === null || _featuredRes$content5 === void 0 ? void 0 : (_featuredRes$content6 = _featuredRes$content5.pagination) === null || _featuredRes$content6 === void 0 ? void 0 : _featuredRes$content6.current_page,
                    totalItems: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content7 = featuredRes.content) === null || _featuredRes$content7 === void 0 ? void 0 : (_featuredRes$content8 = _featuredRes$content7.pagination) === null || _featuredRes$content8 === void 0 ? void 0 : _featuredRes$content8.total,
                    totalPages: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content9 = featuredRes.content) === null || _featuredRes$content9 === void 0 ? void 0 : (_featuredRes$content10 = _featuredRes$content9.pagination) === null || _featuredRes$content10 === void 0 ? void 0 : _featuredRes$content10.total_pages
                  }),
                  loading: false,
                  products: newFetch ? _toConsumableArray(featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content11 = featuredRes.content) === null || _featuredRes$content11 === void 0 ? void 0 : _featuredRes$content11.result) : oldFeatured === null || oldFeatured === void 0 ? void 0 : (_oldFeatured$products = oldFeatured.products) === null || _oldFeatured$products === void 0 ? void 0 : _oldFeatured$products.concat(featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content12 = featuredRes.content) === null || _featuredRes$content12 === void 0 ? void 0 : _featuredRes$content12.result)
                };
                setErrorQuantityProducts(!((_featureState$product = featureState.products) !== null && _featureState$product !== void 0 && _featureState$product.length));
                categoriesState.featured = featureState;
              }

              if (categorySelected.id && categorySelected.id !== 'featured' || !isUseParentCategory) {
                newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, curCategoryState.pagination), {}, {
                    currentPage: pagination.current_page,
                    totalItems: pagination.total,
                    totalPages: pagination.total_pages
                  }),
                  loading: false,
                  products: result
                };
                setErrorQuantityProducts(!((_newcategoryState$pro = newcategoryState.products) !== null && _newcategoryState$pro !== void 0 && _newcategoryState$pro.length));
                categoriesState[categoryKey] = newcategoryState;
                categoryState = newcategoryState;
                setCategoryState(_objectSpread({}, newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
                isFeatured = categoriesState.all.products.some(function (product) {
                  return product.featured;
                }) || (categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat3 = categoriesState.featured) === null || _categoriesState$feat3 === void 0 ? void 0 : (_categoriesState$feat4 = _categoriesState$feat3.products) === null || _categoriesState$feat4 === void 0 ? void 0 : _categoriesState$feat4.some(function (product) {
                  return product.featured;
                }));
                setFeaturedProducts(isFeatured);
              }

              if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
                productsList = searchValue ? _toConsumableArray(result) : (_ref8 = []).concat.apply(_ref8, _toConsumableArray(result.map(function (category) {
                  return category === null || category === void 0 ? void 0 : category.products;
                }))).filter(function (item) {
                  return item;
                });
                productsListFeatured = (_featuredRes$content$ = featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content13 = featuredRes.content) === null || _featuredRes$content13 === void 0 ? void 0 : _featuredRes$content13.result) !== null && _featuredRes$content$ !== void 0 ? _featuredRes$content$ : [];
                paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat5 = categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat6 = categoriesState.featured) === null || _categoriesState$feat6 === void 0 ? void 0 : _categoriesState$feat6.pagination) !== null && _categoriesState$feat5 !== void 0 ? _categoriesState$feat5 : {} : (_curCategoryState$pag = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination) !== null && _curCategoryState$pag !== void 0 ? _curCategoryState$pag : {};
                _newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                    currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content14 = featuredRes.content) === null || _featuredRes$content14 === void 0 ? void 0 : (_featuredRes$content15 = _featuredRes$content14.pagination) === null || _featuredRes$content15 === void 0 ? void 0 : _featuredRes$content15.current_page : pagination.current_page,
                    totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content16 = featuredRes.content) === null || _featuredRes$content16 === void 0 ? void 0 : (_featuredRes$content17 = _featuredRes$content16.pagination) === null || _featuredRes$content17 === void 0 ? void 0 : _featuredRes$content17.total : pagination.total,
                    totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content18 = featuredRes.content) === null || _featuredRes$content18 === void 0 ? void 0 : (_featuredRes$content19 = _featuredRes$content18.pagination) === null || _featuredRes$content19 === void 0 ? void 0 : _featuredRes$content19.total_pages : pagination.total_pages
                  }),
                  loading: false,
                  products: categorySelected.id === 'featured' ? productsListFeatured : searchValue ? [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray(productsList)) : [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray(curCategoryState.products.concat(productsList)))
                };
                categoriesState[categoryKey] = _newcategoryState;
                setCategoryState(_objectSpread({}, _newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
                _isFeatured = categoriesState.all.products.some(function (product) {
                  return product.featured;
                }) || (categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat7 = categoriesState.featured) === null || _categoriesState$feat7 === void 0 ? void 0 : (_categoriesState$feat8 = _categoriesState$feat7.products) === null || _categoriesState$feat8 === void 0 ? void 0 : _categoriesState$feat8.some(function (product) {
                  return product.featured;
                }));
                setFeaturedProducts(_isFeatured);
              }

              _context3.next = 34;
              break;

            case 31:
              _context3.prev = 31;
              _context3.t0 = _context3["catch"](10);

              if ((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : (_err$constructor = _context3.t0.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
                setErrors([(_err$message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']);
                setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                  loading: false
                }));
              }

            case 34:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[10, 31]]);
    }));

    return function loadProducts() {
      return _ref6.apply(this, arguments);
    };
  }();

  var loadMoreProducts = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _categoriesState$cate2;

      var curCategoryState, _featuredRes$content20, _yield$getLazyProduct3, _yield$getLazyProduct4, lazyRes, featuredRes, _lazyRes$content2, error, result, pagination, errorsList, _featuredRes$content21, _featuredRes$content22, _featuredRes$content23, _featuredRes$content24, _featuredRes$content25, _featuredRes$content26, _featuredRes$content27, _featuredRes$content28, oldFeatured, featureState, _categoriesState$feat9, _categoriesState$feat10, newcategoryState, isFeatured, _ref10, _featuredRes$content$2, _featuredRes$content29, _categoriesState$feat11, _categoriesState$feat12, _curCategoryState$pag2, _featuredRes$content30, _featuredRes$content31, _featuredRes$content32, _featuredRes$content33, _featuredRes$content34, _featuredRes$content35, _categoriesState$feat13, _categoriesState$feat14, productsList, productsListFeatured, paginationData, _newcategoryState2, _isFeatured2, _err$constructor2, _err$message2;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              curCategoryState = (_categoriesState$cate2 = categoriesState[categoryKey]) !== null && _categoriesState$cate2 !== void 0 ? _categoriesState$cate2 : categoryStateDefault;
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: true
              }));
              _context4.prev = 2;
              _context4.next = 5;
              return getLazyProducts({
                page: curCategoryState.pagination.currentPage + 1
              });

            case 5:
              _yield$getLazyProduct3 = _context4.sent;
              _yield$getLazyProduct4 = _slicedToArray(_yield$getLazyProduct3, 2);
              lazyRes = _yield$getLazyProduct4[0];
              featuredRes = _yield$getLazyProduct4[1];
              _lazyRes$content2 = lazyRes.content, error = _lazyRes$content2.error, result = _lazyRes$content2.result, pagination = _lazyRes$content2.pagination;
              errorsList = [];

              if (error) {
                errorsList.push(result[0]);
              }

              if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content20 = featuredRes.content) !== null && _featuredRes$content20 !== void 0 && _featuredRes$content20.error) {
                errorsList.push(featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content21 = featuredRes.content) === null || _featuredRes$content21 === void 0 ? void 0 : _featuredRes$content21.result[0]);
              }

              if (!(errorsList !== null && errorsList !== void 0 && errorsList.length)) {
                _context4.next = 17;
                break;
              }

              setErrors(errorsList[0]);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
              return _context4.abrupt("return");

            case 17:
              if (featuredRes) {
                oldFeatured = categoriesState === null || categoriesState === void 0 ? void 0 : categoriesState.featured;
                featureState = {
                  pagination: _objectSpread(_objectSpread({}, oldFeatured.pagination), {}, {
                    currentPage: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content22 = featuredRes.content) === null || _featuredRes$content22 === void 0 ? void 0 : (_featuredRes$content23 = _featuredRes$content22.pagination) === null || _featuredRes$content23 === void 0 ? void 0 : _featuredRes$content23.current_page,
                    totalItems: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content24 = featuredRes.content) === null || _featuredRes$content24 === void 0 ? void 0 : (_featuredRes$content25 = _featuredRes$content24.pagination) === null || _featuredRes$content25 === void 0 ? void 0 : _featuredRes$content25.total,
                    totalPages: featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content26 = featuredRes.content) === null || _featuredRes$content26 === void 0 ? void 0 : (_featuredRes$content27 = _featuredRes$content26.pagination) === null || _featuredRes$content27 === void 0 ? void 0 : _featuredRes$content27.total_pages
                  }),
                  loading: false,
                  products: [].concat(_toConsumableArray(oldFeatured.products), _toConsumableArray(featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content28 = featuredRes.content) === null || _featuredRes$content28 === void 0 ? void 0 : _featuredRes$content28.result))
                };
                categoriesState.featured = featureState;
              }

              if (categorySelected.id && categorySelected.id !== 'featured' || !isUseParentCategory) {
                newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, curCategoryState.pagination), {}, {
                    currentPage: pagination.current_page,
                    totalItems: pagination.total,
                    totalPages: pagination.total_pages
                  }),
                  loading: false,
                  products: [].concat(_toConsumableArray(curCategoryState.products), _toConsumableArray(result))
                };
                categoriesState[categoryKey] = newcategoryState;
                categoryState = _objectSpread(_objectSpread({}, categoryState), newcategoryState);
                setCategoryState(_objectSpread(_objectSpread({}, categoryState), newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
                isFeatured = categoriesState.all.products.some(function (product) {
                  return product.featured;
                }) || (categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat9 = categoriesState.featured) === null || _categoriesState$feat9 === void 0 ? void 0 : (_categoriesState$feat10 = _categoriesState$feat9.products) === null || _categoriesState$feat10 === void 0 ? void 0 : _categoriesState$feat10.some(function (product) {
                  return product.featured;
                }));
                setFeaturedProducts(isFeatured);
              }

              if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
                productsList = (_ref10 = []).concat.apply(_ref10, _toConsumableArray(result.map(function (category) {
                  return category === null || category === void 0 ? void 0 : category.products;
                }))).filter(function (item) {
                  return item;
                });
                productsListFeatured = (_featuredRes$content$2 = featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content29 = featuredRes.content) === null || _featuredRes$content29 === void 0 ? void 0 : _featuredRes$content29.result) !== null && _featuredRes$content$2 !== void 0 ? _featuredRes$content$2 : [];
                paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat11 = categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat12 = categoriesState.featured) === null || _categoriesState$feat12 === void 0 ? void 0 : _categoriesState$feat12.pagination) !== null && _categoriesState$feat11 !== void 0 ? _categoriesState$feat11 : {} : (_curCategoryState$pag2 = curCategoryState.pagination) !== null && _curCategoryState$pag2 !== void 0 ? _curCategoryState$pag2 : {};
                _newcategoryState2 = {
                  pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                    currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content30 = featuredRes.content) === null || _featuredRes$content30 === void 0 ? void 0 : (_featuredRes$content31 = _featuredRes$content30.pagination) === null || _featuredRes$content31 === void 0 ? void 0 : _featuredRes$content31.current_page : pagination.current_page,
                    totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content32 = featuredRes.content) === null || _featuredRes$content32 === void 0 ? void 0 : (_featuredRes$content33 = _featuredRes$content32.pagination) === null || _featuredRes$content33 === void 0 ? void 0 : _featuredRes$content33.total : pagination.total,
                    totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 ? void 0 : (_featuredRes$content34 = featuredRes.content) === null || _featuredRes$content34 === void 0 ? void 0 : (_featuredRes$content35 = _featuredRes$content34.pagination) === null || _featuredRes$content35 === void 0 ? void 0 : _featuredRes$content35.total_pages : pagination.total_pages
                  }),
                  loading: false,
                  products: categorySelected.id === 'featured' ? productsListFeatured : [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray(curCategoryState.products.concat(productsList)))
                };
                categoriesState[categoryKey] = _newcategoryState2;
                categoryState = _newcategoryState2;
                setCategoryState(_objectSpread({}, _newcategoryState2));
                setCategoriesState(_objectSpread({}, categoriesState));
                _isFeatured2 = categoriesState.all.products.some(function (product) {
                  return product.featured;
                }) || (categoriesState === null || categoriesState === void 0 ? void 0 : (_categoriesState$feat13 = categoriesState.featured) === null || _categoriesState$feat13 === void 0 ? void 0 : (_categoriesState$feat14 = _categoriesState$feat13.products) === null || _categoriesState$feat14 === void 0 ? void 0 : _categoriesState$feat14.some(function (product) {
                  return product.featured;
                }));
                setFeaturedProducts(_isFeatured2);
              }

              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: false
              }));
              _context4.next = 26;
              break;

            case 23:
              _context4.prev = 23;
              _context4.t0 = _context4["catch"](2);

              if ((_context4.t0 === null || _context4.t0 === void 0 ? void 0 : (_err$constructor2 = _context4.t0.constructor) === null || _err$constructor2 === void 0 ? void 0 : _err$constructor2.name) !== 'Cancel') {
                setErrors([(_err$message2 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']);
                setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                  loading: false
                }));
              }

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 23]]);
    }));

    return function loadMoreProducts() {
      return _ref9.apply(this, arguments);
    };
  }();

  var getProduct = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _props$product, _props$product2, _props$product3;

      var _orderState$options5, _orderState$options6, _orderState$options7, _orderState$options8, _props$product4, _props$product5, _props$product6, source, parameters, _orderState$options9, moment, _yield$ordering$busin, result, product;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(categoryId && productId && businessState.business.id || (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.businessId && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.categoryId && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.id)) {
                _context5.next = 18;
                break;
              }

              _context5.prev = 1;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: true
              }));
              source = {};
              requestsState.product = source;
              parameters = {
                type: ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) || 1,
                moment: ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.moment) || null
              };

              if ((_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              _context5.next = 9;
              return ordering.businesses(businessState.business.id || ((_props$product4 = props.product) === null || _props$product4 === void 0 ? void 0 : _props$product4.businessId)).categories(categoryId || ((_props$product5 = props.product) === null || _props$product5 === void 0 ? void 0 : _props$product5.categoryId)).products(productId || ((_props$product6 = props.product) === null || _props$product6 === void 0 ? void 0 : _props$product6.id)).parameters(parameters).get({
                cancelToken: source
              });

            case 9:
              _yield$ordering$busin = _context5.sent;
              result = _yield$ordering$busin.content.result;
              product = Array.isArray(result) ? null : result;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                product: product,
                loading: false
              }));
              _context5.next = 18;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](1);
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: false,
                error: [_context5.t0]
              }));

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 15]]);
    }));

    return function getProduct() {
      return _ref11.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine17 = businessState.business) === null || _businessState$busine17 === void 0 ? void 0 : _businessState$busine17.id), isInitialRender]);

  var getBusiness = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _orderState$options10, _orderState$options11, _orderState$options12, _orderState$options13, _orderState$options14, _orderState$options15, _orderState$options16, _orderState$options17, _orderState$options18, _orderState$options19, _orderState$options20, _result$categories, source, parameters, _orderState$options21, moment, _yield$ordering$busin2, result, data, _yield$ordering$busin3, menus;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              source = {};
              requestsState.business = source;
              parameters = {
                type: ((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) || 1,
                location: location ? "".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng) : (_orderState$options11 = orderState.options) !== null && _orderState$options11 !== void 0 && (_orderState$options12 = _orderState$options11.address) !== null && _orderState$options12 !== void 0 && _orderState$options12.location ? "".concat((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : (_orderState$options14 = _orderState$options13.address) === null || _orderState$options14 === void 0 ? void 0 : (_orderState$options15 = _orderState$options14.location) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.lat, ",").concat((_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : (_orderState$options17 = _orderState$options16.address) === null || _orderState$options17 === void 0 ? void 0 : (_orderState$options18 = _orderState$options17.location) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.lng) : null
              };

              if ((_orderState$options19 = orderState.options) !== null && _orderState$options19 !== void 0 && _orderState$options19.moment && isValidMoment((_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              if (filterByMenus) {
                parameters.menu_id = filterByMenus;
              }

              if (professionalSelected) {
                parameters.professional_id = professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id;
              }

              _context6.next = 10;
              return ordering.businesses(slug) // .select(businessProps)
              .parameters(parameters).get({
                cancelToken: source
              });

            case 10:
              _yield$ordering$busin2 = _context6.sent;
              result = _yield$ordering$busin2.content.result;
              setErrorQuantityProducts(!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 ? void 0 : (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0);
              data = _objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              });

              if (!(menusProps && isGetMenus)) {
                _context6.next = 20;
                break;
              }

              _context6.next = 17;
              return ordering.businesses(result.id).menus().select(menusProps).get();

            case 17:
              _yield$ordering$busin3 = _context6.sent;
              menus = _yield$ordering$busin3.content.result;
              data.menus = menus;

            case 20:
              setBusinessState(data);
              _context6.next = 26;
              break;

            case 23:
              _context6.prev = 23;
              _context6.t0 = _context6["catch"](0);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: [_context6.t0.message]
              }));

            case 26:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 23]]);
    }));

    return function getBusiness() {
      return _ref12.apply(this, arguments);
    };
  }();

  var multiRemoveProducts = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(unavailableProducts, carts) {
      var allPromise;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              allPromise = [];
              unavailableProducts.forEach(function (product) {
                allPromise.push(new Promise(function (resolve, reject) {
                  resolve(removeProduct(product, carts));
                }));
              });
              _context7.next = 4;
              return Promise.all(allPromise);

            case 4:
              _context7.t0 = _context7.sent;

              if (!_context7.t0) {
                _context7.next = 7;
                break;
              }

              setAlertState({
                open: true,
                content: [t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.')]
              });

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function multiRemoveProducts(_x2, _x3) {
      return _ref13.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!businessState.loading) {
      loadProducts({
        newFetch: true
      });
    }
  }, [businessState.loading]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: !!searchValue
    });
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: !!searchValue
    });
  }, [categorySelected.id]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: !!searchValue
    });
  }, [sortByValue]);
  (0, _react.useEffect)(function () {
    loadProducts();
  }, [slug]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: true
    });
  }, [priceFilterValues]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading && orderOptions && !languageState.loading && !props.avoidBusinessLoading) {
      getBusiness();
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus, professionalSelected]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading && orderOptions && !languageState.loading && !businessState.loading && props.avoidBusinessLoading) {
      getBusiness();
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus, professionalSelected]);
  /**
   * getBusiness if orderState is loading the first time when is rendered
   */

  (0, _react.useEffect)(function () {
    var _Object$keys;

    if (props.product && !orderState.loading && !((_Object$keys = Object.keys(businessState.business)) !== null && _Object$keys !== void 0 && _Object$keys.length)) {
      getBusiness();
    }
  }, [orderState.loading]);
  /**
   * getProduct when login after guest
   */

  (0, _react.useEffect)(function () {
    var _props$product7, _props$product8, _props$product9;

    if ((_props$product7 = props.product) !== null && _props$product7 !== void 0 && _props$product7.businessId && (_props$product8 = props.product) !== null && _props$product8 !== void 0 && _props$product8.categoryId && (_props$product9 = props.product) !== null && _props$product9 !== void 0 && _props$product9.id && !orderState.loading) {
      getProduct();
    }
  }, [props.product]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading) {
      var _orderState$options22, _orderState$options23, _orderState$options24, _orderState$options25;

      setOrderOptions({
        type: orderState === null || orderState === void 0 ? void 0 : (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.type,
        moment: orderState === null || orderState === void 0 ? void 0 : (_orderState$options23 = orderState.options) === null || _orderState$options23 === void 0 ? void 0 : _orderState$options23.moment,
        location: orderState === null || orderState === void 0 ? void 0 : (_orderState$options24 = orderState.options) === null || _orderState$options24 === void 0 ? void 0 : (_orderState$options25 = _orderState$options24.address) === null || _orderState$options25 === void 0 ? void 0 : _orderState$options25.location
      });
    }
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options26 = orderState.options) === null || _orderState$options26 === void 0 ? void 0 : _orderState$options26.type, orderState === null || orderState === void 0 ? void 0 : (_orderState$options27 = orderState.options) === null || _orderState$options27 === void 0 ? void 0 : _orderState$options27.moment, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : (_orderState$options28 = orderState.options) === null || _orderState$options28 === void 0 ? void 0 : (_orderState$options29 = _orderState$options28.address) === null || _orderState$options29 === void 0 ? void 0 : _orderState$options29.location)]);
  /**
   * Cancel business request
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.business]);
  /**
   * Cancel products request on unmount and pagination
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    sortByValue: sortByValue,
    filterByMenus: filterByMenus,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    openCategories: openCategories.values,
    featuredProducts: featuredProducts,
    errorQuantityProducts: errorQuantityProducts,
    categoriesState: categoriesState,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    handleChangeSortBy: handleChangeSortBy,
    handleChangeFilterByMenus: handleChangeFilterByMenus,
    getNextProducts: loadMoreProducts,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    },
    multiRemoveProducts: multiRemoveProducts,
    setAlertState: setAlertState,
    alertState: alertState,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    priceFilterValues: priceFilterValues,
    handleChangePriceFilterValues: handleChangePriceFilterValues,
    city: city
  })));
};

exports.BusinessAndProductList = BusinessAndProductList;
BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessAndProductList.defaultProps = {};