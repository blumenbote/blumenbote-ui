"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderProductsLayoutUI = exports.RenderProductsLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _AiOutlineShoppingCart = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineShoppingCart"));

var _BusinessBasicInformation = require("../BusinessBasicInformation");

var _BusinessProductsCategories = require("../BusinessProductsCategories");

var _BusinessProductsList = require("../BusinessProductsList");

var _groceries = require("../BusinessProductsCategories/layouts/groceries");

var _groceries2 = require("../BusinessProductsList/layouts/groceries");

var _Modal = require("../Modal");

var _Cart = require("../Cart");

var _SearchBar = require("../SearchBar");

var _NotFoundSource = require("../NotFoundSource");

var _Buttons = require("../../styles/Buttons");

var _Select = require("../../styles/Select");

var _styles = require("./styles");

var _Tabs = require("../../styles/Tabs");

var _AutoScroll = require("../AutoScroll");

var _BusinessReviews = require("../BusinessReviews");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var layoutOne = 'groceries';

var RenderProductsLayoutUI = function RenderProductsLayoutUI(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _currentCart$products3, _currentCart$products4, _currentCart$products5;

  var errors = props.errors,
      isError = props.isError,
      isLoading = props.isLoading,
      business = props.business,
      categoryId = props.categoryId,
      searchValue = props.searchValue,
      sortByValue = props.sortByValue,
      currentCart = props.currentCart,
      businessState = props.businessState,
      sortByOptions = props.sortByOptions,
      categoryState = props.categoryState,
      categorySelected = props.categorySelected,
      openCategories = props.openCategories,
      openBusinessInformation = props.openBusinessInformation,
      isCartOnProductsList = props.isCartOnProductsList,
      handleChangeSortBy = props.handleChangeSortBy,
      errorQuantityProducts = props.errorQuantityProducts,
      handler = props.handler,
      onClickCategory = props.onClickCategory,
      featuredProducts = props.featuredProducts,
      onProductClick = props.onProductClick,
      handleSearchRedirect = props.handleSearchRedirect,
      handleChangeSearch = props.handleChangeSearch,
      setOpenBusinessInformation = props.setOpenBusinessInformation,
      _handleCartOpen = props.handleCartOpen,
      productToIdLoading = props.productToIdLoading,
      businessLocation = props.businessLocation,
      businessSchedule = props.businessSchedule,
      businessPhotos = props.businessPhotos,
      businessVideos = props.businessVideos;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCartModal = _useState2[0],
      setisCartModal = _useState2[1];

  var _useState3 = (0, _react.useState)('flowers'),
      _useState4 = _slicedToArray(_useState3, 2),
      currentCategory = _useState4[0],
      setCurrentCategory = _useState4[1];

  var isUseParentCategory = (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1';
  var frontLayout = business === null || business === void 0 ? void 0 : business.front_layout;
  var businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  };
  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];

  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;

    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };

    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };

  var BusinessLayout = function BusinessLayout(props) {
    var components = {
      categories: businessLayout.layoutOne ? _groceries.BusinessProductsCategories : _BusinessProductsCategories.BusinessProductsCategories,
      products_list: businessLayout.layoutOne ? _groceries2.BusinessProductsList : _BusinessProductsList.BusinessProductsList
    };
    var ComponentToRender = (props === null || props === void 0 ? void 0 : props.component) && components[props === null || props === void 0 ? void 0 : props.component];
    return (props === null || props === void 0 ? void 0 : props.component) && /*#__PURE__*/_react.default.createElement(ComponentToRender, props);
  };

  var Categories = function Categories() {
    var _business$reviews, _business$offers;

    return /*#__PURE__*/_react.default.createElement(_styles.FlexTabs, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
      variant: "primary"
    }, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      onClick: function onClick() {
        return setCurrentCategory('flowers');
      },
      active: currentCategory === 'flowers'
    }, t('PRODUCT_FLOWERS', 'Flowers')), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      onClick: function onClick() {
        return setCurrentCategory('generalInfo');
      },
      active: currentCategory === 'generalInfo'
    }, t('PRODUCT_GENERAL_INFO', 'General Info')), ((_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.reviews) && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      onClick: function onClick() {
        return setCurrentCategory('reviews');
      },
      active: currentCategory === 'reviews'
    }, t('PRODUCT_REVIEWS', 'Reviews')), (business === null || business === void 0 ? void 0 : (_business$offers = business.offers) === null || _business$offers === void 0 ? void 0 : _business$offers.length) > 0 && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      onClick: function onClick() {
        return setCurrentCategory('offers');
      },
      active: currentCategory === 'offers'
    }, t('PRODUCT_OFFERS', 'Offers'))));
  };

  var CategoryInners = function CategoryInners() {
    var _theme$defaultLanguag, _businessState$busine, _business$categories, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _currentCart$products, _business$categories2, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _currentCart$products2, _configs$google_maps_, _business$reviews2, _business$reviews3, _business$reviews4, _business$offers2;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCategory === 'flowers' && (!errorQuantityProducts ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (categoryState.products.length !== 0 || searchValue) && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
      onSearch: handleChangeSearch,
      search: searchValue,
      placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SEARCH_PRODUCTS) || 'Search Products'),
      lazyLoad: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended
    }), /*#__PURE__*/_react.default.createElement(_Select.Select, {
      notAsync: true,
      notReload: true,
      options: sortByOptions,
      defaultValue: sortByValue,
      onChange: function onChange(val) {
        return handleChangeSortBy && handleChangeSortBy(val);
      }
    })), !businessLayout.layoutOne ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) !== 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
      categories: [{
        id: null,
        name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ALL) || 'All')
      }, {
        id: 'featured',
        name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.FEATURED) || 'Featured')
      }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
        return a.rank - b.rank;
      }))),
      categorySelected: categorySelected,
      onClickCategory: onClickCategory,
      featured: featuredProducts,
      openBusinessInformation: openBusinessInformation
    }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
      categories: [{
        id: null,
        name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ALL) || 'All')
      }, {
        id: 'featured',
        name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.FEATURED) || 'Featured')
      }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
        return a.rank - b.rank;
      }))),
      category: categorySelected,
      categoryState: categoryState,
      businessId: business.id,
      errors: errors,
      onProductClick: onProductClick,
      handleSearchRedirect: handleSearchRedirect,
      featured: featuredProducts,
      searchValue: searchValue,
      isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0,
      handleClearSearch: handleChangeSearch,
      errorQuantityProducts: errorQuantityProducts,
      currentCart: currentCart,
      productToIdLoading: productToIdLoading
    })))) : /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoriesContainer, null, !((business === null || business === void 0 ? void 0 : (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(BusinessLayout, {
      component: "categories",
      categories: [{
        id: null,
        name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.ALL) || 'All')
      }, {
        id: 'featured',
        name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.FEATURED) || 'Featured')
      }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
        return a.rank - b.rank;
      }))),
      categorySelected: categorySelected,
      onClickCategory: onClickCategory,
      featured: featuredProducts,
      openBusinessInformation: openBusinessInformation,
      openCategories: openCategories,
      business: business
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(BusinessLayout, {
      component: "products_list",
      categories: [{
        id: null,
        name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ALL) || 'All')
      }, {
        id: 'featured',
        name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.FEATURED) || 'Featured')
      }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
        return a.rank - b.rank;
      }))),
      category: categorySelected,
      onClickCategory: onClickCategory,
      categoriesState: props.categoriesState,
      categoryState: categoryState,
      businessId: business === null || business === void 0 ? void 0 : business.id,
      errors: errors,
      onProductClick: onProductClick,
      handleSearchRedirect: handleSearchRedirect,
      featured: featuredProducts,
      searchValue: searchValue,
      isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0,
      handleClearSearch: handleChangeSearch,
      errorQuantityProducts: errorQuantityProducts,
      business: business,
      currentCart: currentCart
    }))))) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
      content: t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time'),
      btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
      onClickButton: function onClickButton() {
        return handleSearchRedirect();
      }
    })), currentCategory === 'generalInfo' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business.about && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_ABOUT', 'Business short description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.about)), business.description && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_DESCRIPTION', 'Business description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.description)), (businessSchedule === null || businessSchedule === void 0 ? void 0 : businessSchedule.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_OPENING_TIME', 'Business Opening Time')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
      modal: true
    }, businessSchedule.map(function (schedule, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[i]), schedule.enabled ? schedule.lapses.map(function (time, k) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: k
        }, /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(time.open)), /*#__PURE__*/_react.default.createElement("p", {
          style: {
            borderBottom: '2px solid',
            borderBottomColor: theme.colors.primary,
            marginBottom: 10
          }
        }, scheduleFormatted(time.close)));
      }) : /*#__PURE__*/_react.default.createElement("p", {
        style: {
          fontWeight: 500
        }
      }, t('CLOSED_TODAY', 'Closed Today')));
    }))))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('PRODUCT_DELIVERY_AND_PICKUP', 'Delivery and pickup time')), /*#__PURE__*/_react.default.createElement(_styles.DeliveryContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('DELIVERY_TIME', 'Delivery Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("h5", null, t('PICKUP_TIME', 'Pickup Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))))), (businessPhotos === null || businessPhotos === void 0 ? void 0 : businessPhotos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')), /*#__PURE__*/_react.default.createElement("div", null, businessPhotos.map(function (photo, i) {
      return /*#__PURE__*/_react.default.createElement("img", {
        key: i,
        src: photo.file,
        alt: "photo-".concat(i),
        width: "191",
        height: "128",
        onClick: function onClick() {
          return handleModalImage(photo.file);
        },
        loading: "lazy"
      });
    }))), (businessVideos === null || businessVideos === void 0 ? void 0 : businessVideos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_VIDEOS', 'Business Videos')), /*#__PURE__*/_react.default.createElement("div", null, businessVideos.map(function (video, i) {
      return /*#__PURE__*/_react.default.createElement("iframe", {
        key: i,
        src: (0, _utils.formatUrlVideo)(video.video),
        width: "191",
        height: "128",
        frameBorder: "0",
        allow: "autoplay; encrypted-media",
        allowFullScreen: true
      });
    }))), businessLocation.location && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_LOCATION', 'Business location')), businessLocation.location && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
      apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
      location: businessLocation.location,
      mapControls: businessLocation.googleMapsControls || business.googleMapsControls
    })))), currentCategory === 'reviews' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
      businessId: business.id,
      reviews: (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.reviews,
      businessName: business.name,
      stars: (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.total
    })), currentCategory === 'offers' && /*#__PURE__*/_react.default.createElement(_styles.OffersSection, null, /*#__PURE__*/_react.default.createElement(_styles.OfferText, null, /*#__PURE__*/_react.default.createElement(_styles.OfferTextP, null, t('DISCOUNTS_OF', 'Discounts of'), " ", business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_styles.OfferTextP, null, business === null || business === void 0 ? void 0 : business.address)), /*#__PURE__*/_react.default.createElement(OfferTable, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_NAME', 'Offer Name')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_PRICE', 'Offer Price')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_START_DATE', 'Start Date')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_END_DATE', 'End Date')))), /*#__PURE__*/_react.default.createElement("tbody", null, business === null || business === void 0 ? void 0 : (_business$offers2 = business.offers) === null || _business$offers2 === void 0 ? void 0 : _business$offers2.map(function (offer) {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: offer.id
      }, /*#__PURE__*/_react.default.createElement("td", null, offer.name), /*#__PURE__*/_react.default.createElement("td", null, offer.rate_type === 1 ? "".concat(offer.rate, " % ").concat(t('MIN', 'Min'), ": ").concat(parsePrice(offer.minimum)) : "".concat(parsePrice(offer.rate), " ").concat(t('MIN', 'Min'), ": ").concat(parsePrice(offer.minimum))), /*#__PURE__*/_react.default.createElement("td", null, offer.start), /*#__PURE__*/_react.default.createElement("td", null, offer.end));
    }))))));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isLoading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isLayoutOne: businessLayout.layoutOne,
    isCartOnProductsList: isCartOnProductsList
  }, !businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(Categories, null), /*#__PURE__*/_react.default.createElement(CategoryInners, null)), isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 && /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isForceOpenCart: true,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.length) > 0,
    handleCartOpen: function handleCartOpen(val) {
      return _handleCartOpen(val);
    }
  })), businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(Categories, null), /*#__PURE__*/_react.default.createElement(CategoryInners, null))), isLoading && !isError && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    isSkeleton: true,
    handler: handler,
    businessState: {
      business: {},
      loading: true
    },
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    isSkeleton: true,
    categories: [],
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: isLoading,
    errorQuantityProducts: errorQuantityProducts,
    productToIdLoading: productToIdLoading
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "40%",
    open: isCartModal,
    onClose: function onClose() {
      return setisCartModal(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContent, {
    isModal: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, {
    style: {
      textAlign: 'center',
      marginTop: '5px'
    }
  }, t('YOUR_CART', 'Your cart')), (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: _handleCartOpen
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineShoppingCart.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart')))))));
};

exports.RenderProductsLayoutUI = RenderProductsLayoutUI;

var RenderProductsLayout = function RenderProductsLayout(props) {
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };

  var RenderProductsLayoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RenderProductsLayoutUI,
    googleMapsControls: googleMapsControls
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessInformation, RenderProductsLayoutProps);
};

exports.RenderProductsLayout = RenderProductsLayout;