import Partners from "../../../components/Partners";
import usePageServicios from "../../../hooks/usePageServicios";
import ServicesCoach from "../components/ServicesCoach";
import Testimonials from "../components/Testimonials";

const Servicios = () => {
  const { datosPageServicios } = usePageServicios();
  return (
    <div className="lg:pt-20 pt-14">
      {datosPageServicios?.map((datos) => {
        const { tituloPrincipal, subtituloPrincipal, imagenPrincipal } =
          datos.attributes;
        const urlIMG =
          import.meta.env.VITE_IMG_URL + imagenPrincipal?.data?.attributes.url;

        return (
          <div key={datos.id} className="relative flex flex-row-reverse">
            <div className="relative lg:w-1/2 md:w-full">
              <img src={urlIMG} className="w-full lg:h-screen h-[450px]" />

              <div className="absolute fondoSusana inset-0"></div>
            </div>

            <div className="lg:relative absolute bottom-0 text-[#EFFFFB] lg:w-1/2 flex items-center">
              <div className="w-[87%] lg:w-[75%] mx-auto text-center lg:text-start">
                <h1 className="text-4xl font-bold mb-9 lg:text-[#024F3C] lg:text-6xl">
                  {tituloPrincipal}
                </h1>

                <p className="mb-4 lg:text-black lg:text-[28px]">
                  {subtituloPrincipal}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mb-44 mt-16">
        <Partners />
      </div>

      <div className="mb-24">
        <ServicesCoach />
      </div>

      <div className="mb-24">
        <Testimonials />
      </div>
    </div>
  );
};

export default Servicios;
