import { CountryDetails } from '../../components/CountiesDetails'

export const CountryPage = () => {
  return (
    <>
    <CountryDetails country={{
          name: '',
          nativeName: '',
          population: 0,
          region: '',
          subregion: '',
          capital: '',
          topLevelDomain: [],
          currencies: [],
          languages: [],
          flags: {
            png: '',
            svg: ''
          },
          borders: []
      }}/>
    </>
  )
}
