import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { NotAuthorized } from '../pages/NotAuthorized';
import { Loader } from '../components/Loader';
// import { CountriesGrid } from '../components/CountriesGrid';

export const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthorized(!!user);
      setLoading(false);
      console.log(user);
      console.log(children);
    });
    return () => unsub();
  }, []);

  if (loading) { 
    return <Loader /> 
  }
  if (!authorized) { 
    return <NotAuthorized /> 
  }

  if (!children) {
    console.warn('No children passed to AuthRouter');
    return null;
  }

  return <>{children}</>;
}

