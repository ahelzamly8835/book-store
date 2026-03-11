import { useState } from "react";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function PaymentSummary() {
  const [promoCode, setPromoCode] = useState("");

  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.finalPrice * item.quantity,
    0
  );

  const shipping = 0;
  const tax = subtotal * 0.03;

  const total = subtotal + shipping + tax;

  const handleApply = () => {
    console.log("Promo code applied:", promoCode);
  };

  return (
    <div className="bg-[#3B2F4A1A] rounded-sm p-8 my-12 py-20 mx-5">
      <div className="lg:flex lg:gap-12 ">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Payment Summary
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Have a discount code?</p>

            <div className="flex items-center py-8 gap-2">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-3 py-2 w-48">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="text-sm text-gray-500 outline-none bg-transparent w-full placeholder-gray-400"
                />
              </div>

              <button
                onClick={handleApply}
                className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="w-px bg-gray-300 self-stretch" />

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="text-sm font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Shipping</span>
              <span className="text-sm font-bold text-gray-900">
                Free Delivery
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Tax</span>
              <span className="text-sm font-bold text-gray-900">
                ${tax.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-xl font-bold text-pink-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Link to="/checkout">
            <button className="w-full my-2 cursor-pointer bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold py-3 rounded-md transition">
              Check out
            </button>
            </Link>

            <button className="w-full cursor-pointer border border-pink-600 text-pink-600 hover:bg-pink-50 text-sm font-semibold py-3 rounded-md transition">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
