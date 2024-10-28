import { ICountry } from '../../types';
import data from "../../../data.json"
import { useParams } from 'react-router-dom';

export const CountryDetails = () => {
  const { country } = useParams<{ country: string }>();
  const countries = data as unknown as ICountry[];
  const selectedCountry = countries.find((c) => c.name === country);

  if (!selectedCountry) {
    return <div>Country not found</div>;
  }

  return (
    <div className="flex justify-between flex-wrap p-16 bg-gray-100">
      <div key={selectedCountry.alpha2Code} className="w-11/12 md:w-1/2 p-4">
        <img src={selectedCountry.flags?.svg} alt={`${selectedCountry.name} Flag`} className="w-full" />
        <h1 className="text-4xl font-sans mb-4">{selectedCountry.name}</h1>
        <p><strong>Native Name:</strong> {selectedCountry.nativeName}</p>
        <p><strong>Population:</strong> {selectedCountry.population?.toLocaleString()}</p>
        <p><strong>Region:</strong> {selectedCountry.region}</p>
        <p><strong>Subregion:</strong> {selectedCountry.subregion}</p>
        <p><strong>Capital:</strong> {selectedCountry.capital}</p>
        <p><strong>Top Level Domain:</strong> {Array.isArray(selectedCountry.topLevelDomain) ? selectedCountry.topLevelDomain.join(', ') : selectedCountry.topLevelDomain}</p>
        <p><strong>Currencies:</strong> {selectedCountry.currencies?.map((c) => `${c.name} (${c.symbol})`).join(', ')}</p>
        <p><strong>Languages:</strong> {selectedCountry.languages?.map((l) => l.name).join(', ')}</p>


        <div className="mt-4">
          <strong>Border Countries:</strong>
          <div className="flex space-x-3 mt-2">
            {selectedCountry.borders?.map((border: string) => (
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
