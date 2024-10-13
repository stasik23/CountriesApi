import { ICountry } from '../../types';
import data from "../../../data.json"

const countries: ICountry[] = data;

export const CountryDetails = () => {
  return (
    <div className="flex flex-wrap p-8 bg-gray-100">
      {countries && countries.map((country: ICountry) => (
        <div key={country.alpha2Code} className="w-full md:w-1/2 p-4">
          <img src={country.flags?.svg} alt={`${country.name} Flag`} className="w-full" />
          <h1 className="text-4xl font-sans mb-4">{country.name}</h1>
          <p><strong>Native Name:</strong> {country.nativeName}</p>
          <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Top Level Domain:</strong> {Array.isArray(country.topLevelDomain) ? country.topLevelDomain.join(', ') : country.topLevelDomain}</p>
          <p><strong>Currencies:</strong> {country.currencies?.map((c) => `${c.name} (${c.symbol})`).join(', ')}</p>
          <p><strong>Languages:</strong> {country.languages?.map((l) => l.name).join(', ')}</p>

          <div className="mt-4">
            <strong>Border Countries:</strong>
            <div className="flex space-x-3 mt-2">
              {country.borders?.map((border: string) => (
                <span key={border} className="border rounded px-4 py-1 bg-primary shadow-sm">
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
