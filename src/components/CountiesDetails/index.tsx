import { useEffect, useState } from 'react';
import { ICountry } from '../../common/types';
import { fetchCountryByName } from '../../utils/fetchData';
import { BackButton } from '../BackButton';

export const CountryDetails = ({ countryName }: { countryName: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountry = async () => {
      if (countryName) {
        try {
          const data = await fetchCountryByName(countryName);
          setSelectedCountry(data);
        } catch (error) {
          console.error('Error fetching country:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCountry();
  }, [countryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedCountry) {
    return <div>Country not found</div>;
  }
  return (
    <div className="font-NunitoSans p-16">
      <BackButton />

      <div className="flex gap-32">
        <div className="w-1/2">
          <img 
            src={selectedCountry.flags?.svg} 
            alt={`${selectedCountry.name} Flag`} 
            className="w-full h-auto"
          />
        </div>

        <div className="w-1/2 pt-10">
          <h1 className="text-3xl font-bold mb-8">{selectedCountry.name.common}</h1>
          
          <div className="flex gap-24">
            <div className="space-y-3">
              <p><span className="font-semibold">Native Name:</span> {selectedCountry.name.official}</p>
              <p><span className="font-semibold">Population:</span> {selectedCountry.population?.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {selectedCountry.region}</p>
              <p><span className="font-semibold">Subregion:</span> {selectedCountry.subregion}</p>
              <p><span className="font-semibold">Capital:</span> {selectedCountry.capital}</p>
            </div>
            
            <div className="space-y-3">
              <p><span className="font-semibold">Top Level Domain:</span> {selectedCountry.tld?.join(', ')}</p>
              <p><span className="font-semibold">Currencies:</span> {Object.values(selectedCountry.currencies || {})
                .map((c: any) => `${c.name} (${c.symbol})`).join(', ')}</p>
              <p><span className="font-semibold">Languages:</span> {Object.values(selectedCountry.languages || {}).join(', ')}</p>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <span className="font-semibold">Border Countries:</span>
            <div className="flex flex-wrap gap-2">
              {selectedCountry.borders?.map((border: string) => (
                <span 
                  key={border} 
                  className="px-6 py-1 border-2 bg-white shadow-sm rounded text-sm hover:shadow-lg transition-shadow"
                >
                  <a href={`/country/${border}`}>{border}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
