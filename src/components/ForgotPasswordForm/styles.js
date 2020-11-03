import styled, { css } from 'styled-components'

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: ${({ isPopup }) => isPopup ? '100vh' : 'calc(100vh - 97px)'};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    min-height: ${({ isPopup }) => isPopup ? '90vh' : 'calc(100vh - 65px);'};
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSide = styled(Side)`
  height: ${({ isPopup }) => isPopup ? '50vh' : 'calc(40vh - 65px)'};
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryContrast};
  background-color:  ${props => props.theme.colors.primary};
  padding-bottom: 5px;

  @media (min-width: 768px) {
    width: 55%;
    height: ${({ isPopup }) => isPopup ? 'auto' : 'calc(100vh - 65px)'};
  }
`

export const TitleHeroSide = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 22px;
  }

  p {
    font-size: 13px;
  }

  h1,
  p {
    margin: 0px;
    color: #FFF;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: 15px 0;

  img {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 45%;
    margin: auto;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '70%'};
  display: flex;
  flex-direction: column;

  * {
    padding: 8px 20px;
    margin: 10px;
  }

  input:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 768px) {
    ${({ isPopup }) => isPopup && css`
      flex-direction: row;
      font-size: 13px;
    `};
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`
