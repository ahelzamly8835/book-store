import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import useCartStore from "../../store/cartStore";
import { FaTruck } from "react-icons/fa";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="bg-white p-6 flex flex-col md:flex-row gap-6">
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w-full md:w-52 object-cover rounded"
        />
      </div>

      <div className="content px-0 flex-grow">
        <h1 className="font-bold text-xl pb-2">{item.title}</h1>
        <p className="text-[#22222280] pb-3">
          Author: <span className="text-black/80">{item.author}</span>
        </p>
        <p className="max-w-md text-[#22222280]">{item.description}</p>

        <div className="flex items-center gap-2 w-34 mt-10 border cursor-pointer border-gray-200 px-3 py-1 rounded-md bg-gray-50">
          <FaTruck className="text-gray-400 text-sm" />
          <span className="text-sm text-gray-500">Free Shipping</span>
        </div>
        <div className="mt-12 text-[#22222280]">
          <span className="font-bold">
            ASIN : <span className="font-normal">B09TWSRMCB</span>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 md:ml-[18em] lg:ml-0 md:gap-12 lg:gap-18 ">
        <div className="flex items-center gap-3">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-mainColor text-mainColor"
          >
            <FaMinus className="text-xs" />
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-mainColor text-mainColor"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>

        <div className="price flex flex-wrap gap-4 xl:gap-16 md:gap-12 md:mr-1 2xl:gap-16 font-semibold text-2xl items-center">
          <span className="2xl:mx-14 lg:mx-2">{item.finalPrice}</span>
          <span>${(item.finalPrice * (item.quantity || 1)).toFixed(2)}</span>
          <button
            onClick={() => {
              removeFromCart(item.id);
              toast.error("Item removed from cart");
            }}
            className="text-pink-500 hover:text-red-500"
          >
            <FaTrash className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
