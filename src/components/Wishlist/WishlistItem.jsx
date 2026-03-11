import { FaTrash } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import toast from "react-hot-toast";
import useWishlistStore from "../../store/wishlistStore";

const WishlistItem = ({ item }) => {
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  return (
    <div className="bg-white p-6 flex flex-col md:flex-row gap-6">
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w-full md:w-52 object-cover rounded"
        />
      </div>

      <div className="flex-grow">
        <h1 className="font-bold text-xl pb-2">{item.title}</h1>

        <p className="text-[#22222280] pb-3">
          Author:
          <span className="text-black/80"> {item.author}</span>
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

      <div className="flex items-center 2xl:gap-16 md:gap-8 lg:gap-14 text-2xl font-semibold">
        <span>${item.finalPrice}</span>

        <button
          onClick={() => {
            removeFromWishlist(item.id);
            toast.error("Removed from wishlist");
          }}
          className="text-pink-500 cursor-pointer hover:text-red-500"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
