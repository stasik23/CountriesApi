import { Auth } from "firebase/auth";
import { SignIn } from "./SignIn";
import { useNavigate } from "react-router-dom";

export const handleSignIn = async (auth: Auth, email: string, password: string) => {
    const navigate = useNavigate();
    SignIn({ auth, email, password });
    navigate('/');
    console.log(email, password);
};