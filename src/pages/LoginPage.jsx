import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/ui/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const handleLogin = async (values)=> {
    console.log(values);
    try{
        const res = await axios.post("http://localhost:5173/api/auth/local", values);
        console.log(res);
    } catch (error) { 
      console.log(error);
    }
  }
  const lgoinSchema = Yup.object({
    identifier: Yup.string().email().required(),
    password: Yup.string().required()
  })
  return (
    <>
    <div className='min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]'>
    <button className='md:hidden cursor-pointer flex items-center gap-2 ml-6'><MdArrowBackIosNew />Log in</button>
      <Navbar />
      <div className='flex justify-center items-center px-4 md:py-10 py-8'>

        <div className="form flex flex-col w-full max-w-xl">
          
          <h1 className='text-mainColor hidden mb-10 md:mb-20 md:flex mx-auto font-semibold text-2xl md:text-3xl text-center'>
            Welcome Back!
          </h1>
          <Formik initialValues={{ identifier: "", password: "" }} validationSchema={lgoinSchema} onSubmit={(values) => {handleLogin(values) }}>
            <Form className="form flex flex-col w-full max-w-xl">
      
          <label className='text-[#222222] my-2 mt-20 text-[18px] ml-1'>Email</label>
          <Field id="email" name="identifier" 
        type="text" className='bg-white mb-2 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="example@gmail.com" />
                <ErrorMessage name='identifier' component={"p"} className='text-red-600 ml-2 font-semibold'/>
    
          <label htmlFor="password" className='text-[#222222] mb-2 mt-6 text-[18px] ml-1'>
            password
          </label>
          <Field name="password"
        type="password" id="password" className='bg-white focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Enter password' />
              <ErrorMessage name='password' component={"p"} className='text-red-600 ml-2  font-semibold'/>
          <div className="justify-between items-center flex ml-1 mt-3 text-sm md:text-base">
            <div className="checkbox flex gap-2 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <p>Remember me</p>
            </div>
            <div className="Forget flex">
              <Link to="/forgetPassword"><p className='text-mainColor cursor-pointer'>Forget password?</p></Link>
            </div>
          </div>
          <button type='submit' className="btn cursor-pointer bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90">
            Log in
          </button>
            </Form>
          </Formik>
          

          
          <div className="log-in flex flex-col mx-auto mt-8">
            <p className='text-center'>Don’t have an account? <span className='text-mainColor cursor-pointer'>Signup</span></p>
            <span className='mx-auto mt-6 md:mt-10 text-[#00000080]'>or</span>
          </div>
          

          <div className="btns mb-10 md:mb-20 mx-auto  flex md:flex-col mt-10 gap-4">
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FaFacebook className='text-[#1877F2] text-xl'/></span> <span className='hidden md:flex'>Login with</span> Facebook
            </button>
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg  flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FcGoogle className='text-xl' /></span> <span className='hidden md:flex'>Login with</span>Google
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default LoginPage