import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding: 50px 20px 20px;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 769px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    flex-wrap: nowrap;
    overflow: auto;
    max-height: 70vh;
  }
`

export const WrapperImage = styled.div`
  width: calc(100% + 40px);
  margin-top: 20px;
  margin-left: -20px;
  position: relative;
  height: 320px;
`

export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;
  margin-top: 18px;

  h1 {
    font-weight: 600;
    font-size: 28px;
    color: ${props => props.theme?.colors.darkTextColor};
    margin-top: 0;
    margin-bottom: 5px;
  }

  .price-wrapper {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      color: ${props => props.theme?.colors.darkTextColor};
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 5px;
      `}
    }

    .price-discount {
      font-size: 14px;
      color: #909BA9;
    }
  }
  p {
    font-size: 16px;
    color: #909BA9;
    margin-top: 0px;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  margin-bottom: 20px;
  @media (min-width: 1201px) {
    width: calc(100% - 25px);
  }
`

export const ProductEdition = styled.div`
  margin-top: 20px;
`

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
  color: #333333;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  @media (min-width: 577px) {
    margin-bottom: 62px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0px;
    padding-bottom: 10px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  position: fixed;
  bottom: -19px;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.price {
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  div.incdec-control {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }

  svg.disabled {
    pointer-events: none;
  }

  button.add {
    width: 90%;
    padding: 5px 10px;
    margin-top: 10px;
    position: relative;

    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 577px) {
    position: sticky;
    flex-direction: row;
    justify-content: space-between;

    div.price {
      width: 20%;
    }

    button.add {
      width: 50%;
      margin-top: 0;
    }

    div.incdec-control {
      width: 20%;
    }
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin: auto;

  span {
    margin-bottom: 10px;
  }
`

export const WrapperSubOption = styled.div`
  border-radius: 10px;
  &.error {
    background-color: ${lighten(0.58, '#A52121')};
  }
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`

export const SkuContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }

  p {
    font-size: 14px;
  }
`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const ProductTabContainer = styled.div`
  border-bottom: 1px solid #E9ECEF;
`

export const Divider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #F8F9FA;
`

export const ProductShareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  ${props => props.theme?.rtl && css`
    padding-left: 20px;
    padding-right: 0;
  `}

  @media (max-width: 768px) {
    > div {
      right: 16px;
      top: 33px;
      left: auto;
    }
  }

`