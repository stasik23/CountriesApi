import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const Authorized = (authorized: boolean, setAuthorized: (authorized: boolean) => void) => {
    const unsub = onAuthStateChanged(auth, (user) => {
        setAuthorized(!!user);
    });
    return () => unsub();
};
