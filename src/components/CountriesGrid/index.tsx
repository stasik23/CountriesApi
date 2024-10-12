import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import data from "../../../data.json"
import { ICountry } from "../../types";

console.log(data);


// type Country = {
//   name: string;
//   population: number;
//   region: string;
//   capital: string;
//   flags: string;
// };

// const fetchCountries = async (): Promise<Country[]> => {
//   const { data } = await axios.get("https://restcountries.com/v2/all");
//   return data;
// };

export const CountriesGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [isLoading, setisLoading]= useState(false);
  const [region, setRegion] = useState("All");

  // Fetch countries data using TanStack Query
  // const { data: countries, isLoading, error } = useQuery<Country[]>(["countries"], fetchCountries);
  const countries: ICountry[] = data;

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching data</div>;

  // const filteredCountries = countries?.filter(
  //   (country: { name: string; region: string; }) =>
  //     country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  //     (region === "All" || country.region === region)
  // );
  const filteredCountries = countries?.filter(
    (countries) =>
      countries.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (region === "All" || countries.region === region)
  );

  return (
    <div className="font-NunitoSans p-6">
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full max-w-sm p-2 border rounded shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Region Filter */}
        <select
          className="p-2 border rounded shadow-sm ml-4"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Grid of countries */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries?.map((country) => (
          <div key={country?.name} className="bg-background border border-elements rounded-lg shadow-md p-4">
            {country.flags && <img src={country?.flags.svg} alt={`${country?.name} flag`} className="w-full h-72 object-cover mb-4" />}
            <h3 className="text-lg text-text font-bold">{country?.name}</h3>
            <p>Population: {country.population && country?.population?.toLocaleString()}</p>
            <p>Region: {country?.region}</p>
            <p>Capital: {country?.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
