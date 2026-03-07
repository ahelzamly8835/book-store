import { Link } from "react-router-dom";

export default function LinkItem({ children, to }) {
  return (
    <>
      <Link
        to={to}
        className="text-white text-lg font-semibold capitalize duration-200 hover:text-[#EAA451]"
      >
        {children}
      </Link>
    </>
  );
}
