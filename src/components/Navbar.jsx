import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-6 md:px-24 bg-white text-[#024F3C]">
        <div className="flex">
          <img src="/images/vector.svg" />
          <img src="/images/vector1.svg" />
          <img src="/images/vector2.svg" />
        </div>

        <div className="lg:flex gap-14 font-medium hidden">
          <span>Inicio</span>
          <span>Qué hacemos</span>
          <span>Quiénes somos</span>
          <span>Blog</span>
          <span>Academia</span>
        </div>

        <div className="lg:block hidden">
          <Button>Conversemos</Button>
        </div>

        <div className="lg:hidden">
          <img src="/images/Icons.svg" />
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
};

export default Navbar;
