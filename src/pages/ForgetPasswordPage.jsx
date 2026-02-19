import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/ui/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export default function ForgetPasswordPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]">
      <button className="lg:hidden cursor-pointer flex items-center gap-2 ml-6">
        <MdArrowBackIosNew />
        Forget password
      </button>
      <Navbar />
      <div className="content justify-center items-center flex-col gap-16 mt-16 flex">
        <h1 className="text-mainColor font-semibold hidden md:flex">
          Forget Password?
        </h1>
        <p className="text-[#22222280] w-58 md:w-80 md:text-[16px] text-[2em]">
          Enter your email to reset your password
        </p>
      </div>
      <div className="flex justify-center items-center mt-32">
        <Formik>
          <Form className="form max-w-xl">
            <label className="text-[#222222] text-[18px]">
              Email
              <Field
                id="email"
                name="email"
                type="text"
                className="bg-white mt-4 flex md:w-[30em] w-[20em] focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all"
                placeholder="example@gmail.com"
              />
            </label>
            <ErrorMessage
              name="email"
              component={"p"}
              className="text-red-600 ml-2 font-semibold"
            />
          </Form>
        </Formik>
      </div>
      <div className="btn md:w-[35em] w-[22em] mb-60 mt-10 mx-auto">
        <button
          type="submit"
          className="btn w-full cursor-pointer bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90"
        >
          Send reset code
        </button>
      </div>
      <Footer />
    </div>
  );
}
