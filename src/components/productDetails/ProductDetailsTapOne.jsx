import React from "react";

const details = [
  { label: "Book Title", value: "Rich Dad And Poor Dad" },
  { label: "Author", value: "Robert T. Kiyosaki" },
  { label: "Publication Date", value: "1997" },
  { label: "ASIN", value: "B09TWSRMCB" },
  { label: "Language", value: "English" },
  { label: "Publisher", value: "Printer" },
  { label: "Pages", value: "336" },
  { label: "Book Format", value: "Hard Cover" },
  { label: "Best Seller Rank", value: "#3" },
];

const ProductDetailsTapOne = () => {
  return (
    <div className="pb-16 space-y-3 text-[15px]">
      {details.map((item, index) => (
        <p key={index}>
          <span className="font-semibold">{item.label} :</span>{" "}
          <span className="text-gray-600">{item.value}</span>
        </p>
      ))}
    </div>
  );
};

export default ProductDetailsTapOne;
