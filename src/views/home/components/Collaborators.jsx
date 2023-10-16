import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Subtitles from "../../../components/Subtitles";

const Collaborators = () => {
  const [prueba, setPrueba] = useState([]);

  const getPrueba = async () => {
    const url = "http://localhost:1337/api/trabajadores";
    const res = await fetch(url);
    const data = await res.json();
    setPrueba(data.data);
  };

  useEffect(() => {
    getPrueba();
  }, []);

  return (
    <>
      <section className="flex gap-8 flex-col px-6">
        <Subtitles>Juntos lograremos tu mejor versión</Subtitles>

        <p>
          Somos profesionales capacitados para la transformación de equipos y
          sus integrantes a través del aprendizaje, creando un ambiente ideal
          para tu desarrollo personal, el de tu empresa y tus colaboradores.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper flex gap-5 text-xs w-full [&>div>div]:mb-9 [&>div>span]:bg-[#128266]"
        >
          {prueba.map((item) => {
            return (
              <SwiperSlide key={item.id}>
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
      <section className="px-6 my-16">
        <Subtitles>
          3 formas de
          <br />
          potenciarte
        </Subtitles>

        <div className="flex flex-col gap-10 mt-10">
          <div className="flex items-center gap-10 flex-1">
            <img src="/images/group-24.svg" />
            <span className="text-xl w-max">Coaching Personal</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>

          <div className="flex items-center gap-10 flex-1">
            <img src="/images/group-24.svg" />

            <span className="text-xl w-max">Coaching Personal</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>

          <div className="flex items-center gap-10 flex-1">
            <img src="/images/group-24.svg" />

            <span className="text-xl w-max">Coaching Personal</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborators;
