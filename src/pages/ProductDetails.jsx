import React from "react";
import HeaderLogin from "./HeaderLogin";
import ImgProduct from "../components/productDetails/ImgProduct";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductTabs from "../components/productDetails/ProductTabs";
import Footer from "../components/ui/Footer";

const ProductDetails = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <HeaderLogin showSearch={false} height="h-32" />

      <main className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="img">
            <ImgProduct />
          </div>

          <div className="w-full">
            <ProductInfo />
          </div>
        </div>

        <section className="mt-12 md:mt-16">
          <ProductTabs />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
