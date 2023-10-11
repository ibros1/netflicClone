import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { auth } from '../lib/firebase';
// import {createUserWithEmailAndPassword } from "firebase/auth";



const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    try {
      const { email, password } = data
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
    } catch (err) {
      console.log(err)
    };

  }


  return (
    <div className='relative flex flex-col md:items-center md:justify-center h-screen w-screen '>
      <img src="./images/misc/home.jpeg" className='absolute h-screen w-full object-cover -z-50 opacity-40 '></img>
      <Link to="/">
        <img src="./images/logo/mainlogo.svg"
          className='absolute top-[-20px] left-3 w-[150px] md:w-[180px] object-contain md:w-[150px]'
        ></img>
      </Link>


      <form onSubmit={handleSubmit(onSubmit)}
        className='relative bg-black/70 mt-24 rounded py-10 px-5 space-y-8 md:mt-0 md:max-w-md md:px-14'>

        <h1 className='text-white text-4xl font-semibold my-6'>Create an account</h1>
        <lebel className="inline-block w-full" htmlFor="">
          <input  {...register("email", { required: true })} type='email' placeholder='Enter Your Email' className='form-control' />
          {errors.password && <p className='pt-2 text-sm text-orange-500 '>This field is required</p>}
        </lebel>
        <lebel className="inline-block w-full" htmlFor="">
          <input {...register("password", { required: true })}
            type='password' placeholder='Create New password' className='form-control' />
          {errors.password && <p className='pt-2 text-sm text-orange-500 '>This field is required</p>}
        </lebel>
        <lebel className="inline-block w-full" htmlFor="">
          <input {...register("password", { required: true })}
            type='password' placeholder='confirm your password' className='form-control' />
          {errors.password && <p className='pt-2 text-sm text-orange-500 '>This field is required</p>}
        </lebel>
        <button className='btn'>Sign up</button>
        <div className=''>
          <a href="./Login" className='text-none cursor-pionter text-2xl text-gray-200 '>Al ready have an account?</a>
        </div>
      </form>
    </div>
  )
}

export default Signup