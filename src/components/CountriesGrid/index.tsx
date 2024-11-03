import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterCountries } from "../FilterCountries";
import { ICountry } from "../../common/types";
import { Routes } from "../../common/routes";

export const CountriesGrid = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const navigate = useNavigate();

    const handleProductClick = (countryName: string) => {
        navigate(`${Routes.Country}/${countryName}`);
    };

    return (
        <>
            <FilterCountries onFilter={setCountries} />
            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {countries.map((country) => (
                    <div
                        key={country.name.common}
                        className="bg-background border border-elements rounded-lg shadow-md cursor-pointer"
                        onClick={() => handleProductClick(country.name.common)}
                    >
                        {country.flags && (
                            <img
                                src={country.flags.svg}
                                alt={`${country.name} flag`}
                                className="w-full h-72 object-cover mb-4 rounded-t-lg"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg text-text font-bold">{country.name.common}</h3>
                            <p>Population: {country.population?.toLocaleString()}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
