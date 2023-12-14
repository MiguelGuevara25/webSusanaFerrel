import useInfoSusana from "../../../hooks/useInfoSusana";
import CollaboratorsDetails from "../components/CollaboratorsDetails";
import Courses from "../components/Courses";

const AboutUs = () => {
  const { infoSusana } = useInfoSusana();

  return (
    <div className="lg:pt-[100px] pt-14">
      <div className="relative flex lg:flex-row-reverse flex-col mb-20">
        <div className="relative lg:w-1/2 md:w-full">
          <img src="/images/Susana.jpeg" className="w-full h-screen object-cover" />
          <div className="absolute fondoSusana inset-0"></div>
        </div>

        <div className="lg:w-1/2 flex items-center">
          {infoSusana?.map((datos) => {
            const { cargo, descripcion } = datos.attributes;

            return (
              <div key={datos.id} className="w-[87%] lg:w-[75%] mx-auto">
                <img
                  src="/images/nombreSusana.svg"
                  className="mb-4 lg:mt-0 mt-12"
                  alt="Imagen de Susana"
                />

                <p className="lg:mb-12 mb-7">{cargo}</p>
                <p className="">{descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-24">
        <Courses />
      </div>

      <CollaboratorsDetails />
    </div>
  );
};

export default AboutUs;
