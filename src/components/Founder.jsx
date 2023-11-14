import { useLocation } from "react-router-dom";
import useInicio from "../hooks/useInicio";

const Founder = () => {
  const location = useLocation();
  const { datosInicio } = useInicio();

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

      {datosInicio?.map((datos) => {
        const { cargoSusana, descriptionSusana } = datos.attributes;

        return (
          <div key={datos.id} className="lg:w-1/2">
            <img src="/images/nombreSusana.svg" className="mb-4" />
            <p className="mb-6 lg:mb-10">{cargoSusana}</p>
            <p className="">{descriptionSusana}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Founder;
