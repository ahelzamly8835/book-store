import LogoImg from "../../assets/images/logo.svg";

export default function NavbarLogo() {
  return (
    <>
      <img
        src={LogoImg}
        alt="logo"
        className="border-r border-[#EAA451] pr-6 mr-6"
      />
    </>
  );
}
