import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);    
  return (
    <>
    <div>
      <dialog id="my_contact" className="modal">
        <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/signup" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
    </Link>
    </form>
    
    <h3 className="font-bold text-lg">Contact</h3>

     {/* Name */}
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input
         type="text" 
         placeholder="Enter your name" 
         className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("name", { required: true })}
        />
        <br/>
        {errors.Name && 
            <span className="text-sm text-red-500">This field is required</span>
        }
    </div>

         {/* Phone */}
    <div className="mt-4 space-y-2">
        <span>Phone</span>
        <br/>
        <input type="phone" placeholder="Enter phone number" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("phone", { required: true })}
        />
         <br/>
        {errors.phone 
         && 
         <span>This field is required
         </span>
        }
    </div>  

    <div className="flex justify-around mt-4">
        <button className="bg-pink-500 text-white rounded-md px-1 hover:bg-pink-700 duration-200">Save</button>

    </div>
  </div>
 </dialog>
 
 </div>
 
 </>
);
}

export default Contact;
