import Subtitles from "../../../components/Subtitles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Courses = () => {
  return (
    <section className="px-6 mb-20">
      <Subtitles>
        Recibimos y damos para completar un círculo de cremiento
      </Subtitles>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex gap-5 text-xs w-full [&>div>div]:mb-9 [&>div>span]:bg-[#128266]"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-4 mt-8">
            <img src="/images/rectangle-18.png" alt="" />
            <h3 className="text-2xl">Laboratoria</h3>
            <p>
              Preparación y acompañamiento a estudiantes en la fase final de
              formación para participar en procesos de selección.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-4 mt-8">
            <img src="/images/rectangle-18.png" alt="" />
            <h3 className="text-2xl">Aspen</h3>
            <p>
              Construcción de estrategias que busquen maxificar el bienestar del
              emprendedor. Estrategias basadas en el expertiz de su carrera.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-4 mt-8">
            <img src="/images/rectangle-18.png" alt="" />
            <h3 className="text-2xl">Nesst</h3>
            <p>
              Sesiones de coaching en alianza con Nesst para CEOs de empresas de
              impacto social.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Courses;
