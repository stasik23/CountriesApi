import { useState } from "react"
import { CountriesGrid } from "./components/CountriesGrid"
import { FilterCountries } from "./components/FilterCountries"
import { ICountry } from "./common/types"

export const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([])

  return (
    <>
      <FilterCountries onFilter={setCountries} />
      <CountriesGrid countries={countries} />
    </>
  )
}

export default App
