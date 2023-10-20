import { Link } from "react-router-dom";
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const fecha = new Date();

  return (
    <footer className="bg-[#024F3C] py-14">
      <div className="w-[87%] mx-auto">
        <section className="flex gap-5 px-0 pb-8 border-b border-[#81fdde33] md:justify-end">
          <Link to="/">
            <p className="text-[#81FDDE]">Inicio</p>
          </Link>

          <Link to="/nosotros">
            <p className="text-[#81FDDE]">Nosotros</p>
          </Link>

          <Link to="/contacto">
            <p className="text-[#81FDDE]">Contacto</p>
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
    </footer>
  );
};

export default Footer;
