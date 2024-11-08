import { useEffect, useState } from "react"
import { CountriesGrid } from "./components/CountriesGrid"
import { FilterCountries } from "./components/FilterCountries"
import { ICountry } from "./common/types"
import { fetchCountries, fetchCountryByName } from "./utils/fetchData"

export const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [region, setRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
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

  useEffect(() => {
    const searchCountry = async () => {
      if (searchQuery) {
        const data = await fetchCountryByName(searchQuery);
        if (data) {
          setCountries([data]);
          setFilteredCountries([data]);
        }
      } else {
        const data = await fetchCountries();
        setCountries(data);
        setFilteredCountries(data);
      }
    };
    searchCountry();
  }, [searchQuery]);
    
  return (
    <>
      <FilterCountries region={region} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRegion={setRegion} onFilter={setCountries} />
      <CountriesGrid countries={filteredCountries} />
    </>
  )
}