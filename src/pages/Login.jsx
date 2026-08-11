import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//Custom Imports
import FormField from "../components/FormField";
  
const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-12">
      <div className="hidden md:col-span-6 md:flex items-center justify-center bg-primary">
        <h1 className="font-google-sans text-7xl font-bold text-secondary">
          Who's There?
        </h1>
      </div>
      <div className="col-span-1 flex min-h-screen items-center justify-center px-6 py-12 md:col-span-6 md:px-12 lg:px-20">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-4xl font-google-sans font-bold text-primary">
              Welcome back!
            </h1>
            <p className="mt-2 text-md text-gray-400 font-google-sans">
              Login to your account to continue.
            </p>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormField
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email Address is required.", 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address." } })}
              error={errors.email}
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
      </div>
    </div>
  );
};

export default Login;