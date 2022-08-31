import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`
export const BusinessHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;
  justify-content: left;
  align-items: flex-end;
  position: relative;
  background-color: #FFF;

  img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: calc(100% + 50px);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}
`

export const HeaderImage = styled.div`
  width: 20%;
  margin-top: auto;
  > img {
    width: 100%;
    height: 100%;
  }
`

export const BusinessBasicContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  max-height: 90px;
  width: 340px;
  z-index: 1;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`
export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  ${props => props.theme?.rtl && css`
    padding: 0px 16px 0px 5px;
  `}
  div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    h5,
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 300;
      svg {
        margin-right: 4px;
        margin-bottom: 1px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}
        &.start {
          color: #FFC917;
        }
        &.popup {
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
          transform: rotate(180deg);
        }
      }
    }
    p.bold {
      font-weight: 600;
    }
    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`

export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5 {
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.3em;
    > svg {
      vertical-align: middle;
    }
  }
`

export const BusinessContent = styled.div`
  padding: 0 10px;
  background: #FFF;
  @media(min-width: 768px){
    padding: 0 20px;
  }
`

export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  z-index: 1;
  background: rgba(0,0,0,0.3);
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  @media (min-width: 578px){
    right: 10px;
    ${props => props.theme?.rtl && css`
    left: 10px;
    right: initial;
  `}
  }
  @media (min-width: 768px){
    right: 5px;
    ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  }
`


export const ImageContainer = styled.div` 
  max-height: 500px;
  img{
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`

export const OfferTable = styled.div`
  width: 100%;
  margin-top: 15px;

  table>tbody>tr>td, table>tbody>tr>th,
  table>thead>tr>td, table>thead>tr>th
  {
    border-top: 0
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
    border: 1px solid  ${props => props.theme.colors.disabled};

    thead {
      background-color: ${props => props.theme.colors.disabled};
    }
    tr th {
      font-size: 15px;
    }
    tr td {
      font-size: 12px;
    }
    td span {
      unicode-bidi: bidi-override;
    }
    tr td,
    tr th {
      text-align: left;
      padding: 10px;
      ${props => props.theme?.rtl && css`
        text-align: right;
      `}
    }
  }
`
