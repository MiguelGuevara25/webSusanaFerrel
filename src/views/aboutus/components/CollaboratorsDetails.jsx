import Subtitles from "../../../components/Subtitles";
import CollaboratorDetail from "./CollaboratorDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import useCollaborators from "../../../hooks/useCollaborators";

const CollaboratorsDetails = () => {
  const { colaborador } = useCollaborators();

  return (
    <section className="overflow-hidden">
      <div className="mb-8 md:mb-16 w-[87%] mx-auto">
        <div className="md:w-[50%]">
          <Subtitles>Conoce al equipo que te llevarán a lo más alto</Subtitles>
        </div>
      </div>

      <img src="/images/rectangle-6.png" className="mb-12 md:hidden w-full" />

      {colaborador?.length === 0 ? (
        <div className="hidden lg:flex w-[87%] mx-auto">
          <div className="mb-10">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        </div>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={86}
          className="mySwiper w-full text-xs"
          style={{ marginLeft: "100px" }}
        >
          {colaborador?.map((colab) => {
            const { imagen, nombre, cargo, funcion } = colab.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

            return (
              <SwiperSlide key={colab.id} style={{ width: "341px" }}>
                <div className="hidden lg:flex flex-col mb-40">
                  <img
                    src={urlIMG}
                    className="h-[248px] object-cover rounded-xl w-full mb-6"
                  />
                  <span className="font-semibold text-2xl">{nombre}</span>
                  <span className="font-semibold text-base mb-4">{cargo}</span>

                  <p className="text-base descriptionEmergencies2">{funcion}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div className="lg:hidden flex flex-col gap-14 w-[87%] mx-auto">
        {colaborador?.length === 0 ? (
          <div className="mb-10">
            <Subtitles>Cargando Colaboradores...</Subtitles>
          </div>
        ) : (
          colaborador?.map((colaborador) => (
            <CollaboratorDetail
              key={colaborador.id}
              colaborador={colaborador}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CollaboratorsDetails;
