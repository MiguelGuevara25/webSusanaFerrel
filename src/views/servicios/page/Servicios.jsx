import Partners from "../../../components/Partners";
import ServicesCoach from "../components/ServicesCoach";
import Testimonials from "../components/Testimonials";

const Servicios = () => {
  return (
    <>
      <div className="relative flex flex-row-reverse">
        <div className="relative lg:w-1/2 md:w-full">
          <img src="/images/rectangle-17.png" className="w-full" />
          <div className="absolute bg-gradient-to-t from-[#024F3C] inset-0"></div>
        </div>

        <div className="lg:relative absolute bottom-0 text-[#EFFFFB] lg:w-1/2 flex items-center">
          <div className="w-[87%] lg:w-[75%] mx-auto text-center lg:text-start">
            <h1 className="text-4xl font-bold mb-9 lg:text-[#024F3C] lg:text-6xl">
              Descubre nuestros servicios que potenciarán tu mejor yo
            </h1>

            <p className="mb-4 lg:text-black lg:text-[28px]">
              Conoce todas la posibilidades que pueden potenciar a ti y a tu
              equipo.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-44 mt-16">
        <Partners />
      </div>

      <div className="mb-24">
        <ServicesCoach />
      </div>

      <div className="mb-24">
        <Testimonials />
      </div>
    </>
  );
};

export default Servicios;
