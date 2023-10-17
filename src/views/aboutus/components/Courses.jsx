import Subtitles from "../../../components/Subtitles";
import { Swiper, SwiperSlide } from "swiper/react";

const Courses = () => {
  return (
    <section className="[&>h2]:px-6">
      <Subtitles>
        Recibimos y damos para completar un círculo de cremiento
      </Subtitles>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={32}
        className="mySwiper text-xs w-full mt-8"
        style={{ paddingLeft: "24px" }}
      >
        <SwiperSlide style={{ width: "200px" }}>
          <div className="flex flex-col gap-4">
            <img src="/images/rectangle-18.png" alt="" />
            <h3 className="text-2xl">Laboratoria</h3>
            <p>
              Preparación y acompañamiento a estudiantes en la fase final de
              formación para participar en procesos de selección.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "200px" }}>
          <div className="flex flex-col gap-4">
            <img src="/images/rectangle-18.png" alt="" />
            <h3 className="text-2xl">Aspen</h3>
            <p>
              Construcción de estrategias que busquen maxificar el bienestar del
              emprendedor. Estrategias basadas en el expertiz de su carrera.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "200px" }}>
          <div className="flex flex-col gap-4">
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
