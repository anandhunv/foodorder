import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    
      const {createUser,login}=useContext(AuthContext)
      //redirecting to home page or specifig page

  const location =useLocation()
  const navigate=useNavigate()
  const from= location.state?.from?.pathname || '/';


      const onSubmit = (data) =>{ 
        const email=data.email
        const password=data.password;
        // console.log(data);

        createUser(email,password).then((result) => {
          // Signed up 
          const user = result.user;
          alert('Account Creation successfull!')
          document.getElementById('my_modal_5').close() 
          navigate(from,{replace: true })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message)
          // ..
        });
      }
    
  return (

  <div data-theme='light' className='max-w-md bg-white shadow w-full mx-auto flex flex-col  items-center justify-center my-20'>
      <div className="modal-action mt-0">
    <form
      className="card-body"
      method="dialog"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-bold text-lg">Create Account!</h3>

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
        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover my-2">
            Forgot password?
          </a>
        </label> */}
      </div>
      {/* error */}

      {/* login button/ */}
      <div className="form-control mt-6">
        <input type="submit" value="Sign Up" className="btn bg-green" />
      </div>
      <p className="text-center my-2">
        Do you  have an account?
        <button  
            onClick={()=>document.getElementById('my_modal_5').showModal()}

        className="underline text-red ml-1">
          Login 
        </button>
      </p>
      <Link
        to='/'
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2   ">✕
            </Link>

    </form>
 
  </div>
     {/* social sign up */}
     <div className="justify-center items-center flex gap-5 mb-7">
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green  hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green  hover:text-white">
            <FaGithub />

          </button>
        </div>
        <Modal/>

  </div>
  

  )
}

export default Signup