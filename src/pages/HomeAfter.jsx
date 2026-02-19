import React from "react";
import Header from "./Header";
import Service from "./service";
import BestSeller from "./BestSeller";
import Recomended from "./Recomended";
import FlashSale from "./FlashSale";
import Footer from "../components/ui/Footer";
import HeaderLogin from "./HeaderLogin";
const HomeAfter = () => {
  return (
    <div>
      <HeaderLogin />
      <Service />
      <BestSeller />
      <Recomended />
      <FlashSale />
      <Footer />
    </div>
  );
};

export default HomeAfter;
