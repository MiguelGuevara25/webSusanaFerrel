import CollaboratorsDetails from "../components/CollaboratorsDetails";
import Courses from "../components/Courses";

const AboutUs = () => {
  return (
    <>
      <div className="relative flex lg:flex-row-reverse flex-col mb-20">
        <div className="relative lg:w-1/2 md:w-full">
          <img src="/images/photoSusana.png" className="w-full" />
          <div className="absolute fondoSusana inset-0"></div>
        </div>

        <div className="lg:w-1/2 flex items-center">
          <div className="w-[87%] lg:w-[75%] mx-auto">
            <img
              src="/images/nombreSusana.svg"
              className="mb-4 lg:mt-0 mt-12"
              alt=""
            />

            <p className="lg:mb-12 mb-7">CEO & Founder</p>

            <p className="">
              Mentora, coach bilingüe, consultora en Aprendizaje y Desarrollo y
              Administradora de Empresas, con más de 20 años de experiencia como
              líder profesional en la gestión de procesos de Recursos Humanos:
              aprendizaje, reclutamiento, clima laboral, cultura, comunicaciones
              y bienestar. Apasionada por el aprendizaje y desarrollo de
              personas asumiendo distintos roles como: Speaker, Mentora,
              Facilitadora y Consultora.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <Courses />
      </div>

      <CollaboratorsDetails />
    </>
  );
};

export default AboutUs;
