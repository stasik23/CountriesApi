import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICountry } from "../../common/types";
import { Routes } from "../../common/routes";
import { fetchCountries } from "../../utils/fetchData";
import { FilterCountries } from "../FilterCountries";


export const CountriesGrid = ({ countries }: { countries: ICountry[] }) => {
    const navigate = useNavigate();
    const [gridedCountries, setGridedCountries] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCountries = async () => {
            const data = await fetchCountries();
            setGridedCountries(data);
            setLoading(false);
        };

        loadCountries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleProductClick = (countryName: string) => {
        navigate(`${Routes.Country}/${countryName}`);
    };

    return (
        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gridedCountries.map((country) => (
                <div
                    key={country.name.common}
                    className="bg-white border border-elements rounded-lg shadow-md cursor-pointer"
                    onClick={() => handleProductClick(country.name?.common)}
                >
                    {country.flags && (
                        <img
                            src={country.flags.svg}
                            alt={`${country.name} flag`}
                            className="w-full h-72 object-cover mb-4 rounded-t-lg"
                        />
                    )}
                    <div className="p-4">
                        <h3 className="text-lg text-text font-bold">{country.name?.common}</h3>
                        <p>Population: {country.population?.toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
