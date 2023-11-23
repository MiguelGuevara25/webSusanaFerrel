import { Swiper, SwiperSlide } from "swiper/react";
import Subtitles from "../../../components/Subtitles";
import Collaborator from "./Collaborator";
import EmpowerForms from "../../../components/EmpowerForms";
import useCollaborators from "../../../hooks/useCollaborators";
import useServicios from "../../../hooks/useServicios";
import useInicio from "../../../hooks/useInicio";

const Collaborators = () => {
  const { colaborador } = useCollaborators();
  const { datosInicio } = useInicio();
  const { servicios } = useServicios();

  return (
    <>
      <section className="flex flex-col gap-8 lg:mb-40 mb-[86px] overflow-hidden">
        {datosInicio?.map((datos) => {
          const { tituloTrabajadores, descripcionTrabajadores } =
            datos.attributes;

          return (
            <div key={datos.id} className="flex flex-col gap-4 w-[87%] mx-auto">
              <Subtitles>{tituloTrabajadores}</Subtitles>

              <p className="lg:w-3/5 w-full">{descripcionTrabajadores}</p>
            </div>
          );
        })}

        {colaborador?.length === 0 ? (
          <div className="hidden md:block w-[87%] mx-auto">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        ) : (
          <div className="hidden lg:grid grid-cols-4 w-3/5 mx-auto gap-y-10">
            {colaborador?.map((colab) => (
              <Collaborator key={colab.id} colab={colab} />
            ))}
          </div>
        )}

        {colaborador?.length === 0 ? (
          <div className="md:hidden flex w-[87%] mx-auto">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        ) : (
          <Swiper
            slidesPerView={"auto"}
            className="mySwiper w-full text-xs"
            style={{ marginLeft: "24px" }}
          >
            {colaborador?.map((colab) => {
              const { foto, nombre, cargo } = colab.attributes;
              const urlIMG =
                import.meta.env.VITE_IMG_URL + foto?.data?.attributes.url;

              return (
                <SwiperSlide key={colab.id} style={{ width: "140px" }}>
                  <div className="lg:hidden flex flex-col items-center gap-0.5">
                    <img
                      src={urlIMG}
                      className="rounded-full h-32 w-32 object-cover"
                    />
                    <span className="font-semibold text-center">{nombre}</span>
                    <span className="text-center">{cargo}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </section>

      {/* Sección 2 */}
      <section className="w-[87%] mx-auto md:mb-[214px] mb-24">
        <Subtitles>
          3 formas de
          <br />
          potenciarte
        </Subtitles>

        <div className="flex md:flex-row justify-between flex-col gap-10 mt-20">
          {servicios?.map((servicio) => {
            const { nombre, imagen } = servicio.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

            return (
              <EmpowerForms key={servicio.id} srcImg={urlIMG}>
                {nombre}
              </EmpowerForms>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Collaborators;
