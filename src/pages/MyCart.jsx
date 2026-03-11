import React from "react";
import HeaderLogin from "../pages/HeaderLogin";
import useCartStore from "../store/cartStore";
import CartItem from "../components/Cart/CartItem";
import PaymentSummary from "../components/Cart/PaymentSummary";
import Footer from "../components/ui/Footer";
import TopBarNav from "../components/Cart/TopBarNav";
const MyCart = () => {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen">
        <HeaderLogin showSearch={false} height="h-32" />
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            No Products In Cart
          </h1>
          <p className="text-gray-500 mb-6">Your cart is currently empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="header">
        <HeaderLogin showSearch={false} height="h-32" />
        <TopBarNav />
      </div>
      <div className="mx-auto p-6 space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <PaymentSummary />
      <Footer />
    </div>
  );
};
export default MyCart;
