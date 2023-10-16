import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="bg-[#E1F4F0] rounded-xl mx-6 text-[#024F3C] my-14 px-7 py-10">
      <div className="text-center mb-9">
        <h3 className="font-semibold text-sm mb-4">COACHING PERSONAL</h3>
        <p>
          “Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
          elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
          malesuada sed ut elementum lacus.”
        </p>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex gap-5 text-xs w-full [&>div>div]:mb-9 [&>div>span]:bg-[#128266]"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold text-center">Martin Avellaneda</span>

            <span>Consultor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold">Elizabeth Gomez</span>

            <span>Consultora</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold">Lizbelt Muñoz</span>

            <span>Consultora</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold">Lizbelt Muñoz</span>

            <span>Consultora</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold">Lizbelt Muñoz</span>

            <span>Consultora</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-0.5">
            <img src="/images/ellipse-13.svg" />

            <span className="font-semibold">Lizbelt Muñoz</span>

            <span>Consultora</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
