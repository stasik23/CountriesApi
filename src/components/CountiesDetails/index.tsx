import React from 'react';

interface CountryDetailsProps {
  country: {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: string[];
    flag: string;
    borderCountries: string[];
  };
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div className="flex flex-wrap p-8 bg-gray-100">
      <div className="w-full md:w-1/2">
        <img src={country.flag} alt={`${country.name} Flag`} className="w-full" />
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-sans mb-4">{country.name}</h1>
        <p><strong>Native Name:</strong> {country.nativeName}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Sub Region:</strong> {country.subRegion}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
        <p><strong>Currencies:</strong> {country.currencies}</p>
        <p><strong>Languages:</strong> {country.languages.join(', ')}</p>

        <div className="mt-4">
          <strong>Border Countries:</strong>
          <div className="flex space-x-3 mt-2">
            {country.borderCountries.map((border) => (
              <span key={border} className="border rounded px-4 py-1 bg-primary shadow-sm">
                {border}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
