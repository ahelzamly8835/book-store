import React from "react";
import HeaderLogin from "./HeaderLogin";
import userImg from "../assets/images/7098886df02b2521176bde95e31347ff1428d87f.jpg";
import { FiEdit3 } from "react-icons/fi";
import { Formik, Form, Field } from "formik";
import Footer from "../components/ui/Footer";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const logout = useAuthStore((state) => state.logout);
const navigate = useNavigate();

const handleLogout = () => {
  logout();
  toast.success("Logged out successfully");
  navigate("/");
};
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <HeaderLogin showSearch={false} height="h-[300px]" showEdit={false} />

      <div className="relative -mt-32 flex flex-col items-center z-30">
        <div className="relative">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={userImg}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>

          <button className="absolute bottom-2 right-2 md:bottom-6 md:right-4 bg-mainColor text-white text-xl md:text-2xl p-3 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FiEdit3 />
          </button>
        </div>
      </div>

      <div className="form flex justify-center px-4 mt-12 pb-10">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-md w-full max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="font-semibold text-2xl text-black/80">
              General information
            </h1>
          </div>

          <Formik
            initialValues={{
              firstName: "John",
              lastName: "Smith",
              email: "Johnsmith@gmail.com",
              phone: "01123456789",
              address: "123 Street Name, City",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleSubmit }) => (
              <Form className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="mb-2 text-sm font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-mainColor transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="mb-2 text-sm font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-mainColor transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-mainColor transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Phone Number
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-mainColor transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <Field
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-mainColor transition-all"
                  />
                </div>
                <div className="pt-6 flex  gap-4">
  <button
    type="submit"
    className="w-full mx-auto md:w-fit md:px-12 cursor-pointer bg-mainColor text-white py-4 rounded-lg font-bold shadow-lg hover:brightness-90 active:scale-95 transition-all"
  >
    Update information
  </button>

  <button
    type="button"
    onClick={handleLogout}
    className="w-full mx-auto md:w-fit md:px-12 cursor-pointer bg-red-500 text-white py-4 rounded-lg font-bold shadow-lg hover:bg-red-600 active:scale-95 transition-all"
  >
    Logout
  </button>
</div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
