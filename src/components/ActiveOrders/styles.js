import styled, { css } from 'styled-components'

export const OpenOrder = styled.div`
  height: 15%;
  width: 90%;
  margin: auto;
  button {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }

  @media (min-width: 480px){
    button{
      font-size: 1em
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
`

export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  h2 {
    font-size: 14px;
    margin-block-end: 1em;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0;
    margin-block-start: 1em;
    color: #ff9300;
    font-size: 0.8em;
  }

  @media (min-width: 768px){
    p{
      font-size: 1em;
    }
  }
`

export const Logo = styled.div`
  width: 55px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  @media (min-width: 480px){
    width: 75px;
   height: 75px;
  }
`

export const Card = styled.div`
  min-width: 290px;
  width: 290px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: 250px;
  border-radius: 16px;
  text-align: left;

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => props.nobg && css`
    background: transparent;
  `}

  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media (min-width: 360px){
    min-width: 300px;
    width: 300px;
  }

  @media (min-width: 480px){
    min-width: 400px;
    width: 400px;
  }
`

export const Map = styled.div`
  width: 100%;
  height: 40%;
  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
`