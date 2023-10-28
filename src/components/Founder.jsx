import { useLocation } from "react-router-dom";

const Founder = () => {
  const location = useLocation();

  return (
    <section className="flex flex-col lg:flex-row w-[87%] mx-auto items-center lg:gap-36">
      {location.pathname === "/" && (
        <div
          className="lg:w-1/2 mb-8 lg:mb-0 relative"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <img src="/images/susanaProfile.png" className="w-full" />
          <img
            src="/images/ellipse-18.svg"
            className="absolute bottom-0 2xl:left-20 left-0"
          />
        </div>
      )}

      <div className="lg:w-1/2">
        <img src="/images/nombreSusana.svg" className="mb-4" />
        <p className="mb-6 lg:mb-10">CEO & Founder</p>
        <p className="">
          Mentora, coach bilingüe, consultora en Aprendizaje y Desarrollo y
          Administradora de Empresas, con más de 20 años de experiencia como
          líder profesional en la gestión de procesos de Recursos Humanos:
          aprendizaje, reclutamiento, clima laboral, cultura, comunicaciones y
          bienestar. Apasionada por el aprendizaje y desarrollo de personas
          asumiendo distintos roles como: Speaker, Mentora, Facilitadora y
          Consultora.
        </p>
      </div>
    </section>
  );
};

export default Founder;
