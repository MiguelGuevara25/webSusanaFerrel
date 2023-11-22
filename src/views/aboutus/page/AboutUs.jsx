import useInicio from "../../../hooks/useInicio";
import CollaboratorsDetails from "../components/CollaboratorsDetails";
import Courses from "../components/Courses";

const AboutUs = () => {
  const { datosInicio } = useInicio();

  return (
    <div className="lg:pt-[100px] pt-14">
      <div className="relative flex lg:flex-row-reverse flex-col mb-20">
        <div className="relative lg:w-1/2 md:w-full">
          <img src="/images/photoSusana.png" className="w-full" />
          <div className="absolute fondoSusana inset-0"></div>
        </div>

        <div className="lg:w-1/2 flex items-center">
          {datosInicio?.map((datos) => {
            const { cargoSusana, descriptionSusana } = datos.attributes;

            return (
              <div key={datos.id} className="w-[87%] lg:w-[75%] mx-auto">
                <img
                  src="/images/nombreSusana.svg"
                  className="mb-4 lg:mt-0 mt-12"
                  alt=""
                />

                <p className="lg:mb-12 mb-7">{cargoSusana}</p>
                <p className="">{descriptionSusana}</p>
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
