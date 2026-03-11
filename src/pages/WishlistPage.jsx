import HeaderLogin from "./HeaderLogin";
import useWishlistStore from "../store/wishlistStore";
import TopBarNav from "../components/Cart/TopBarNav";
import WishlistItem from "../components/Wishlist/WishlistItem";
import Footer from "../components/ui/Footer";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="header">
        <HeaderLogin showSearch={false} height="h-32" />
        <TopBarNav showQuantity={false} showPrice={false} />
      </div>
      <div className="p-6 space-y-6">
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
      <div className="btn pt-16 pb-[16em]">
        <div className="flex justify-center items-center gap-6">
          <Link to="/my-cart">
            <button
              className="text-mainColor bg-[#D9176C1A] 
      flex items-center justify-center gap-3
      font-bold rounded-xl
      px-8 py-3 2xl:px-16 2xl:py-4
      hover:bg-[#D9176C33] transition cursor-pointer"
            >
              Move to cart
            </button>
          </Link>
          <Link to="/checkout">
            <button
              className="bg-mainColor text-white
      flex items-center justify-center gap-3
      font-bold rounded-xl
      px-8 py-3 2xl:px-16 2xl:py-4 hover:scale-101 ease-in-out duration-300 cursor-pointer"
            >
              Check out
              <span className="text-xl 2xl:text-3xl">
                <BiSolidRightArrowSquare />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
