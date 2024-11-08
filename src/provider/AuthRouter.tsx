import { useEffect, useState } from 'react';
import { NotAuthorizedPage } from '../pages/NotAuthorized';
import { Authorized } from '../utils/authUtil';
// import { CountriesGrid } from '../components/CountriesGrid';

export const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuthorized = Authorized(authorized, setAuthorized);
    setAuthorized(authorized);
  }, []);

  if (!authorized) { 
    return <NotAuthorizedPage /> 
  }

  if (!children) {
    console.warn('No children passed to AuthRouter');
    return null;
  }

  return <>{children}</>;
}

