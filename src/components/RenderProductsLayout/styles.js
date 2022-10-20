import styled, { css } from 'styled-components'

import { BusinessSearch } from '../SearchBar/styles'

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
`

export const WrappLayout = styled.div`
  ${({ isCartOnProductsList }) =>
    isCartOnProductsList &&
    css`
      display: flex;
      flex-direction: column;
      width: 100%;

      .bp-list,
      .cart {
        width: 100%;
      }

      @media (min-width: 870px) {
        flex-direction: row;
        .bp-list {
          width: 55%;
        }
        .cart {
          width: calc(45% - 20px);
          margin-left: 20px;
        }
      }

      @media (min-width: 1024px) {
        .bp-list {
          width: 60%;
        }
        .cart {
          width: calc(40% - 20px);
        }
      }

      @media (min-width: 1200px) {
        .bp-list {
          width: 70%;
        }
        .cart {
          width: calc(30% - 20px);
        }
      }
    `}
`

export const WrapperSearch = styled.div`
  /* margin: 15px 0px 0px; */
  display: flex;
  flex: 3 0 50%;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5px;

  .search-bar {
    margin-right: 10px;
    ${(props) =>
      props.theme?.rtl &&
      css`
        margin-left: 10px;
        margin-right: 0;
      `}
  }

  div:last-child {
    text-align: right;

    ${(props) =>
      props.theme?.rtl &&
      css`
        text-align: left;
      `}
  }
  span {
    transform: translate(-40%, 1%);
  }

  ${BusinessSearch} {
    margin-right: 8px;
    width: 200px;
    &:focus {
      width: 50%;
    }
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
`

export const WrapperSearchAndBusinessCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 960px) {
    align-items: unset;
    flex-direction: column-reverse;
  }
`

export const WrapContent = styled.div`
  background: ${(props) => props.theme.colors.backgroundPage};
`

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 701px) {
    flex-direction: row;
  }
`

export const BusinessCategoryProductWrapper = styled.div`
  width: 100%;

  /* Hide scrollbar for Chrome, Safari and Opera */
  .category-lists::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .category-lists {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`

export const BusinessCategoriesContainer = styled.div`
  margin: 0;
  width: 100%;

  @media (min-width: 701px) {
    width: 30%;

    ${(props) =>
      props.theme?.rtl &&
      css`
        margin-right: 25px;
        margin-left: 0;
      `}
  }
`

export const BusinessCartContainer = styled(BusinessCategoriesContainer)`
  display: none;

  @media (min-width: 500px) {
    display: block;
  }
`

export const BusinessCartContent = styled.div`
  background: white;
  padding: 30px;
  position: relative;

  .product.accordion {
    margin: 0;
  }

  .accordion.active {
    padding: 10px 0;
  }

  ${({ isModal }) =>
    !isModal &&
    css`
      border: 1px solid #e9ecef;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 7.6px;
    `}

  @media (min-width: 1200px) {
    position: sticky;
    top: 0;
  }

  @media (min-width: 768px) {
    padding: 35px 30px;
  }
`

export const EmptyCart = styled.div`
  .empty-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 45px;
      color: #b1bccc;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      color: #b1bccc;
      margin: 23px 0 0 0;
    }
  }
`

export const EmptyBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  span {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.colors.darkTextColor};
  }

  button {
    color: #748194;
    background: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 7.6px;
    height: 44px;
    font-size: 14px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const BusinessMediaContent = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    > img,
    > iframe {
      object-fit: cover;
      border-radius: 10px;
      margin: 10px 10px;
      width: calc(100% - 12px);
      cursor: pointer;

      @media (min-width: 481px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 681px) {
        width: calc(33% - 20px);
      }

      @media (min-width: 993px) {
        width: calc(25% - 20px);
      }
    }
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  div {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    div {
      width: 50%;
    }
  }
`

export const DeliveryContent = styled.div`
  h5:first-child {
    margin-top: 0;
  }
`

export const Description = styled.p`
  margin: 0 10px;
`

export const FlexTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 10%;
  padding-top: 30px;
  overflow-x: auto;
  white-space: nowrap;
`

export const Map = styled.div`
  width: 100%;
  height: 50vh;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const OffersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
`

export const OfferText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const OfferTextP = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
`

export const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 15px;
  border-right: 1px solid #ccc;
  width: 10%;
  min-width: 80px;
  ${(props) =>
    props.theme?.rtl &&
    css`
      border-left: 1px solid #ccc;
      border-right: none;
    `}
  h4 {
    margin: 0px 0px 3px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme?.colors?.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }

  &:last-child {
    border: 0;
  }
  @media (min-width: 768px) {
    min-width: initial;
  }
`

export const SectionTitle = styled.h3`
  font-weight: bold;
`

export const ScheduleSection = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

export const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  > div {
    width: 100%;
  }
`

export const OfferTable = styled.div
