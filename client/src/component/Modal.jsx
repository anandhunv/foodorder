import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUpwithGmail,login}=useContext(AuthContext)
  const [errorMessage,setErrorMessage]=useState('')

  //redirecting to home page or specifig page

  const location =useLocation()
  const navigate=useNavigate()
  const from= location.state?.from?.pathname || '/';



  const onSubmit = (data) => {
    const email=data.email
    const password=data.password;
    // console.log(email,password)
    login(email,password).then((result)=>{
      const user=result.user
      alert("login successfull")
      document.getElementById('my_modal_5').close() 
      navigate(from,{replace: true })
    }).catch((error)=>{
      const errorMessage=error.message;
      setErrorMessage('Provide a Correct  email and password')
       
    })
  }

  //google sign in
  const handleLogin=()=>{
    signUpwithGmail().then((result)=>{
      const user= result.user;
      alert('Login Succesfull')
      document.getElementById('my_modal_5').close() 

      navigate(from,{replace: true })
    }).catch((error)=>console.log(error))
  }

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action mt-0">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* email   / */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required 
              />
            </div>

            {/* //password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover my-2">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* error */}
            {
              errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p>:""
            }

            {/* login button/ */}
            <div className="form-control mt-6">
              <input type="submit" value="login" className="btn bg-green" />
            </div>
            <p className="text-center my-2">
              Dont have an account?
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>
            </p>
            <button
            htmlFor='my_modal_5'
            onClick={()=>document.getElementById('my_modal_5').close()}
            
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

          </form>
        </div>

        {/* social sign up */}
        <div className="justify-center items-center flex gap-5">
          <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin}>
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green  hover:text-white">
            <FaFacebookF />
          </button>{" "}
          <button className="btn btn-circle hover:bg-green  hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
