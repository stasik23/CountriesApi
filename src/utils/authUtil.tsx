import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export const Authorized = () => {
    const [authorized, setAuthorized] = useState(false);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setAuthorized(!!user);
        });
        return () => unsub();
    }, []);
    return authorized;
};
