import { useState } from "react";
import useCartStore from "../store/cartStore";
import HeaderLogin from "./HeaderLogin";
import Footer from "../components/ui/Footer";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.finalPrice * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="bg-[#F5F5F5] min-h-screen ">
      <HeaderLogin showSearch={false} height="h-32" />
      <div className="max-w-7xl pt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 border  border-[#22222233]">
            <h2 className="text-xl font-semibold mb-6">Shipping information</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Name"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="John Smith"
              />

              <input
                placeholder="Phone"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="123456789"
              />

              <input
                placeholder="Email"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="Johnsmith@gmail.com"
              />

              <input
                placeholder="City"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="Maadi"
              />

              <input
                placeholder="State"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="Cairo"
              />

              <input
                placeholder="Zip"
                className="border border-[#22222233] rounded-lg p-3"
                defaultValue="11311"
              />
            </div>

            <input
              placeholder="Address"
              className="border border-[#22222233] rounded-lg p-3 mt-4 w-full"
              defaultValue="Maadi, Cairo , Egypt."
            />
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl p-8 border border-[#22222233]">
            <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

            <div className="md:flex flex flex-col gap-4">
              <button className="border cursor-pointer border-[#22222233] rounded-lg px-6 py-3">
                Online payment
              </button>

              <button className="border  cursor-pointer rounded-lg px-6 py-3 bg-pink-100 text-mainColor border-mainColor">
                Cash on delivery
              </button>

              <button className="border cursor-pointer border-[#22222233] rounded-lg px-6 py-3">
                POS on delivery
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[#22222233]">
            <h2 className="text-xl font-semibold mb-4">Note</h2>

            <textarea
              placeholder="Add note"
              className="border border-[#22222233] rounded-lg p-4 w-full h-[25em]"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border  border-[#22222233] h-fit mb-22">
          <h2 className="text-xl font-semibold mb-6  text-[#22222280]">
            Order summary
          </h2>

          {/* Products */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} className="w-28 object-cover rounded" />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="text-gray-400 text-sm">Author: {item.author}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">${item.finalPrice}</span>

                    <span className="text-xl text-[#22222390]">
                      x{item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-2 font-semibold">
              Have a discount code?
            </p>

            <div className="flex gap-2">
              <input
                placeholder="Enter Promo Code"
                className="border border-[#22222233] rounded-lg p-3 flex-1 text-xl"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />

              <button className="bg-[#4B3F58] text-white px-6 rounded-lg cursor-pointer">
                Apply
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-[#22222233] pt-4">
            <div className="flex justify-between">
              <span className="text-[#22222280]">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#22222280]">Tax</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#22222280]">Shipping</span>
              <span className="text-[#22222280] font-semibold">$0</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span className="text-[#22222280]">Total (USD)</span>
              <span className="text-mainColor">${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-mainColor text-white py-3 cursor-pointer rounded-lg mt-6 font-semibold">
            Confirm order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
