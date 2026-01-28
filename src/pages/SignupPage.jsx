
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/ui/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const handlerigester = async (values) => {
    if(values.password !== values.ConfirmPassword){
      alert("Not Matching");
    }else{
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
      }
    try{
      navigate("/login")
        const res = await axios.post("http://localhost:1337/api/auth/local/register", data); 
      }catch(error){
        console.log(error);
      }
    }
  }



  return (
    <>
    <div className='min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]'>
    <button className='lg:hidden cursor-pointer flex items-center gap-2 ml-6'><MdArrowBackIosNew />Create account</button>
      <Navbar />
      <div className='flex justify-center items-center px-4 md:py-10 py-8'>
    <Formik initialValues={{username:"",email:"",password:"",ConfirmPassword:""}} onSubmit={(values)=> {handlerigester(values)}}>
        <Form className="form flex flex-col w-full max-w-xl">
                <div className="mobile-only md:hidden">
                <label htmlFor="name" className='capitalize p-1'>name</label>
         <Field type="text" className=' bg-white w-full mb-6 px-3 py-2 sm:px-4 rounded-lg border border-transparent focus:border-mainColor focus:outline-none transition-all text-sm sm:text-base' placeholder="John Smith" />
                </div>
            <div className="md:flex hidden gap-4">
                <label htmlFor="">
                    <p className='capitalize p-1'>first name</p>
        <Field name="first name" type="text" className='bg-white mb-6 focus:outline-none px-4 w-70 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="John" />
                </label>
                <label htmlFor="">
                    <p className='capitalize p-1'>Last Name</p>
        <Field name="username" id="username" type="text" className='bg-white mb-6 focus:outline-none px-4 w-70 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="Smith" />
                </label>
            </div>

          <p className='text-[#222222] my-2 text-[18px] ml-1'>Email</p>
          <Field name="email" type="text" className='bg-white mb-6 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="example@gmail.com" />
          
          <p className='text-[#222222] my-2 text-[18px] ml-1'>Password</p>
          <Field name="password" type="password" className='bg-white mb-6 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Enter password' />
          <p className='text-[#222222] my-2  text-[18px] ml-1'>Confirm password</p>
          <Field name="ConfirmPassword" type="ConfirmPassword" className='bg-white focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Enter password' />
          
          <div className="justify-between items-center flex ml-1 mt-3 text-sm md:text-base">
            <div className="checkbox flex gap-2 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <p>Agree with <span className='text-mainColor'>Terms & Conditions</span></p>
            </div>
          </div>
            
          
          <button type='submit' className="btn cursor-pointer bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90">
          Sign Up
          </button>
          
          <div className="log-in flex flex-col mx-auto mt-8">
            <p className='text-center'>Already have an account? <span className='text-mainColor cursor-pointer'>Login</span></p>
            <span className='mx-auto mt-6 md:mt-10 text-[#00000080]'>or</span>
          </div>
          

          <div className="btns mb-10 md:mb-20 mx-auto  flex md:flex-col mt-10 gap-4">
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FaFacebook className='text-[#1877F2] text-xl'/></span> <span className='hidden md:flex'>Sign with</span>Facebook
            </button>
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg  flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FcGoogle className='text-xl' /></span><span className='hidden md:flex'>Sign with</span>Google
            </button>
          </div>
        </Form>
      </Formik>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignupPage





