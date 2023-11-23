import { Swiper, SwiperSlide } from "swiper/react";
import useAboutUs from "../../../hooks/useAboutUs";

const Courses = () => {
  const { datosPageAboutUs } = useAboutUs();

  return (
    <section className="w-[87%] mx-auto">
      <div className="md:w-4/6 lg:mb-20 mb-8">
        {datosPageAboutUs?.map((datos) => {
          const { tituloAcademia } = datos.attributes;

          return (
            <h2
              key={datos.id}
              className="lg:leading-[52.08px] leading-9 text-[#024F3C] font-bold lg:text-[42px] text-[31px]"
            >
              {tituloAcademia}
            </h2>
          );
        })}
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
          style={{ marginLeft: "24px" }}
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
