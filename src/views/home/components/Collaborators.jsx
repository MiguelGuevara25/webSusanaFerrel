import { Swiper, SwiperSlide } from "swiper/react";
import Subtitles from "../../../components/Subtitles";
import Collaborator from "./Collaborator";
import EmpowerForms from "../../../components/EmpowerForms";
import useCollaborators from "../../../hooks/useCollaborators";

const Collaborators = () => {
  const { colaborador } = useCollaborators();

  return (
    <>
      <section className="flex flex-col gap-8 md:mb-40 mb-[86px] overflow-hidden">
        <div className="flex flex-col gap-4 w-[87%] mx-auto">
          <Subtitles>Juntos lograremos tu mejor versión</Subtitles>

          <p className="lg:w-3/5 w-full">
            Somos profesionales capacitados para la transformación de equipos y
            sus integrantes a través del aprendizaje, creando un ambiente ideal
            para tu desarrollo personal, el de tu empresa y tus colaboradores.
          </p>
        </div>

        {colaborador.length === 0 ? (
          <div className="hidden md:block w-[87%] mx-auto">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        ) : (
          <div className="hidden md:grid grid-cols-4 w-3/5 mx-auto gap-y-10">
            {colaborador.map((colab) => (
              <Collaborator key={colab.id} colab={colab} />
            ))}
          </div>
        )}

        {colaborador.length === 0 ? (
          <div className="md:hidden flex w-[87%] mx-auto">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        ) : (
          <Swiper
            slidesPerView={"auto"}
            className="mySwiper w-full text-xs"
            style={{ marginLeft: "24px" }}
          >
            {colaborador.map((colab) => {
              const { imagen, nombre, cargo } = colab.attributes;
              const urlIMG =
                import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

              return (
                <SwiperSlide key={colab.id} style={{ width: "140px" }}>
                  <div className="md:hidden flex flex-col items-center gap-0.5">
                    <img
                      src={urlIMG}
                      className="rounded-full h-32 w-32 object-cover"
                    />
                    <span className="font-semibold text-center">{nombre}</span>
                    <span>{cargo}</span>
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
          <EmpowerForms srcImg="/images/group-24.svg">Coaching</EmpowerForms>

          <EmpowerForms srcImg="/images/group-24.svg">Mentoring</EmpowerForms>

          <EmpowerForms srcImg="/images/group-24.svg">Liderazgo</EmpowerForms>
        </div>
      </section>
    </>
  );
};

export default Collaborators;
