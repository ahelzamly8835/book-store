import React from "react";

const TopBarNav = ({ showQuantity = true, showPrice = true }) => {
  return (
    <div>
      <div className="top-bar hidden lg:flex items-center justify-between px-32 mt-12">
        <div className="item font-semibold text-xl">
          <span>Item</span>
        </div>

        <div className="rtl flex 2xl:gap-32 xl:gap-20 font-semibold text-xl ">
          {showQuantity && <span>Quantity</span>}
          {showPrice && <span>Price</span>}
          <span>Total Price</span>
        </div>
      </div>
    </div>
  );
};

export default TopBarNav;
