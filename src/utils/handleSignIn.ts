import { Auth } from "firebase/auth";
import { signIn } from "./SignIn";
export const handleSignIn = async (auth: Auth, email: string, password: string) => {
    signIn({ auth, email, password });
    console.log(email, password);
    return true;
};