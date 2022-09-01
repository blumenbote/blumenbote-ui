import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils, GoogleMapsMap, BusinessInformation as BusinessInformationController } from 'ordering-components'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'
import { Modal } from '../Modal'
import { Cart } from '../Cart'
import { SearchBar } from '../SearchBar'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Select } from '../../styles/Select'

import {
  Title,
  WrappLayout,
  WrapContent,
  BusinessContent,
  BusinessCategoryProductWrapper,
  BusinessCategoriesContainer,
  BusinessCartContent,
  EmptyCart,
  EmptyBtnWrapper,
  WrapperSearch,
  BusinessMediaContent,
  DeliveryInfo,
  Description,
  FlexTabs,
  Map,
  OffersSection,
  OfferText,
  OfferTextP,
  ScheduleBlock,
  ScheduleContainer,
  ScheduleSection,
  SectionTitle,
  DeliveryContent
} from './styles'
import { Tab, Tabs } from '../../styles/Tabs'
import { AutoScroll } from '../AutoScroll'
import { BusinessReviews } from '../BusinessReviews'
import { convertHoursToMinutes, formatUrlVideo } from '../../utils'

const layoutOne = 'groceries'

export const RenderProductsLayoutUI = (props) => {
  const {
    errors,
    isError,
    isLoading,
    business,
    categoryId,
    searchValue,
    sortByValue,
    currentCart,
    businessState,
    sortByOptions,
    categoryState,
    categorySelected,
    openCategories,
    openBusinessInformation,
    isCartOnProductsList,
    handleChangeSortBy,
    errorQuantityProducts,
    handler,
    onClickCategory,
    featuredProducts,
    onProductClick,
    handleSearchRedirect,
    handleChangeSearch,
    setOpenBusinessInformation,
    handleCartOpen,
    productToIdLoading,
    businessLocation,
    businessSchedule,
    businessPhotos,
    businessVideos,
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [isCartModal, setisCartModal] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('flowers')

  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]
  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const BusinessLayout = (props) => {
    const components = {
      categories: businessLayout.layoutOne
        ? CategoriesLayoutGroceries
        : BusinessProductsCategories,
      products_list: businessLayout.layoutOne
        ? ProductListLayoutGroceries
        : BusinessProductsList
    }

    const ComponentToRender = props?.component && components[props?.component]

    return (
      props?.component && (
        <ComponentToRender {...props} />
      )
    )
  }
  const Categories = () => {
    return <FlexTabs>
      <Tabs variant='primary'>
        <Tab onClick={() => setCurrentCategory('flowers')} active={currentCategory === 'flowers'}>
          {t('PRODUCT_FLOWERS', 'Flowers')}
        </Tab>
        <Tab onClick={() => setCurrentCategory('generalInfo')} active={currentCategory === 'generalInfo'}>
          {t('PRODUCT_GENERAL_INFO', 'General Info')}
        </Tab>
        {business.reviews?.reviews && (
          <Tab onClick={() => setCurrentCategory('reviews')} active={currentCategory === 'reviews'}>
            {t('PRODUCT_REVIEWS', 'Reviews')}
          </Tab>
        )}
        {business?.offers?.length > 0 && (
          <Tab onClick={() => setCurrentCategory('offers')} active={currentCategory === 'offers'}>
            {t('PRODUCT_OFFERS', 'Offers')}
          </Tab>
        )}
      </Tabs>
    </FlexTabs>
  }
  const CategoryInners = () => {
    return <>
      {currentCategory === 'flowers' && (
        !errorQuantityProducts ? (
          <>
            {(categoryState.products.length !== 0 || searchValue) && (
              <WrapperSearch>
                <SearchBar
                  onSearch={handleChangeSearch}
                  search={searchValue}
                  placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
                  lazyLoad={businessState?.business?.lazy_load_products_recommended}
                />
                <Select
                  notAsync
                  notReload
                  options={sortByOptions}
                  defaultValue={sortByValue}
                  onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                />
              </WrapperSearch>
            )}
            {!businessLayout.layoutOne ? (
              <>
                {(business?.categories?.length !== 0) && (
                  <>
                    <BusinessProductsCategories
                      categories={[{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                      categorySelected={categorySelected}
                      onClickCategory={onClickCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                    />
                    <WrapContent>
                      <BusinessProductsList
                        categories={[
                          { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                          { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                          ...business?.categories.sort((a, b) => a.rank - b.rank)
                        ]}
                        category={categorySelected}
                        categoryState={categoryState}
                        businessId={business.id}
                        errors={errors}
                        onProductClick={onProductClick}
                        handleSearchRedirect={handleSearchRedirect}
                        featured={featuredProducts}
                        searchValue={searchValue}
                        isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                        handleClearSearch={handleChangeSearch}
                        errorQuantityProducts={errorQuantityProducts}
                        currentCart={currentCart}
                        productToIdLoading={productToIdLoading}
                      />
                    </WrapContent>
                  </>
                )}
              </>
            ) : (
              <BusinessContent>
                <BusinessCategoriesContainer>
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessLayout
                      component='categories'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      categorySelected={categorySelected}
                      onClickCategory={onClickCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                      openCategories={openCategories}
                      business={business}
                    />
                  )}
                </BusinessCategoriesContainer>
                <BusinessCategoryProductWrapper>
                  <WrapContent>
                    <BusinessLayout
                      component='products_list'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      category={categorySelected}
                      onClickCategory={onClickCategory}
                      categoriesState={props.categoriesState}
                      categoryState={categoryState}
                      businessId={business?.id}
                      errors={errors}
                      onProductClick={onProductClick}
                      handleSearchRedirect={handleSearchRedirect}
                      featured={featuredProducts}
                      searchValue={searchValue}
                      isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                      handleClearSearch={handleChangeSearch}
                      errorQuantityProducts={errorQuantityProducts}
                      business={business}
                      currentCart={currentCart}
                    />
                  </WrapContent>
                </BusinessCategoryProductWrapper>
              </BusinessContent>
            )}
          </>
        ) : (
          <NotFoundSource
            content={t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={() => handleSearchRedirect()}
          />
        )
      )}

      {currentCategory === 'generalInfo' && (
        <>
          {business.about && (
            <>
              <SectionTitle>{t('BUSINESS_ABOUT', 'Business short description')}</SectionTitle>
              <Description>{business.about}</Description>
            </>
          )}
          {business.description && (
            <>
              <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business description')}</SectionTitle>
              <Description>{business.description}</Description>
            </>
          )}
          {businessSchedule?.length > 0 && (
            <>
              <SectionTitle>{t('BUSINESS_OPENING_TIME', 'Business Opening Time')}</SectionTitle>
              <ScheduleSection>
                <ScheduleContainer>
                  <Tabs>
                    <AutoScroll modal>
                      {businessSchedule.map((schedule, i) => (
                        <ScheduleBlock key={i}>
                          <h4>{daysOfWeek[i]}</h4>
                          {schedule.enabled ? (
                            schedule.lapses.map((time, k) => (
                              <React.Fragment key={k}>
                                <p>{scheduleFormatted(time.open)}</p>
                                <p style={{
                                  borderBottom: '2px solid',
                                  borderBottomColor: theme.colors.primary,
                                  marginBottom: 10
                                }} >{scheduleFormatted(time.close)}</p>
                              </React.Fragment>
                            ))
                          ) : (
                            <p style={{ fontWeight: 500 }}>{t('CLOSED_TODAY', 'Closed Today')}</p>
                          )}
                        </ScheduleBlock>
                      ))}
                    </AutoScroll>
                  </Tabs>
                </ScheduleContainer>
              </ScheduleSection>
              <DeliveryInfo>
                <SectionTitle>{t('PRODUCT_DELIVERY_AND_PICKUP', 'Delivery and pickup time')}</SectionTitle>
                <DeliveryContent>
                  <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
                  <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
                </DeliveryContent>
              </DeliveryInfo>
            </>
          )}
          {businessPhotos?.length > 0 && (
            <BusinessMediaContent>
              <SectionTitle>{t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')}</SectionTitle>
              <div>
                {
                  businessPhotos.map((photo, i) => (
                    <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} loading='lazy' />
                  ))
                }
              </div>
            </BusinessMediaContent>
          )}
          {businessVideos?.length > 0 && (
            <BusinessMediaContent>
              <SectionTitle>{t('BUSINESS_VIDEOS', 'Business Videos')}</SectionTitle>
              <div>
                {businessVideos.map((video, i) => (
                  <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                ))}
              </div>
            </BusinessMediaContent>
          )}
          {businessLocation.location && (
            <>
              <SectionTitle>{t('BUSINESS_LOCATION', 'Business location')}</SectionTitle>
              {businessLocation.location && (
                <Map>
                  <GoogleMapsMap
                    apiKey={configs?.google_maps_api_key?.value}
                    location={businessLocation.location}
                    mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
                  />
                </Map>
              )}
            </>
          )}
        </>
      )}
      {currentCategory === 'reviews' && (
        <>
          {business.reviews?.reviews && (
            <BusinessReviews
              businessId={business.id}
              reviews={business.reviews?.reviews}
              businessName={business.name}
              stars={business.reviews?.total}
            />
          )}
        </>
      )
      }
      {currentCategory === 'offers' && (
        <OffersSection>
          <OfferText>
            <OfferTextP>{t('DISCOUNTS_OF', 'Discounts of')} {business?.name}</OfferTextP>
            <OfferTextP>{business?.address}</OfferTextP>
          </OfferText>
          <OfferTable>
            <table>
              <thead>
                <tr>
                  <th>{t('OFFERT_NAME', 'Offer Name')}</th>
                  <th>{t('OFFERT_PRICE', 'Offer Price')}</th>
                  <th>{t('OFFERT_START_DATE', 'Start Date')}</th>
                  <th>{t('OFFERT_END_DATE', 'End Date')}</th>
                </tr>
              </thead>
              <tbody>
                {business?.offers?.map(offer => (
                  <tr key={offer.id}>
                    <td>{offer.name}</td>
                    <td>
                      {offer.rate_type === 1 ? (
                        `${offer.rate} % ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
                      ) : (
                        `${parsePrice(offer.rate)} ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
                      )}
                    </td>
                    <td>{offer.start}</td>
                    <td>{offer.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </OfferTable>
        </OffersSection>
      )}
    </>
  }

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout
          isLayoutOne={businessLayout.layoutOne}
          isCartOnProductsList={isCartOnProductsList}
        >
          {!businessLayout.layoutOne && (
            <>
              <div className='bp-list'>
                <BusinessBasicInformation
                  businessState={businessState}
                  setOpenBusinessInformation={setOpenBusinessInformation}
                  openBusinessInformation={openBusinessInformation}
                />
                <Categories />
                <CategoryInners />
              </div>
              {isCartOnProductsList && currentCart?.products?.length > 0 && (
                <Cart
                  isForceOpenCart
                  cart={currentCart}
                  isCartPending={currentCart?.status === 2}
                  isProducts={currentCart.products.length}
                  isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                  handleCartOpen={(val) => handleCartOpen(val)}
                />
              )}
            </>
          )}

          {businessLayout.layoutOne && (
            <>
              <BusinessBasicInformation
                businessState={businessState}
                setOpenBusinessInformation={setOpenBusinessInformation}
                openBusinessInformation={openBusinessInformation}
              />
              <Categories />
              <CategoryInners />
            </>
          )}
        </WrappLayout>
      )}

      {isLoading && !isError && (
        <>
          <BusinessBasicInformation
            isSkeleton
            handler={handler}
            businessState={{ business: {}, loading: true }}
            openBusinessInformation={openBusinessInformation}
          />
          <BusinessProductsCategories
            isSkeleton
            categories={[]}
            openBusinessInformation={openBusinessInformation}
          />
          <WrapContent>
            <BusinessProductsList
              categories={[]}
              category={categorySelected}
              categoryState={categoryState}
              isBusinessLoading={isLoading}
              errorQuantityProducts={errorQuantityProducts}
              productToIdLoading={productToIdLoading}
            />
          </WrapContent>
        </>
      )}
      <Modal
        width='40%'
        open={isCartModal}
        onClose={() => setisCartModal(false)}
        padding='0'
      >
        <BusinessCartContent isModal>
          <Title style={{ textAlign: 'center', marginTop: '5px' }}>{t('YOUR_CART', 'Your cart')}</Title>
          {currentCart?.products?.length > 0 ? (
            <>
              <Cart
                isStore
                isCustomMode
                isForceOpenCart
                cart={currentCart}
                isCartPending={currentCart?.status === 2}
                isProducts={currentCart.products.length}
                isCartOnProductsList={isCartOnProductsList}
                handleCartOpen={handleCartOpen}
              />
            </>
          ) : (
            <EmptyCart>
              <div className='empty-content'>
                <AiOutlineShoppingCart />
                <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
              </div>
              <EmptyBtnWrapper>
                <span>{parsePrice(0)}</span>
                <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
              </EmptyBtnWrapper>
            </EmptyCart>
          )}
        </BusinessCartContent>
      </Modal>
    </>
  )
}

export const RenderProductsLayout = (props) => {
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const RenderProductsLayoutProps = {
    ...props,
    UIComponent: RenderProductsLayoutUI,
    googleMapsControls
  }
  return <BusinessInformationController {...RenderProductsLayoutProps} />
}
