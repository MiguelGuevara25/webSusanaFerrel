import Partners from "../../../components/Partners";
import ServicesCoach from "../components/ServicesCoach";
import Testimonials from "../components/Testimonials";

const Servicios = () => {
  return (
    <>
      <div className="border-2 border-red-500">
        <div className="relative">
          <img src="/images/rectangle-17.png" className="" />

          <div className="absolute bg-yellow-500 inset-0">5</div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col relative border-2 border-green-500">
        <div className="">
          <img
            src="/images/rectangle-17.png"
            className="absolute -z-10 bottom-0 border-2 border-red-500"
            alt=""
          />
        </div>

        <div className="md:w-1/2 mx-auto flex items-center">
          <div className="w-[74%] mx-auto md:text-start text-center">
            <h1 className="md:text-6xl text-4xl md:text-[#024F3C] text-red-500 font-bold md:mb-12 mb-9">
              Descubre nuestros servicios que potenciarán tu mejor yo
            </h1>

            <p className="md:text-[28px] text-[16px] text-red-500">
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
