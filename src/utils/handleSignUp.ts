import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const handleSignUp = async (auth: Auth, regEmail: string, regPassword: string) => {
    const navigate = useNavigate();
    createUserWithEmailAndPassword(auth, regEmail, regPassword)
        .then((userCredential: { user: any; }) => {
            const user = userCredential.user;
            console.log("User created", user);
            navigate('/login')
        })
        .catch((error: { code: any; message: any; }) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ", errorMessage);
            console.log("In: ", errorCode);
        })
}