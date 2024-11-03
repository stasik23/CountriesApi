import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../App.css';
import { CountriesGrid } from '../components/CountriesGrid';
import { NotAuthorized } from '../pages/NotAuthorized';
import { Loader } from '../components/Loader';

interface AuthRouterProps {
  // children: React.ReactNode;
}

export const AuthRouter: React.FC<AuthRouterProps> = () => { //{children}
  const [Authorized, setAuthorized] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthorized(!!user);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (Loading) { return <Loader /> }

  if (!Authorized) { return <NotAuthorized /> }

  return (
    <>
      {/* {children} */}
      <CountriesGrid />
    </>
  )
}

