import { IoStarSharp } from "react-icons/io5";

const reviews = [
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    name: "John Smith",
    date: "28/07/2024",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold text-sm">{review.name}</p>
              <p className="text-green-500 text-xs">Verified Purchase</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Reviewed On {review.date}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="font-medium text-sm">Excellent Book</span>

            <span className="text-sm text-gray-500">5.0</span>

            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <IoStarSharp key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
