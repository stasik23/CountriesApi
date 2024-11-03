import { createUserWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { IUser } from "./SignIn";
import { NotifyType } from "../common/types";

export const SignUp = ({ auth, email, password }: IUser) => {
    const notify = (message: string, type: NotifyType.SUCCESS | NotifyType.ERROR) => {
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
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            notify('🦄 Success! You are registered!', NotifyType.SUCCESS);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error:", errorMessage);
            notify(`Error: ${errorMessage}`, NotifyType.ERROR);
        });

}