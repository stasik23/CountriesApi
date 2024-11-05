import React, { useState } from 'react';
import { FilterCountriesProps } from '../../common/filter';

export const FilterCountries: React.FC<FilterCountriesProps> = ({ region, setRegion }) => {
    const [searchQuery, setSearchQuery] = useState("");

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
