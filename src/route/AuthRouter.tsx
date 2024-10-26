import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'
import { CountriesGrid } from '../components/CountriesGrid'
import { NotAuthorized } from '../pages/NotAuthorized';

function App() {
  const [Authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthorized(!!user);
    });
    return () => unsub();
  }, []);


  if (!Authorized) { <NotAuthorized /> };


  return (
    <>
      <CountriesGrid />
    </>
  )
}

export default App
