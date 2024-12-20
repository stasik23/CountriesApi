import { useForm } from "react-hook-form";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Loader } from "../../components/Loader";
import { useLoader } from "../../provider/LoaderUtil";
import { handleSignUp } from "../../utils/handleSignUp";
import { auth } from "../../firebase";

export const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [regEmail, setEmail] = useState<string>('');
  const [regPassword, setPassword] = useState<string>('');
  const { isLoading } = useLoader();

  if (isLoading) return <div><Loader /></div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl font-bold text-white mb-4">Register</h1>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Type correct email"
              }
            })}
            className="p-2 border border-gray-300 rounded w-80"
            placeholder="Email"
            value={regEmail}
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
            type="password"
            placeholder="Password"
            value={regPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password.message as string}</p>}

          <input 
            {...register("confirmPassword", {
              required: "Confirm password!",
              validate: (value) => value === regPassword || "Passwords should match!"
            })}
            type="password"
            className="p-2 border border-gray-300 rounded w-80"
            placeholder="Confirm Password"
          />

          {errors.confirmPassword && <p>{errors.confirmPassword.message as string}</p>}

          <button
            className="bg-blue-500 text-white p-2 rounded w-64"
            onClick={handleSubmit(() => handleSignUp(auth, regEmail, regPassword))}
          >
            Register
          </button>
          <ToastContainer />
        </div>
      </div>
  )
}

