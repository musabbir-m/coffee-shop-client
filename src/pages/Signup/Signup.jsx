import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../component/Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();
      const { signUp, updateUser, googleSignin } = useContext(AuthContext);

      const [signupError, setSignupError] = useState("");

      const handleSignup = (data) => {
        console.log(data);
        setSignupError("");
        signUp(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
           
            const userInfo = { displayName: data.name };
            updateUser(userInfo)
              .then(() => {})
              .catch((err) => {});
    
            navigate("/");
          })
          .catch((err) => setSignupError(err.message));
      };

      const googleSigninHandler= ()=> {
        googleSignin()
        .then (data=> console.log(data))
        .catch(err=> console.log(err))
      }

  return (
    <div>
       <h1 className='text-center text-4xl py-3 text-[#D3756B]'>Sign Up</h1>
    <div className="flex items-center justify-center">
       
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignup)} action="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("name", { required: "Please insert your name" })}
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Please insert your email" })}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            
            {signupError && <p className="text-red-400">{signupError}</p>}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="px-4 py-3 bg-[#D3756B] text-white hover:bg-orange-400"
              >
                Signup
              </button>
            </div>
          </form>
          <p className='text-center'>Or</p>
          <button 
          className="px-4 py-3 bg-gray-500 text-white hover:bg-orange-400"
          onClick={googleSigninHandler}
          >Signin with Google</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup