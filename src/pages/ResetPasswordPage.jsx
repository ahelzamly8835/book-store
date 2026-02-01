import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/ui/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";

export default function ResetPasswordPage() {
    return (
        <>
        <div className='min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]'>
        <button className='md:hidden cursor-pointer flex items-center gap-2 ml-6'><MdArrowBackIosNew />Reset password</button>
          <Navbar />
          <div className='flex justify-center items-center px-4 md:py-10 py-8'>
    
            <div className="form flex flex-col w-full max-w-xl">
              <h1 className='text-mainColor hidden mb-10 md:mb-20 md:flex mx-auto font-semibold text-2xl md:text-3xl text-center'>
              Create new password!
              </h1>
              <div className="content text-[#22222280] flex flex-col mx-auto">
              <p className="ml-25 hidden md:flex">Create a strong password</p>
              <p className="w-60 mt-10 md:w-full md:mt-0">Your new password must be different from previous one</p>
              </div>
              <Formik>
                <Form className="form flex flex-col  w-full max-w-xl">
          
              <label className='text-[#222222] my-2 md:mt-20 mt-10 text-[18px] ml-1 font-semibold'>password</label>
              <Field id="password" name="password" 
            type="text" className='bg-white mb-2 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="Enter password" />
                    <ErrorMessage name='identifier' component={"p"} className='text-red-600 ml-2 font-semibold'/>
                    <label htmlFor="" className="text-[#22222280] mb-10">Must be at least 8 characterss</label>
              <label htmlFor="password" className='text-[#222222] mb-2  text-[18px] ml-1 font-semibold'>
              Confirm password
              </label>
              <Field name="password"
            type="password" id="password" className='bg-white focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Confirm password' />
                  <ErrorMessage name='password' component={"p"} className='text-red-600 ml-2  font-semibold'/>
              <div className="justify-between items-center flex ml-1 mt-3 text-sm md:text-base">
                <div className="checkbox flex gap-2 items-center">
                  <input type="checkbox" className="cursor-pointer" />
                  <p>Remember me</p>
                </div>

              </div>
              <button type='submit' className="btn cursor-pointer mb-80 bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90">
              Reset password
              </button>
                </Form>
              </Formik>
              
    
      
    
              
            </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}