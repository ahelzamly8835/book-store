import React from 'react';
import BackgroundImage from '../../src/assets/images/533643aa8db82414f48d43a992d009dda3961386.png';
import { CiSearch } from "react-icons/ci";
import NavbarLogo from '../components/Navbar/NavbarLogo';
import LinkItem from '../components/ui/LinkItem';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BackgroundImage} 
          alt="header background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      <nav className="relative z-20 w-full bg-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <NavbarLogo />

            <div className="hidden lg:flex items-center gap-8">
              <LinkItem to="/">home</LinkItem>
              <LinkItem to="books">books</LinkItem>
              <LinkItem to="about">about us</LinkItem>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button width="fit" isMainBtn={true}>login</Button>
            </Link>
            <Link to="/signup" className="hidden sm:block">
              <Button width="fit" isMainBtn={false}>sign up</Button>
            </Link>
          </div>
        </div>
      </nav>


      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-16">

        
        <div className="w-full max-w-[600px] bg-white rounded-full flex items-center shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-mainColor transition-all">
          <input 
            type="text" 
            placeholder="Search by title, author, or ISBN..." 
            className="flex-1 px-6 py-4 md:py-5 outline-none text-gray-700 text-sm md:text-base"
          />
          <button className="bg-mainColor text-white px-6 md:px-8 h-full self-stretch hover:brightness-90 transition-all flex items-center justify-center cursor-pointer">
            <CiSearch className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;