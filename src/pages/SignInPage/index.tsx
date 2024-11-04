import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Loader } from '../../components/Loader';
import { useLoader } from '../../provider/LoaderUtil';
import { handleSignIn } from '../../utils/handleSignIn';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

interface SignInFormData {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
  const [isEmail, setEmail] = useState<string>('')
  const [isPassword, setPassword] = useState<string>('')
  const { isLoading } = useLoader();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInFormData) => {
    try {
      await handleSignIn(auth, data.email, data.password);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div><Loader /></div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold text-white mb-4">Login</h1>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address"
            }
          })}
          className="p-2 border border-gray-300 rounded w-80"
          placeholder="Email"
          value={isEmail}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email.message as string}</p>}


        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
          className="p-2 border border-gray-300 rounded w-80"
          name="password"
          type="password"
          placeholder="Password"
          value={isPassword}
          onChange={(e) => setPassword(e.target.value)} //TODO CHANGE onChange TO getValue
        />
        {errors.password && <p>{errors.password.message as string}</p>}

        <button
          className="bg-blue-500 text-white p-2 rounded w-64"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </button>
        <ToastContainer />
      </div>
    </div>
  )
}

