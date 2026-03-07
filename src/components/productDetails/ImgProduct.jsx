import React from "react";
import book from "../../../public/img/Book1.png";

const ImgProduct = () => {
  const images = [book, book, book];

  return (
    <div className="imgs mt-6">
      <div className="img w-72 ">
        <img
          src={book}
          alt="Book"
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="mine-imgs flex gap-3 mt-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Book preview"
            className="w-20 object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer border"
          />
        ))}
      </div>
    </div>
  );
};

export default ImgProduct;
