import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../App.css';
import { CountriesGrid } from '../components/CountriesGrid';
import { NotAuthorizedPage } from '../pages/NotAuthorized';

interface AuthRouterProps {
  children: React.ReactNode;
}

export const AuthRouter: React.FC<AuthRouterProps> = () => {
  const [Authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthorized(!!user);
    });
    return () => unsub();
  }, []);

   console.log(Authorized);
   
  if (!Authorized) { return <NotAuthorizedPage /> };


  return (
    <>
      <CountriesGrid/>
    </>
  )
}

