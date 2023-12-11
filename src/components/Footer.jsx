import { Link, useLocation } from "react-router-dom";
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Footer = () => {
  const fecha = new Date();
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer ref={footerRef} className="bg-[#024F3C] py-14">
      <div className="w-[87%] mx-auto">
        <section className="flex gap-5 px-0 pb-8 border-b border-[#81fdde33] md:justify-end">
          <Link to="/">
            <p className="text-[#81FDDE]">Inicio</p>
          </Link>

          <Link to="/servicios">
            <p className="text-[#81FDDE]">Qué hacemos</p>
          </Link>

          <Link to="/nosotros">
            <p className="text-[#81FDDE]">Quiénes somos</p>
          </Link>
        </section>

        <section className="pt-14 pb-[70px] text-white flex flex-col gap-5">
          <h3 className="pb-2.5 text-2xl font-semibold">Contacto</h3>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <IoLocationSharp />
              <span>Dirección</span>
            </div>

            <div className="flex items-center gap-4">
              <IoCall />
              <span>+51 555 555 555</span>
            </div>

            <div className="flex items-center gap-4">
              <IoMail />
              <span>hola@susanaferrel.com</span>
            </div>
          </div>
        </section>

        <section className="text-white flex md:flex-row-reverse flex-col md:items-center justify-between gap-9">
          <div className="">
            <p>©{fecha.getFullYear()} Susana Ferrel - Derechos reservados</p>
          </div>

          <div className="flex gap-4 [&>a]:bg-[#128266] [&>a]:rounded-full [&>a]:p-3 [&>a>img]:w-5 [&>a>img]:h-5">
            <a
              href="https://www.linkedin.com/company/susana-ferrel-coaching-consultoria/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.svg" />
            </a>

            <a
              href="https://www.instagram.com/sueferrel"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/instagram.svg" />
            </a>

            <a
              href="https://www.facebook.com/susanaferrelcoach/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/facebook.svg" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
