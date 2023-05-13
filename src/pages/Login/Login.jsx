import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../component/Context/AuthProvider'

const Login = () => { 
const {login}= useContext(AuthContext)
const location= useLocation()
const navigate= useNavigate()
const from= location.state?.from?.pathname || '/'

const {register, handleSubmit, formState: {errors}}= useForm()


const [error, setError]= useState("")

const handleLogin= (data)=> {
    setError("")
    login(data.email, data.password)
    .then(user=> console.log(user))
    .catch((err) => setError(err.message));
    navigate(from, {replace: true})
  
    



   
}
return (
   <div>
    <h2 className='text-center text-4xl py-3 text-[#D3756B]'>Login</h2>
    
    <div className="flex justify-center items-center">
      <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)} action="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email"  className="input input-bordered"
            {...register("email", {required: "Please give your email"})}
            />
             {errors.email && (
          <p className="text-red-500" role="alert">
            {errors.email?.message}
          </p>
        )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" 
            {...register("password", {required: "Please set a password"})}
            />
             {errors.password && (
          <p className="text-red-500" role="alert">
            {errors.password?.message}
          </p>
        )}
           
          </div>
          <p className='mt-3'> Don't have an account? <Link to='/signup' className= "link">Register</Link> </p>
          <div className="form-control mt-6">
          <button type="submit" className="px-4 py-3 bg-[#D3756B] text-white hover:bg-orange-400">
            Login
          </button>
          {error && <p className='text-red-500'>{error}</p>}
          </div>
          </form>
        </div>
      </div>

      </div>
   </div>
   

);
}

export default Login