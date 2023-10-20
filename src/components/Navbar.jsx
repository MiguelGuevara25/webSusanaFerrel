import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="py-6 bg-white text-[#024F3C]">
        <div className="flex justify-between items-center w-[87%] mx-auto">
          <div className="flex">
            <img src="/images/logoFerrel.svg" />
          </div>

          <div className="lg:flex gap-14 font-medium hidden">
            <Link to="/">
              <span>Inicio</span>
            </Link>

            <Link to="/servicios">
              <span>Qué hacemos</span>
            </Link>

            <Link to="/nosotros">
              <span>Quiénes somos</span>
            </Link>

            <Link to="/blog">
              <span>Blog</span>
            </Link>

            <Link to="/academia">
              <span>Academia</span>
            </Link>
          </div>

          <div className="lg:block hidden">
            <Link to="/contacto">
              <Button>Conversemos</Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <img src="/images/Icons.svg" />
          </div>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
};

export default Navbar;
