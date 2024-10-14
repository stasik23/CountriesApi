import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";
import { ICountry } from "../../types";

export const CountriesGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("All");

  const navigate = useNavigate();
  const countries: ICountry[] = data;

  const filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (region === "All" || country.region === region)
  );

  const handleProductClick = (countryName: string) => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="font-NunitoSans p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full max-w-sm p-2 border rounded shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

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

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries?.map((country) => (
          <div
            key={country?.name}
            className="bg-background border border-elements rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => handleProductClick(country.name)}
          >
            {country.flags && (
              <img
                src={country?.flags.svg}
                alt={`${country?.name} flag`}
                className="w-full h-72 object-cover mb-4"
              />
            )}
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
