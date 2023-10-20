import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
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
            <img onClick={openModal} className="w-8" src="/images/Icons.svg" />
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-[#024F3C] text-[#81FDDE] h-screen absolute inset-0 z-20 p-6 flex flex-col justify-between">
          <div className="flex justify-end">
            <img onClick={closeModal} className="w-8" src="/images/close.svg" />
          </div>

          <div className="text-3xl flex flex-col gap-10">
            <h2>Inicio</h2>
            <h2>Qué hacemos</h2>
            <h2>Quiénes somos</h2>
            <h2>Blog</h2>
            <h2>Academia</h2>
            <h2>Conversemos</h2>
          </div>

          <section className="flex lg:flex-row-reverse flex-col lg:items-center justify-between gap-9">
            <div>
              <p className="text-white">
                ©2023 Susana Ferrel - Derechos reservados
              </p>
            </div>

            <div className="flex gap-4 [&>div]:bg-[#128266] [&>div]:rounded-full [&>div]:p-3 [&>div>img]:w-5 [&>div>img]:h-5">
              <div>
                <img src="/images/linkedin.svg" />
              </div>

              <div>
                <img src="/images/instagram.svg" />
              </div>

              <div>
                <img src="/images/facebook.svg" />
              </div>
            </div>
          </section>
        </div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Navbar;
