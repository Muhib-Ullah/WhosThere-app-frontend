import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { UserRound, Info, Send } from 'lucide-react';
import toast from 'react-hot-toast';
//Custom Imports
import FormField from '../components/FormField';
import TextAreaField from '../components/TextAreaField';

const PublicProfile = () => {
  const { shareCode } = useParams();
  const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});

  const handleMessageSubmit = (data) => {
    console.log(data);
    toast.success('Message sent successfully');
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <UserRound className=" text-primary" strokeWidth={2} size={48}/>
        </div>
        <h1 className="font-google-sans text-md text-gray-400">
          Send an anonymous message to
        </h1>
        <h1 className="font-google-sans text-4xl font-bold text-primary mt-1">
          username
        </h1>
      </div>
      <div className="rounded-sm border p-8 w-full max-w-4xl mt-6 border-gray-200 bg-[#f9f9f9]">
        <form onSubmit={handleSubmit(handleMessageSubmit)}>
          <FormField
            label="Subject"
            type="text"
            placeholder="Enter message subject"
            {...register("subject", {required: "Subject is required.",
              minLength: {value: 10, message: "Subject length must be at least 10 characters."},
              maxLength: {value: 100, message: "Subject length cannot exceed 100 characters."}
            })}
            error={errors.subject} />
          <TextAreaField
            label="Message"
            rows="5"
            placeholder="Enter message"
            {...register("message", {required: "Message is required.",
              minLength: {value: 50, message: "Message length  must be at least 50 characters."},
              maxLength: {value: 1000, message: "Message length cannot exceed 1000 characters."}
            })}
            error={errors.message} />
          <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs flex-1 font-google-sans">
              <Info size={17} strokeWidth={2} className="shrink-0 text-gray-400" />
              <span> Your identity will remain anonymous. The recipient won't know who sent this message. </span>
            </div>
            <button type="submit" className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-6 font-google-sans
              text-sm text-white sm:mt-0" >
              <Send size={18} strokeWidth={2} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PublicProfile