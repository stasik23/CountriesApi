import { signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUser } from '../common/types';

export const SignIn = ({ auth, email, password }: IUser) => {
  const notify = (message: string, type: 'success' | 'error') => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      type: type,
    });
  };
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      notify('🦄 Success! You are logged in!', 'success');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error:", errorMessage);
      notify(`Error: ${errorMessage}`, 'error');
    });
};
export type { IUser };

