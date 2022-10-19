import React, { createContext, useContext, useState } from 'react'

export const AgreementContext = createContext()

export const AgreementProvider = ({ children, ...props }) => {
  const cookieAgreementInLocalStorage = JSON.parse(
    window.localStorage.getItem('user-agreement')
  )
  const [isAgreement, setAgreement] = useState(cookieAgreementInLocalStorage)

  if (isAgreement && !cookieAgreementInLocalStorage) {
    window.localStorage.setItem(
      'user-agreement',
      JSON.stringify({ agreement: true })
    )
    setAgreement(true)
  }

  return (
    <AgreementContext.Provider value={[isAgreement, setAgreement]}>
      {children}
    </AgreementContext.Provider>
  )
}

export const useAgreement = () => {
  const cookieMenager = useContext(AgreementContext)
  return cookieMenager || [{}]
}
