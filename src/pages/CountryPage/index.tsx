import { useParams } from 'react-router-dom';
import { CountryDetails } from '../../components/CountiesDetails';

export const CountryPage = () => {
  const { countryName } = useParams();
  
  if (!countryName) {
    return <div>Country not found</div>;
  }

  return <CountryDetails countryName={countryName} />;
};
