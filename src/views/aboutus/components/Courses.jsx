import Subtitles from "../../../components/Subtitles";
import { Swiper, SwiperSlide } from "swiper/react";

const Courses = () => {
  return (
    <section className="w-[87%] mx-auto">
      <div className="md:w-4/6 lg:mb-20 mb-8">
        <Subtitles>
          Creamos un círculos virtuoso dando para contribuir en el desarrollo de
          los demás
        </Subtitles>
      </div>

      <div className="lg:flex hidden [&>div]:flex-1 gap-20">
        <div className="">
          <img src="/images/rectangle-18.png" className="mb-6 w-full" alt="" />
          <h3 className="text-2xl mb-4">Laboratoria</h3>
          <p>
            Preparación y acompañamiento a estudiantes en la fase final de
            formación para participar en procesos de selección.
          </p>
        </div>

        <div className="">
          <img src="/images/rectangle-18.png" className="mb-6 w-full" alt="" />
          <h3 className="text-2xl mb-4">Aspen</h3>
          <p>
            Construcción de estrategias que busquen maxificar el bienestar del
            emprendedor. Estrategias basadas en el expertiz de su carrera.
          </p>
        </div>

        <div className="">
          <img src="/images/rectangle-18.png" className="mb-6 w-full" alt="" />
          <h3 className="text-2xl mb-4">Nesst</h3>
          <p>
            Sesiones de coaching en alianza con Nesst para CEOs de empresas de
            impacto social.
          </p>
        </div>
      </div>

      <div className="lg:hidden">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={32}
          className="mySwiper text-xs w-full"
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
                Construcción de estrategias que busquen maxificar el bienestar
                del emprendedor. Estrategias basadas en el expertiz de su
                carrera.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "200px" }}>
            <div className="flex flex-col gap-4">
              <img src="/images/rectangle-18.png" alt="" />
              <h3 className="text-2xl">Nesst</h3>
              <p>
                Sesiones de coaching en alianza con Nesst para CEOs de empresas
                de impacto social.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
