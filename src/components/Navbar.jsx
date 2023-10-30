import { Link, Outlet, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fecha = new Date();
  const location = useLocation();
  const modalRef = useRef(null);

  useEffect(() => {
    // Al cambiar el estado de isOpen, ajusta la posición del modal
    window.scrollTo(0, 0);

    if (isOpen) {
      const modalElement = modalRef.current;

      if (modalElement) {
        const scrollY = window.scrollY;
        modalElement.style.top = `${scrollY}px`;
      }
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <nav className="lg:py-6 py-3 bg-white text-[#024F3C] fixed w-full z-30 shadow-lg">
        <div className="flex justify-between items-center w-[87%] mx-auto">
          <div className="flex">
            <Link to="/">
              <img src="/images/logoFerrel.svg" />
            </Link>
          </div>

          <div className="lg:flex gap-14 font-medium hidden">
            <Link to="/">
              <span
                className={`effect__hover ${
                  location.pathname === "/" && "border-b-2 border-[#024F3C]"
                }`}
              >
                Inicio
              </span>
            </Link>

            <Link to="/servicios">
              <span
                className={`effect__hover ${
                  location.pathname === "/servicios" &&
                  "border-b-2 border-[#024F3C]"
                }`}
              >
                Qué hacemos
              </span>
            </Link>

            <Link to="/nosotros">
              <span
                className={`effect__hover ${
                  location.pathname === "/nosotros" &&
                  "border-b-2 border-[#024F3C]"
                }`}
              >
                Quiénes somos
              </span>
            </Link>

            <Link to="/blog">
              <span
                className={`effect__hover ${
                  location.pathname === "/blog" && "border-b-2 border-[#024F3C]"
                }`}
              >
                Blog
              </span>
            </Link>

            <Link to="/academia">
              <span
                className={`effect__hover ${
                  location.pathname === "/academia" &&
                  "border-b-2 border-[#024F3C]"
                }`}
              >
                Academia
              </span>
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
        <div
          ref={modalRef}
          className="bg-[#024F3C] text-[#81FDDE] h-screen absolute inset-0 z-30 p-6 flex flex-col justify-between"
        >
          <div className="flex justify-end">
            <img onClick={closeModal} className="w-8" src="/images/close.svg" />
          </div>

          <div className="text-3xl flex flex-col gap-10">
            <Link to="/" onClick={closeModal}>
              <h2>Inicio</h2>
            </Link>

            <Link to="/servicios" onClick={closeModal}>
              <h2>Qué hacemos</h2>
            </Link>

            <Link to="/nosotros" onClick={closeModal}>
              <h2>Quiénes somos</h2>
            </Link>

            <Link to="/blog" onClick={closeModal}>
              <h2>Blog</h2>
            </Link>

            <Link to="/academia" onClick={closeModal}>
              <h2>Academia</h2>
            </Link>

            <Link to="/contacto" onClick={closeModal}>
              <h2>Conversemos</h2>
            </Link>
          </div>

          <section className="flex lg:flex-row-reverse flex-col lg:items-center justify-between gap-9">
            <div>
              <p className="text-white">
                ©{fecha.getFullYear()} Susana Ferrel - Derechos reservados
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
    </>
  );
};

export default Navbar;
