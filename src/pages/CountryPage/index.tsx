import React from 'react'
import { CountryDetails } from '../../components/CountiesDetails'

export const CountryPage = () => {
  return (
    <>
    <CountryDetails country={{
          name: '',
          nativeName: '',
          population: 0,
          region: '',
          subRegion: '',
          capital: '',
          topLevelDomain: '',
          currencies: '',
          languages: [],
          flag: '',
          borderCountries: []
      }}/>
    </>
  )
}
