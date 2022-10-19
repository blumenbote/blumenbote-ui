import styled from 'styled-components'

export const FooterContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 30px 0;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  margin: auto;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;

  > * {
    display: block;
    text-decoration: none!important;
    color: black!important;
    font-size: 14px;
    margin: 10px 0;
  }
  
  a {
    text-decoration: none!important;
    color: black!important;
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 33%;
    margin: 0;
  }
`

export const SocialIcon = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 5px;
  color: initial;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Copy = styled.div`
  margin: auto;
  width: 90%;
  text-align: center;
  font-size: 12px;
  color: rgba(0,0,0,0.6);

  @media (min-width: 768px) {
    margin-top: 15px;
  }
`
// .footer-container {
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   width: 100%;
//   border-top: 1px solid #d9d9d9;
//   padding: 30px 0;
//   flex-wrap: wrap;
//   flex-direction: column;
//   }
//   .content {
//   margin: auto;
//   width: 70%;
//   text-align: center;
//   margin-bottom: 10px;
//   }
//   .content-children {
//   display: block;
//   text-decoration: none;
//   color: initial;
//   font-size: 14px;
//   margin: 10px 0;
//   }
//   .title {
//   font-weight: 600;
//   font-size: 16px;
//   }
//   .social-icon {
//   display: inline-block;
//   width: 24px;
//   height: 24px;
//   margin: 0 5px;
//   color: initial;
//   }
//   .icons {
//   width: 100%;
//   height: 100%;
//   }
//   a:link,
//   a:visited {
//   color: black !important;
//   text-decoration: none !important;}
//   .copy {
//   margin: auto;
//   width: 90%;
//   text-align: center;
//   font-size: 12px;
//   color: rgba(0, 0, 0, 0.6);
//   }
//   @media (min-width: 768px) {
//   .footer-container {
//   flex-direction: row;
//   }
//   .content {
//   width: 33%;
//   margin: 0;
//   }
//   .copy {
//   margin-top: 15px;
//   }
//   }