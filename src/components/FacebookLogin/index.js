import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import { FacebookButton } from './styles'
import { useAgreement } from '../../contexts/AgreementContext'

const FacebookLoginButtonUI = (props) => {
  const [isAgreement] = useAgreement()
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <FacebookButton
      initialIcon
      color='secondary'
      onClick={() => handleFacebookLogin()}
    >
      <FaFacebook />
      <div>{t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}</div>
    </FacebookButton>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }

  return isAgreement ? (
    <FacebookLoginController {...facebookLoginProps} />
  ) : (
    <FacebookButton />
  )
}
