import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [obtenerTestimonios, setObtenerTestimonios] = useState([]);

  const getTestimonios = async () => {
    const url = `${import.meta.env.VITE_API_URL}testimonios?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setObtenerTestimonios(data.data);
  };

  useEffect(() => {
    getTestimonios();
  }, []);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper flex gap-5 w-full [&>div>div]:mb-12 [&>div>span]:bg-[#128266]"
    >
      <SwiperSlide>
        <section className="bg-[#E1F4F0] rounded-xl mx-6 text-[#024F3C] px-7 py-10">
          <div className="text-center mb-9">
            <h3 className="font-semibold mb-6 text-[13px]">
              COACHING PERSONAL
            </h3>
            <p>
              “Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
              elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
              malesuada sed ut elementum lacus.”
            </p>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold text-center">Martin Avellaneda</span>

            <span className="text-[13px]">Consultor</span>
          </div>
        </section>
      </SwiperSlide>

      {obtenerTestimonios.map((testimonial) => {
        console.log(testimonial);

        const { nombre, nombre_servicio, cargo, descripcion, imagen } =
          testimonial.attributes;
        const urlIMG =
          import.meta.env.VITE_IMG_URL + imagen.data.attributes.url;

        return (
          <SwiperSlide key={testimonial.id}>
            <section className="bg-[#E1F4F0] rounded-xl mx-6 text-[#024F3C] px-7 py-10">
              <div className="text-center mb-9">
                <h3 className="font-semibold mb-6 text-[13px] uppercase">
                  {nombre_servicio}
                </h3>
                <p>&quot;{descripcion}&quot;</p>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <img
                  src={urlIMG}
                  className="w-[134px] h-[134px] rounded-full"
                />

                <span className="font-semibold text-center">{nombre}</span>

                <span className="text-[13px]">{cargo}</span>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonials;
