import React, { useState, useEffect } from 'react';
import { ICountry } from '../../common/types';
import data from "../../../data.json";

interface FilterCountriesProps {
    onFilter: (filteredCountries: ICountry[]) => void;
}

export const FilterCountries: React.FC<FilterCountriesProps> = ({ onFilter }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [region, setRegion] = useState("All");

    const countries: ICountry[] = data as unknown as ICountry[];

    useEffect(() => {
        const filteredCountries = countries.filter(
            (country) =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (region === "All" || country.region === region)
        );

        onFilter(filteredCountries);
    }, [searchQuery, region, countries, onFilter]);

    return (
        <div className="font-NunitoSans p-6">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Поиск страны..."
                    className="w-full max-w-md p-2 border rounded shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="p-2 w-48 max-w-full border rounded shadow-sm ml-4"
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
        </div>
    );
};
