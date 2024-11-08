import { useNavigate } from "react-router-dom";
import { ICountry } from "../../common/types";
import { Routes } from "../../common/routes";


export const CountriesGrid = ({ countries }: { countries: ICountry[] }) => {
    const navigate = useNavigate();

    console.log(countries);

    const handleProductClick = (countryName: string) => {
        navigate(`${Routes.Country}/${countryName}`);
    };

    return (

        <div className="grid gap-[56px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[46px] ">
            {countries.map((country) => (
                <div
                    key={country.name.common}
                    className="bg-white font-NunitoSans rounded-[5px] shadow-md cursor-pointer max-w-[600px] hover:shadow-xl transition-shadow"
                    onClick={() => handleProductClick(country.name?.common)}
                >
                    {country.flags && (
                        <img
                            src={country.flags.svg}
                            alt={`${country.name} flag`}
                            className="w-full h-[350px] border-b-[1px] object-cover rounded-t-[5px]"
                        />
                    )}
                    <div className="p-4 pb-[46px]">
                        <h3 className="text-lg text-text font-extrabold mb-4">{country.name?.common}</h3>
                        <p className="text-sm mb-2"><span className="font-semibold">Population:</span> {country.population?.toLocaleString()}</p>
                        <p className="text-sm mb-2"><span className="font-semibold">Region:</span> {country.region}</p>
                        <p className="text-sm"><span className="font-semibold">Capital:</span> {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
