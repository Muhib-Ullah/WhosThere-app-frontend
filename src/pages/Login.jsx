import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
//Custom Imports
import FormField from "../components/FormField";
import { LoginUser } from "../services/AuthService";
import { setToken } from "../utils/Token";
import toast from "react-hot-toast";
  
const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await LoginUser(data);
      if(response.success) {
        toast.success(response.message);
        setToken(response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <h1 className="text-4xl font-google-sans font-bold text-primary">
          Welcome back!
        </h1>
        <p className="mt-2 text-md text-gray-400 font-google-sans">
          Login to your account to continue.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <FormField
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          {...register("emailAddress", { required: "Email Address is required.", 
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address." } })}
          error={errors.emailAddress}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required." })}
          error={errors.password}
        />
        <button type="submit"
          className="mt-8 w-full rounded-md bg-secondary font-google-sans px-4 py-3 text-white">
          Login Now
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400 font-google-sans">
          Don't have an account?{" "}
          <Link to="/register" className="font-google-sans text-primary hover:text-secondary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;