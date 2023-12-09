import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useTestimonios from "../../../hooks/useTestimonios";

const Testimonials = () => {
  const { obtenerTestimonios } = useTestimonios();

  return (
    <>
      <div className="lg:block hidden w-[91%] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper flex gap-5 w-full [&>div>div]:mb-12 [&>div>span]:bg-[#128266]"
        >
          {obtenerTestimonios?.map((testimonial) => {
            const { nombre, nombreServicio, cargo, testimonio, foto } =
              testimonial.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + foto?.data?.attributes.url;

            return (
              <SwiperSlide key={testimonial.id}>
                <section className="bg-[#E1F4F0] w-[87%] mx-auto rounded-xl text-[#024F3C] px-7 py-10 flex flex-col justify-between h-[465px]">
                  <div className="text-center mb-9">
                    <h3 className="font-semibold mb-6 text-[13px] uppercase">
                      {nombreServicio}
                    </h3>
                    <p className="descriptionEmergencies2">
                      &quot;{testimonio}&quot;
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <img
                      src={urlIMG}
                      className="w-[134px] h-[134px] rounded-full object-cover"
                    />

                    <span className="font-semibold text-center">{nombre}</span>

                    <span className="text-[13px]">{cargo}</span>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="lg:hidden block">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper flex gap-5 w-full [&>div>div]:mb-12 [&>div>span]:bg-[#128266]"
        >
          {obtenerTestimonios?.map((testimonial) => {
            const { nombre, nombreServicio, cargo, testimonio, foto } =
              testimonial.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + foto?.data?.attributes.url;

            return (
              <SwiperSlide key={testimonial.id}>
                <section className="bg-[#E1F4F0] w-[87%] mx-auto rounded-xl text-[#024F3C] px-7 py-10 h-[460px] flex flex-col justify-between">
                  <div className="text-center mb-9">
                    <h3 className="font-semibold mb-6 text-[13px] uppercase">
                      {nombreServicio}
                    </h3>
                    <p className="descriptionEmergencies2">
                      &quot;{testimonio}&quot;
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <img
                      src={urlIMG}
                      className="w-[134px] h-[134px] rounded-full object-cover"
                    />

                    <span className="font-semibold text-center">{nombre}</span>

                    <span className="text-[13px]">{cargo}</span>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
