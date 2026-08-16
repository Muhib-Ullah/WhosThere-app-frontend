import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
//Custom Imports
import FormField from "../components/FormField";
import toast from 'react-hot-toast';
import { RegisterUser } from '../services/AuthService';

const Register = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm({mode: "onBlur"});
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try { 
      const { confirmPassword, ...registerData } = data;
      const response = await RegisterUser(data);
      if(response.success) {
        toast.success(response.message);
        navigate('/login');
      }
    } catch(error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="mb-6">
        <h1 className="text-4xl font-google-sans font-bold text-primary">
          Welcome aboard!
        </h1>
        <p className="mt-2 text-md text-gray-400 font-google-sans">
          Create an account to get started.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2"> 
          <FormField
            label="User Name"
            type="text"
            placeholder="Enter your user name"
            {...register("userName", { required: "User Name is required.",
                minLength: { value: 3, message: "User Name must be at least 3 characters." },
                maxLength: { value: 20, message: "User Name cannot exceed 20 characters." }
              })}
            error={errors.userName}
            />
          <FormField
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            {...register("emailAddress", { required: "Email Address is required.", 
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email Address." } })}
            error={errors.emailAddress}
            />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> 
          <FormField
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            {...register("firstName", { required: "First Name is required." })}
            error={errors.firstName}
            />
          <FormField
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            {...register("lastName", { required: "Last Name is required." })}
            error={errors.lastName}
            />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> 
          <FormField
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required.",
              minLength: { value: 6, message: "Password must be at least 6 characters." },
              pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, message: "Password must contain one uppercase letter, one number, and one special character." }
              })}
            error={errors.password}
            />
          <FormField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", { required: "Please confirm your password.", 
              validate: (value) => value === watch("password") || "Passwords do not match." })}
            error={errors.confirmPassword}
            />
        </div>
        <button type="submit"
          disabled={Object.keys(errors).length > 0}
          className="mt-8 w-full rounded-md bg-secondary font-google-sans px-4 py-3 text-white">
          Register Now
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400 font-google-sans">
          Already have an account?{" "}
          <Link to="/login" className="font-google-sans text-primary hover:text-secondary">
            Login here
          </Link>
        </p>
      </div>
    </div>

  )
}

export default Register