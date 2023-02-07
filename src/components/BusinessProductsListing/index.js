import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {
  useEvent,
  useLanguage,
  useOrder,
  useSession,
  useUtils,
  useConfig,
  useCity
} from 'ordering-components'

import { ProductsContainer, ProductLoading, SkeletonItem } from './styles'

import { NotFoundSource } from '../NotFoundSource'
import { PageNotFound } from '../PageNotFound'
import { ProductForm } from '../ProductForm'
import { FloatingButton } from '../FloatingButton'
import { Modal } from '../Modal'
import { UpsellingPage } from '../UpsellingPage'
import { BusinessAndProductList } from "../BusinessAndProductList"

import { RenderProductsLayout } from '../RenderProductsLayout'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    sortByValue,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    openCategories,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    onProductRedirect,
    onCheckoutRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    handleChangeSortBy,
    isCartOnProductsList,
    city,
    errorQuantityProducts
  } = props

  const [{ configs }] = useConfig()
  const isQuickAddProduct = configs?.add_product_with_one_click?.value === '1'
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }, { addProduct, updateProduct }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const [cities] = useCity()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [productToIdLoading, setProductIdToLoading] = useState(null)
  const [errorBusinessURL, setErrorBusinessURL] = useState(false)

  const currentCart =
    Object.values(carts).find(
      (cart) => cart?.business?.slug === business?.slug
    ) ?? {}
  const hasScrollBar =
    document.documentElement.clientHeight < document.body.offsetHeight

  const sortByOptions = [
    {
      value: null,
      content: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By'),
      showOnSelected: t(
        'SORT_BY',
        theme?.defaultLanguages?.SORT_BY || 'Sort By'
      )
    },
    {
      value: 'rank',
      content: t('RANK', theme?.defaultLanguages?.RANK || 'Rank'),
      showOnSelected: t('RANK', theme?.defaultLanguages?.RANK || 'Rank')
    },
    {
      value: 'a-z',
      content: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z'),
      showOnSelected: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z')
    }
  ]

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const onProductClick = async (product) => {
    if (
      product.extras.length === 0 &&
      !product.inventoried &&
      auth &&
      isQuickAddProduct
    ) {
      setProductIdToLoading(product.id)
      const isProductAddedToCart = currentCart?.products?.find(
        (Cproduct) => Cproduct.id === product.id
      )
      const productQuantity = isProductAddedToCart?.quantity
      const addCurrentProduct = {
        ...product,
        quantity: 1
      }
      const updateCurrentProduct = {
        id: product.id,
        code: isProductAddedToCart?.code,
        quantity: productQuantity + 1
      }
      const cartData = currentCart?.business_id
        ? currentCart
        : { business_id: business.id }
      if (isProductAddedToCart) {
        await updateProduct(updateCurrentProduct, cartData, isQuickAddProduct)
      } else {
        await addProduct(addCurrentProduct, cartData, isQuickAddProduct)
      }
      setProductIdToLoading(null)
    } else {
      onProductRedirect({
        slug: business?.slug,
        product: product.id,
        category: product.category_id,
        city: cities.get(business?.city_id),
      })
      setCurProduct(product)
      setModalIsOpen(true)
      events.emit("product_clicked", product)
    }
  }
  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
      onProductRedirect({
        slug: business?.slug,
        city: cities.get(business?.city_id),
      })
    }
  }

  const closeModalProductForm = () => {
    setModalIsOpen(false)
    handleUpdateInitialRender(false)
    updateProductModal(null)
    setCurProduct(null)
    onProductRedirect({
      slug: business?.slug,
      city: cities.get(business?.city_id),
    })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop =
      window.innerHeight +
      document.documentElement?.scrollTop +
      PIXELS_TO_SCROLL
    const badScrollPosition =
      innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(
      categoryState.pagination.totalPages ===
      categoryState.pagination.currentPage
    )
    if (badScrollPosition || categoryState.loading || !hasMore || loading)
      return
    getNextProducts()
  }, [categoryState])

  const handleChangePage = (data) => {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false)
    }
  }

  const handleUpsellingPage = () => {
    onCheckoutRedirect(currentCart?.uuid)
    setOpenUpselling(false)
    setCanOpenUpselling(false)
  }

  useEffect(() => {
    if (categoryId && productId && isInitialRender) {
      if (productModal?.product?.id) {
        setCurProduct(productModal.product)
      }
      setModalIsOpen(true)
    }
  }, [productModal])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
    events.emit("get_current_view")
  }, [])

  useEffect(() => {
    events.on("change_view", handleChangePage)
    return () => {
      events.off("change_view", handleChangePage)
    }
  }, [openProduct])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const hasMore = !(
      categoryState.pagination.totalPages ===
      categoryState.pagination.currentPage
    )

    if (
      categoryState?.loading ||
      loading ||
      hasScrollBar ||
      !hasMore ||
      categorySelected?.name === 'All'
    )
      return
    getNextProducts()
  }, [hasScrollBar, categoryState?.loading])

  useEffect(() => {
    if (
      city &&
      business &&
      business.city &&
      cities.get(business.city_id) !== city
    ) {
      setErrorBusinessURL(true)
    }
  }, [city, business])

  return (
    <>
      <ProductsContainer>
        {(!loading && !business) || errorBusinessURL ? (
          <PageNotFound />
        ) : (
          <RenderProductsLayout
            errors={errors}
            isError={error}
            isLoading={loading}
            business={business}
            categoryId={categoryId}
            searchValue={searchValue}
            sortByValue={sortByValue}
            currentCart={currentCart}
            businessState={businessState}
            sortByOptions={sortByOptions}
            categoryState={categoryState}
            categoriesState={props.categoriesState}
            categorySelected={categorySelected}
            openCategories={openCategories}
            openBusinessInformation={openBusinessInformation}
            isCartOnProductsList={
              isCartOnProductsList && currentCart?.products?.length > 0
            }
            handleChangeSortBy={handleChangeSortBy}
            errorQuantityProducts={errorQuantityProducts}
            onClickCategory={handleChangeCategory}
            featuredProducts={featuredProducts}
            handler={handler}
            onProductClick={onProductClick}
            handleSearchRedirect={handleSearchRedirect}
            handleChangeSearch={handleChangeSearch}
            setOpenBusinessInformation={setOpenBusinessInformation}
            productToIdLoading={productToIdLoading}
            handleCartOpen={(val) => setIsCartOpen(val)}
          />
        )}
      </ProductsContainer>

      {currentCart?.products?.length > 0 && auth && !isCartOpen && (
        <FloatingButton
          btnText={
            !currentCart?.valid_maximum
              ? `${t(
                  'MAXIMUM_SUBTOTAL_ORDER',
                  theme?.defaultLanguages?.MAXIMUM_SUBTOTAL_ORDER ||
                    'Maximum subtotal order'
                )}: ${parsePrice(currentCart?.maximum)}`
              : !currentCart?.valid_minimum &&
                !(
                  currentCart?.discount_type === 1 &&
                  currentCart?.discount_rate === 100
                )
              ? `${t(
                  'MINIMUN_SUBTOTAL_ORDER',
                  theme?.defaultLanguages?.MINIMUN_SUBTOTAL_ORDER ||
                    'Minimum subtotal order:'
                )} ${parsePrice(currentCart?.minimum)}`
              : !openUpselling ^ canOpenUpselling
              ? t(
                  'VIEW_ORDER',
                  theme?.defaultLanguages?.VIEW_ORDER || 'View Order'
                )
              : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')
          }
          isSecondaryBtn={
            !currentCart?.valid_maximum ||
            (!currentCart?.valid_minimum &&
              !(
                currentCart?.discount_type === 1 &&
                currentCart?.discount_rate === 100
              ))
          }
          btnValue={currentCart?.products?.length}
          handleClick={() => setOpenUpselling(true)}
          disabled={
            openUpselling ||
            !currentCart?.valid_maximum ||
            (!currentCart?.valid_minimum &&
              !(
                currentCart?.discount_type === 1 &&
                currentCart?.discount_rate === 100
              ))
          }
        />
      )}

      <Modal
        width='70%'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
      >
        {productModal.loading && !productModal.error && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} count={8} />
            </SkeletonItem>
          </ProductLoading>
        )}

        {productModal.error && productModal.error.length > 0 && (
          <NotFoundSource
            content={productModal.error[0]?.message || productModal.error[0]}
          />
        )}

        {isInitialRender &&
          !productModal.loading &&
          !productModal.error &&
          !productModal.product && (
            <NotFoundSource
              content={t(
                'ERROR_GET_PRODUCT',
                theme?.defaultLanguages?.ERROR_GET_PRODUCT ||
                  "Sorry, we couldn't find the requested product."
              )}
            />
          )}
        {(productModal.product || curProduct) && (
          <ProductForm
            businessSlug={business?.slug}
            product={productModal.product || curProduct}
            businessId={business?.id}
            onSave={handlerProductAction}
          />
        )}
      </Modal>

      {currentCart?.products && openUpselling && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          business={currentCart?.business}
          cartProducts={currentCart?.products}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }

  return <BusinessAndProductList {...businessProductslistingProps} />
}
