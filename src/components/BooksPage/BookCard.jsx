import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

export default function BookCard({ book }) {
  // Helper to dynamically render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    // Outer container: Stacked on mobile (flex-col), horizontal on desktop (sm:flex-row)
    <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
      
      {/* Image container: Full width on mobile, fixed on desktop */}
      <div className="w-full sm:w-[150px] h-[200px] sm:h-[220px] flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h2 className="text-lg font-bold text-gray-800 leading-tight">{book.title}</h2>
            <span className="text-xs border border-yellow-400 text-yellow-500 px-2 py-1 rounded-md whitespace-nowrap">
              {book.discount}% Discount
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {book.description}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400">
              {renderStars(book.rating)}
            </div>
            <span className="text-sm text-gray-400">({book.rating} Rating)</span>
          </div>

          <div className="flex gap-8 mt-4 text-sm text-gray-500">
            <div>
              <p className="text-xs uppercase tracking-wider">Author</p>
              <p className="text-gray-800 font-medium">{book.author}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider">Year</p>
              <p className="text-gray-800 font-medium">{book.year}</p>
            </div>
          </div>
        </div>

        {/* Action bar: Responsive alignment */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
          <p className="text-xl font-bold text-gray-800">${book.finalPrice}</p>

          <div className="flex gap-2">
            <button className="bg-mainColor cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition text-sm">
              <span className="hidden sm:inline">Add To Card</span> <FaShoppingCart />
            </button>
            <button className="border cursor-pointer border-mainColor text-mainColor p-2 rounded-lg hover:bg-mainColor hover:text-white transition">
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}