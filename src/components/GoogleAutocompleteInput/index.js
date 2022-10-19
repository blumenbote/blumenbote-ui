import React from 'react'
import PropTypes from 'prop-types'
import { GoogleAutocompleteInput as GoogleInput } from 'ordering-components'
import { useAgreement } from '../../contexts/AgreementContext'

export const GoogleAutocompleteInput = (props) => {
  const { className, placeholder } = props
  const [isAgreement] = useAgreement()

  return isAgreement ? (
    <GoogleInput {...props} />
  ) : (
    <input className={className} placeholder={placeholder} disabled='true' />
  )
}

GoogleAutocompleteInput.propTypes = {
  onChangeAddress: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
