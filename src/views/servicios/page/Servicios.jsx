import Partners from "../../../components/Partners";
import ServicesCoach from "../components/ServicesCoach";
import Testimonials from "../components/Testimonials";

const Servicios = () => {
  return (
    <>
      <div className="photo flex items-end text-center">
        <div className="flex flex-col items-center px-6 text-white gap-9 mb-16">
          <h1 className="font-bold text-4xl">
            Descubre nuestros servicios que potenciarán tu mejor yo
          </h1>

          <p>
            Conoce todas la posibilidades que pueden potenciar a ti y a tu
            equipo.
          </p>
        </div>
      </div>

      <Partners />
      <ServicesCoach />
      <Testimonials />
    </>
  );
};

export default Servicios;
