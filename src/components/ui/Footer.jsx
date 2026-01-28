import React from 'react';
import LogoImg from "../../assets/images/logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#3B2F4A] text-white py-20 hidden md:block">
      <div className=" flex flex-col md:flex-row justify-between px-20 items-center md:items-start ">
  
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 ">
          <img src={LogoImg} alt="Logo" className="w-24 h-auto" />

          <ul className="flex gap-6 text-white">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Books</li>
            <li className='cursor-pointer'>About us</li>
          </ul>
        </div>

       
        <div className="flex gap-4 mt-4 md:mt-0 ">
          <FaFacebook size={24} className='cursor-pointer' />
          <FaInstagram size={24} className='cursor-pointer' />
          <FaYoutube size={24} className='cursor-pointer' />
          <FaXTwitter size={24} className='cursor-pointer' />
        </div>
      </div>

    
      <div className="mt-6 border-t border-gray-600 pt-4 px-20 text-sm">
        Developed By <strong>EraaSoft</strong> - All Copy Rights Reserved @2024
      </div>
    </footer>
  );
};

export default Footer;
