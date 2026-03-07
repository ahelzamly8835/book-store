export default function Button({ children, width, isMainBtn }) {
  return (
    <>
      <button
        className={`w-${width} px-4 py-3 cursor-pointer duration-400 ease-in-out capitalize rounded-lg border border-mainColor
                ${
                  isMainBtn
                    ? "bg-mainColor text-white hover:bg-white hover:text-mainColor duration-400 ease-in-out"
                    : "bg-white text-mainColor hover:bg-mainColor hover:text-white"
                }
            `}
      >
        {children}
      </button>
    </>
  );
}
