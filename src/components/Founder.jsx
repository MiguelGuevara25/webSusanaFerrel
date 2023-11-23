import { useLocation } from "react-router-dom";
import useInfoSusana from "../hooks/useInfoSusana";

const Founder = () => {
  const location = useLocation();
  const { infoSusana } = useInfoSusana();

  return (
    <section className="flex flex-col lg:flex-row w-[87%] mx-auto items-center lg:gap-36">
      {location.pathname === "/" && (
        <div
          className="lg:w-1/2 mb-8 lg:mb-0 relative"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <img src="/images/Susana.jpeg" className="w-full rounded-full" />
          <img
            src="/images/ellipse-18.svg"
            className="absolute bottom-0 2xl:left-20 left-0"
          />
        </div>
      )}

      {infoSusana?.map((datos) => {
        const { cargo, descripcion } = datos.attributes;

        return (
          <div key={datos.id} className="lg:w-1/2">
            <img src="/images/nombreSusana.svg" className="mb-4" />
            <p className="mb-6 lg:mb-10">{cargo}</p>
            <p className="">{descripcion}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Founder;
