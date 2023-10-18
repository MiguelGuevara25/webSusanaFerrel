import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Subtitles from "../../../components/Subtitles";

const Collaborators = () => {
  const [colaborador, setColaborador] = useState([]);

  const getColaborador = async () => {
    const url = `${import.meta.env.VITE_API_URL}trabajadores?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setColaborador(data.data);
  };

  useEffect(() => {
    getColaborador();
  }, []);

  return (
    <>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-[87%] mx-auto">
          <Subtitles>Juntos lograremos tu mejor versión</Subtitles>

          <p className="lg:w-3/5 w-full">
            Somos profesionales capacitados para la transformación de equipos y
            sus integrantes a través del aprendizaje, creando un ambiente ideal
            para tu desarrollo personal, el de tu empresa y tus colaboradores.
          </p>
        </div>

        <Swiper
          slidesPerView={"auto"}
          className="mySwiper w-full text-xs"
          style={{ marginLeft: "24px" }}
        >
          {colaborador.map((item) => {
            return (
              <SwiperSlide key={item.id} style={{ width: "140px" }}>
                <div className="flex flex-col items-center gap-0.5">
                  <img src="/images/ellipse-13.svg" />
                  <span className="font-semibold text-center">
                    {item.attributes.nombre}
                  </span>
                  <span>Consultor</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Sección 2 */}
      <section className="mt-[86px] w-[87%] mx-auto mb-24">
        <Subtitles>
          3 formas de
          <br />
          potenciarte
        </Subtitles>

        <div className="flex md:flex-row justify-between flex-col gap-10 mt-20">
          <div className="flex md:flex-col gap-4 md:gap-12 items-center justify-between">
            <img src="/images/group-24.svg" />
            <div className="flex gap-6">
              <span className="text-2xl">Coaching</span>
              <img src="/images/arrowRight.svg" alt="" />
            </div>
          </div>

          <div className="flex md:flex-col gap-4 md:gap-12 items-center justify-between">
            <img src="/images/group-24.svg" />
            <div className="flex gap-6">
              <span className="text-2xl">Mentoring</span>
              <img src="/images/arrowRight.svg" alt="" />
            </div>
          </div>

          <div className="flex md:flex-col gap-4 md:gap-12 items-center justify-between">
            <img src="/images/group-24.svg" />
            <div className="flex gap-6">
              <span className="text-2xl">Liderazgo</span>
              <img src="/images/arrowRight.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborators;
