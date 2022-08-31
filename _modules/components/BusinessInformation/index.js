"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformationUI = exports.BusinessInformation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _BusinessReviews = require("../BusinessReviews");

var _Modal = require("../Modal");

var _styles = require("./styles");

var _Tabs = require("../../styles/Tabs");

var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));

var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));

var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));

var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _AutoScroll = require("../AutoScroll");

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

var BusinessInformationUI = function BusinessInformationUI(props) {
  var business = props.business,
      getBusinessType = props.getBusinessType,
      optimizeImage = props.optimizeImage,
      businessLocation = props.businessLocation,
      businessSchedule = props.businessSchedule,
      businessPhotos = props.businessPhotos,
      businessVideos = props.businessVideos,
      onClose = props.onClose;
  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)('General Info'),
      _useState2 = _slicedToArray(_useState, 2),
      tabValue = _useState2[0],
      setTabValue = _useState2[1];

  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDistance = _useUtils2$.parseDistance;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalImage = _useState4[0],
      setModalImage = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;

    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };

    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };

  var handleModalImage = function handleModalImage(src) {
    setImage(src);
    setModalImage(true);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null); // return (
  //   <>
  //     {props.beforeElements?.map((BeforeElement, i) => (
  //       <React.Fragment key={i}>
  //         {BeforeElement}
  //       </React.Fragment>))
  //     }
  //     {props.beforeComponents?.map((BeforeComponent, i) => (
  //       <BeforeComponent key={i} {...props} />))
  //     }
  //     <BusinessInformationContainer>
  //       <ModalIcon>
  //         <MdClose onClick={() => onClose(false)} />
  //       </ModalIcon>
  //       <BusinessHeader>
  //         <img src={business.header} alt='business-image' width='444px' height='250px' loading='lazy' />
  //         <BusinessBasicContent>
  //           {(business?.logo || theme.images?.dummies?.businessLogo) && (
  //             <WrapperBusinessLogo>
  //               <BusinessLogo
  //                 bgimage={
  //                   optimizeImage
  //                     ? optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')
  //                     : business?.logo || theme.images?.dummies?.businessLogo
  //                 }
  //               />
  //             </WrapperBusinessLogo>
  //           )}
  //           <BusinessInfo className='info'>
  //             <BusinessInfoItem>
  //               <div>
  //                 <p className='bold'>{business?.name}</p>
  //                 <p>
  //                   <FaStar className='start' />
  //                   {business?.reviews?.total}
  //                 </p>
  //               </div>
  //               {getBusinessType && (
  //                 <div>
  //                   <p>{getBusinessType()}</p>
  //                 </div>
  //               )}
  //               <div>
  //                 <>
  //                   {orderState?.options?.type === 1 ? (
  //                     <h5>
  //                       <FiClock />
  //                       {convertHoursToMinutes(business?.delivery_time)}
  //                     </h5>
  //                   ) : (
  //                     <h5>
  //                       <FiClock />
  //                       {convertHoursToMinutes(business?.pickup_time)}
  //                     </h5>
  //                   )}
  //                 </>
  //                 <h5>
  //                   <GrLocation />
  //                   {parseDistance(business?.distance || 0)}
  //                 </h5>
  //                 <h5>
  //                   <GrDeliver />
  //                   {business && parsePrice(business?.delivery_price || 0)}
  //                 </h5>
  //               </div>
  //             </BusinessInfoItem>
  //           </BusinessInfo>
  //         </BusinessBasicContent>
  //       </BusinessHeader>
  //       <BusinessContent>
  //         {business.reviews && (
  //           <FlexTabs>
  //             <Tabs variant='primary'>
  //               <Tab onClick={() => setTabValue('General Info')} active={tabValue === 'General Info'}>
  //                 {t('GENERAL_INFO', 'General Info')}
  //               </Tab>
  //               {business.reviews?.reviews && (
  //                 <Tab onClick={() => setTabValue('Reviews')} active={tabValue === 'Reviews'}>
  //                   {t('REVIEWS', 'Reviews')}
  //                 </Tab>
  //               )}
  //               {business?.offers?.length > 0 && (
  //                 <Tab onClick={() => setTabValue('Offers')} active={tabValue === 'Offers'}>
  //                   {t('OFFERS', 'Offers')}
  //                 </Tab>
  //               )}
  //             </Tabs>
  //           </FlexTabs>
  //         )}
  //         {tabValue === 'General Info' && (
  //           <>
  //             {business.about && (
  //               <>
  //                 <SectionTitle>{t('BUSINESS_ABOUT', 'Business short description')}</SectionTitle>
  //                 <Description>{business.about}</Description>
  //               </>
  //             )}
  //             {business.description && (
  //               <>
  //                 <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business description')}</SectionTitle>
  //                 <Description>{business.description}</Description>
  //               </>
  //             )}
  //             {businessLocation.location && (
  //               <>
  //                 <SectionTitle>{t('BUSINESS_LOCATION', 'Business location')}</SectionTitle>
  //                 {businessLocation.location && (
  //                   <Map>
  //                     <GoogleMapsMap
  //                       apiKey={configs?.google_maps_api_key?.value}
  //                       location={businessLocation.location}
  //                       mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
  //                     />
  //                   </Map>
  //                 )}
  //               </>
  //             )}
  //             {businessSchedule?.length > 0 && (
  //               <>
  //                 <SectionTitle>{t('BUSINESS_OPENING_TIME', 'Business Opening Time')}</SectionTitle>
  //                 <ScheduleSection>
  //                   <ScheduleContainer>
  //                     <Tabs>
  //                       <AutoScroll modal>
  //                         {businessSchedule.map((schedule, i) => (
  //                           <ScheduleBlock key={i}>
  //                             <h4>{daysOfWeek[i]}</h4>
  //                             {schedule.enabled ? (
  //                               schedule.lapses.map( (time, k) => (
  //                                 <React.Fragment key={k}>
  //                                   <p>{scheduleFormatted(time.open)}</p>
  //                                   <p style={{
  //                                     borderBottom: '2px solid',
  //                                     borderBottomColor: theme.colors.primary,
  //                                     marginBottom: 10
  //                                   }} >{scheduleFormatted(time.close)}</p>
  //                                 </React.Fragment>
  //                               ))
  //                             ) : (
  //                               <p style={{ fontWeight: 500 }}>{t('CLOSED_TODAY', 'Closed Today')}</p>
  //                             )}
  //                           </ScheduleBlock>
  //                         ))}
  //                       </AutoScroll>
  //                     </Tabs>
  //                   </ScheduleContainer>
  //                 </ScheduleSection>
  //                 <DeliveryInfo>
  //                   <div>
  //                     <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
  //                     <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
  //                   </div>
  //                 </DeliveryInfo>
  //               </>
  //             )}
  //             {businessPhotos?.length > 0 && (
  //               <BusinessMediaContent>
  //                 <SectionTitle>{t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')}</SectionTitle>
  //                 <div>
  //                   {
  //                     businessPhotos.map((photo, i) => (
  //                       <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} loading='lazy' />
  //                     ))
  //                   }
  //                 </div>
  //               </BusinessMediaContent>
  //             )}
  //             {businessVideos?.length > 0 && (
  //               <BusinessMediaContent>
  //                 <SectionTitle>{t('BUSINESS_VIDEOS', 'Business Videos')}</SectionTitle>
  //                 <div>
  //                   {businessVideos.map((video, i) => (
  //                     <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
  //                   ))}
  //                 </div>
  //               </BusinessMediaContent>
  //             )}
  //           </>
  //         )}
  //         {tabValue === 'Reviews' && (
  //           <>
  //             {business.reviews?.reviews && (
  //               <BusinessReviews
  //                 businessId={business.id}
  //                 reviews={business.reviews?.reviews}
  //                 businessName={business.name}
  //                 stars={business.reviews?.total}
  //               />
  //             )}
  //           </>
  //         )}
  //         {tabValue === 'Offers' && (
  //           <OffersSection>
  //             <OfferText>
  //               <OfferTextP>{t('DISCOUNTS_OF', 'Discounts of')} {business?.name}</OfferTextP>
  //               <OfferTextP>{business?.address}</OfferTextP>
  //             </OfferText>
  //             <OfferTable>
  //               <table>
  //                 <thead>
  //                   <tr>
  //                     <th>{t('OFFERT_NAME', 'Offer Name')}</th>
  //                     <th>{t('OFFERT_PRICE', 'Offer Price')}</th>
  //                     <th>{t('OFFERT_START_DATE', 'Start Date')}</th>
  //                     <th>{t('OFFERT_END_DATE', 'End Date')}</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   {business?.offers?.map(offer => (
  //                     <tr key={offer.id}>
  //                       <td>{offer.name}</td>
  //                       <td>
  //                         {offer.rate_type === 1 ? (
  //                           `${offer.rate} % ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
  //                         ) : (
  //                           `${parsePrice(offer.rate)} ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
  //                         )}
  //                       </td>
  //                       <td>{offer.start}</td>
  //                       <td>{offer.end}</td>
  //                     </tr>
  //                   ))}
  //                 </tbody>
  //               </table>
  //             </OfferTable>
  //           </OffersSection>
  //         )}
  //       </BusinessContent>
  //       <Modal
  //         onClose={() => setModalImage(false)}
  //         open={modalImage}
  //         padding='0'
  //         hideCloseDefault
  //         isTransparent
  //         height='auto'
  //       >
  //         <ImageContainer>
  //           <ModalIcon>
  //             <MdClose onClick={() => setModalImage(false)} />
  //           </ModalIcon>
  //           <img src={image} width='320px' height='180px' loading='lazy' />
  //         </ImageContainer>
  //       </Modal>
  //     </BusinessInformationContainer>
  //     {props.afterComponents?.map((AfterComponent, i) => (
  //       <AfterComponent key={i} {...props} />))
  //     }
  //     {props.afterElements?.map((AfterElement, i) => (
  //       <React.Fragment key={i}>
  //         {AfterElement}
  //       </React.Fragment>))
  //     }
  //   </>
  // )
};

exports.BusinessInformationUI = BusinessInformationUI;

var BusinessInformation = function BusinessInformation(props) {
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

  var BusinessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI,
    googleMapsControls: googleMapsControls
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessInformation, BusinessInformationProps);
};

exports.BusinessInformation = BusinessInformation;