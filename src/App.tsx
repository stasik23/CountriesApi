import { useEffect, useState } from "react"
import { CountriesGrid } from "./components/CountriesGrid"
import { FilterCountries } from "./components/FilterCountries"
import { ICountry } from "./common/types"
import { fetchCountries } from "./utils/fetchData"

export const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [region, setRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);

  // TODO вынести весь функционал который отвечает за фильтрацию и получение стран, добавить второй useEffect в етом файле который будет срабатывать при изменении фильтров

  useEffect(() => {
    if (region === "All") {
      setFilteredCountries(countries);
    } else {
      const filterCountries = countries.filter((country) => country.region === region);
      setFilteredCountries(filterCountries);
    }
  }, [filteredCountries, region])

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries()
      setCountries(data);
      setFilteredCountries(data);
    };
    loadCountries()
  }, []);

  console.log(countries);

  return (
    <>
      <FilterCountries region={region} setRegion={setRegion} onFilter={setCountries} />
      <CountriesGrid countries={filteredCountries} />
    </>
  )
}