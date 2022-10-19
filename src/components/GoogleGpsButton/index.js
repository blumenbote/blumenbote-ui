import React from 'react'
import { GoogleGpsButton as GpsButton } from 'ordering-components'
import { GpsButtonStyle } from './styles'
import { useAgreement } from '../../contexts/AgreementContext'

const GoogleGpsButtonUI = (props) => {
  const {
    handleGPS,
    isGoogleButton,
    googleReady,
    isLoading,
    IconButton,
    IconLoadingButton
  } = props

  return (
    <GpsButtonStyle
      className={props.className || ''}
      type='button'
      disabled={(isGoogleButton && !googleReady) || isLoading}
      onClick={handleGPS}
    >
      {isLoading ? (
        IconLoadingButton ? (
          <IconLoadingButton />
        ) : (
          '...'
        )
      ) : IconButton ? (
        <IconButton />
      ) : (
        'GPS'
      )}
    </GpsButtonStyle>
  )
}

export const GoogleGpsButton = (props) => {
  const [isAgreement] = useAgreement()
  const gpsButtonProps = {
    ...props,
    UIComponent: GoogleGpsButtonUI
  }
  return isAgreement && <GpsButton {...gpsButtonProps} />
}
