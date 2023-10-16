import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#024F3C] py-14 px-6">
      <section className="flex gap-5 px-0 pb-8 border-b border-white">
        <Link to="/">
          <p className="text-[#81FDDE]">Inicio</p>
        </Link>

        <Link to="/nosotros">
          <p className="text-[#81FDDE]">Nosotros</p>
        </Link>

        <p className="text-[#81FDDE]">Programas</p>

        <Link to="/contacto">
          <p className="text-[#81FDDE]">Contacto</p>
        </Link>
      </section>

      <section className="pt-14 pb-[70px] text-white flex flex-col gap-5">
        <h1 className="pb-2.5 text-2xl font-semibold">Contacto</h1>

        <div className="flex flex-col gap-2.5">
          <p>Dirección</p>
          <p>+51 931130017</p>
          <p>correo@correo.com</p>
        </div>
      </section>

      <section className="text-white pt-[25px]">
        <div className="pt-[1.79px] pb-[3.41px] h-20">
          <p>©2023 Susana Ferrel - Derechos reservados</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#128266] px-3 py-3 rounded-full">
            <img src="/images/linkedin.svg" className="w-5 h-5" />
          </div>

          <div className="bg-[#128266] px-3 py-3 rounded-full">
            <img src="/images/instagram.svg" className="w-5 h-5" />
          </div>

          <div className="bg-[#128266] px-3 py-3 rounded-full">
            <img src="/images/facebook.svg" className="w-5 h-5" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
