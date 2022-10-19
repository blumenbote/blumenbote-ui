import React from 'react'

import { GoogleMapsMap } from 'ordering-components'
import { useAgreement } from '../../contexts/AgreementContext'

import { WrapperGooglePlug } from './styles'

export const GoogleMaps = (props) => {
  const [isAgreement] = useAgreement()
  const { textWrapper, ...other } = props

  return (
    <>
      {isAgreement ? (
        <GoogleMapsMap {...other} />
      ) : (
        <WrapperGooglePlug>
          {textWrapper || 'confirm agreement'}
        </WrapperGooglePlug>
      )}
    </>
  )
}
