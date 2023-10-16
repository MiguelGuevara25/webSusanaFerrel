import { Outlet } from "react-router-dom";
import NavMenu from "/images/Icons.svg";
import Logo from "/images/Vector.svg";
import Logo1 from "/images/vector1.svg";
import Logo2 from "/images/vector2.svg";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-6 bg-white">
        <div className="flex">
          <img src={Logo} alt="logo" />
          <img src={Logo1} alt="logo" />
          <img src={Logo2} alt="logo" />
        </div>

        <div>
          <img src={NavMenu} />
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
};

export default Navbar;
