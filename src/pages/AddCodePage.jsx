import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/ui/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";

export default function AddCodePage() {
    return (
        <div className="min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]">
        <button className='lg:hidden cursor-pointer flex items-center gap-2 ml-6'><MdArrowBackIosNew />Forget password</button>
    <Navbar/>
    <div className="content justify-center items-center flex-col gap-16 mt-16 flex">
    <h1 className="text-mainColor font-semibold hidden md:flex">Reset your password!</h1>
    <p className="text-[#22222280] w-58 md:w-full flex justify-center md:text-[16px] text-[2em]">Enter the 4 dights code that you received on your email</p>
    </div>
    <div className="flex justify-center items-center mt-32">
    <Formik>
        <Form className="form flex gap-5">
    <Field id="num" name="num" type="num" className='bg-white mt-4 flex md:w-[3em] w-[1em] focus:outline-none px-4 py-2 rounded-lg border border-gray-300 focus:border-mainColor transition-all' />
    <Field id="num" name="num" type="num" className='bg-white mt-4 flex md:w-[3em] w-[1em] focus:outline-none px-4 py-2 rounded-lg border border-gray-300 focus:border-mainColor transition-all' />
    <Field id="num" name="num" type="num" className='bg-white mt-4 flex md:w-[3em] w-[1em] focus:outline-none px-4 py-2 rounded-lg border border-gray-300 focus:border-mainColor transition-all' />
    <Field id="num" name="num" type="num" className='bg-white mt-4 flex md:w-[3em] w-[1em] focus:outline-none px-4 py-2 rounded-lg border border-gray-300 focus:border-mainColor transition-all' />
        </Form>
    </Formik>
</div>
  <div className="btn md:w-[35em] w-[22em] mb-60 mt-10 mx-auto">
<button type='submit' className="btn w-full cursor-pointer bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90">
Send reset code
  </button>
  <div className="flex justify-center mt-16">
  <p className="text-[#222222]">Didn’t receive a code? <span className="cursor-pointer text-mainColor font-semibold">Send again</span></p>
  </div>
  </div>
  <Footer/>
</div>
    )
}