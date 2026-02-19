import React from "react";
import BackgroundImage from "../../src/assets/images/533643aa8db82414f48d43a992d009dda3961386.png";
import userImg from "../../src/assets/images/7098886df02b2521176bde95e31347ff1428d87f.jpg";
import { CiSearch } from "react-icons/ci";
import NavbarLogo from "../components/Navbar/NavbarLogo";
import LinkItem from "../components/ui/LinkItem";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderLogin = ({
  showSearch = true,
  customContent = null,
  overlayColor = "bg-black/50",
  height = "h-[500px] md:h-[600px]",
  showEdit = true,
}) => {
  return (
    <header className={`relative w-full ${height} overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <img
          src={BackgroundImage}
          alt="header background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>

      <nav className="relative z-20 w-full bg-white/10  border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <NavbarLogo />
            <div className="hidden xl:flex items-center gap-6">
              <LinkItem to="/">home</LinkItem>
              <LinkItem to="books">books</LinkItem>
              <LinkItem to="/about">about us</LinkItem>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-5">
              <div className="relative cursor-pointer group">
                <FaRegHeart className="text-white text-2xl md:text-3xl" />
                <span className="absolute -top-1 -right-2 bg-mainColor text-white text-[8px] font-bold px-1.5 py-1 rounded-full border border-white">
                  12
                </span>
              </div>

              {/* Cart */}
              <div className="relative cursor-pointer group">
                <MdOutlineShoppingCart className="text-white text-2xl md:text-3xl " />
                <span className="absolute -top-1 -right-2 bg-mainColor text-white text-[8px] font-bold px-1.5 py-1 rounded-full border border-white">
                  10
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-10  bg-white/20"></div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end">
                <p className="text-white font-medium text-sm">John Smith</p>
                <p className="text-white/60 text-xs">Johnsmith@gmail.com</p>
              </div>

              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/50">
                  <img
                    src={userImg}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#3B2F4A] rounded-full"></span>
              </div>
              {showEdit && (
                <Link to="/profile">
                  <MdOutlineEdit className="text-white text-lg cursor-pointer absolute right-50 top-5 hover:text-white/70" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-16">
        {showSearch && !customContent && (
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
        )}

        {customContent && (
          <div className="w-full animate-fadeIn">{customContent}</div>
        )}
      </div>
    </header>
  );
};

export default HeaderLogin;
