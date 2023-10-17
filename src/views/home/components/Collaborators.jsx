import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 px-6">
          <Subtitles>Juntos lograremos tu mejor versión</Subtitles>

          <p>
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
          {prueba.map((item) => {
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
      <section className="px-6 mt-[86px] mb-24">
        <Subtitles>
          3 formas de
          <br />
          potenciarte
        </Subtitles>

        <div className="flex flex-col gap-10 mt-20">
          <div className="flex gap-4 items-center justify-between">
            <img src="/images/group-24.svg" />
            <span className="text-2xl w-min">Coaching personal</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>

          <div className="flex gap-4 items-center justify-between">
            <img src="/images/group-24.svg" />
            <span className="text-2xl w-min">Coaching grupal</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>

          <div className="flex gap-4 items-center justify-between">
            <img src="/images/group-24.svg" />
            <span className="text-2xl w-min">Coaching social</span>
            <img src="/images/arrowRight.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborators;
