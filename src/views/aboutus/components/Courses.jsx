import { Swiper, SwiperSlide } from "swiper/react";
import useAboutUs from "../../../hooks/useAboutUs";
import usePageAboutUsCourse from "../../../hooks/usePageAboutUsCourse";

const Courses = () => {
  const { datosPageAboutUs } = useAboutUs();
  const { datosPageAboutUsCourse } = usePageAboutUsCourse();

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
        {datosPageAboutUsCourse?.map((datos) => {
          const { titulo, descripcion, imagen } = datos.attributes;
          const urlIMG =
            import.meta.env.VITE_IMG_URL + imagen?.data?.attributes.url;

          return (
            <div key={datos.id}>
              <img src={urlIMG} className="mb-6 w-full" alt="" />
              <h3 className="text-2xl mb-4">{titulo}</h3>
              <p>{descripcion}</p>
            </div>
          );
        })}
      </div>

      <div className="lg:hidden">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={32}
          className="mySwiper text-xs w-full"
          style={{ paddingRight: "24px" }}
        >
          {datosPageAboutUsCourse?.map((datos) => {
            const { titulo, descripcion, imagen } = datos.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + imagen?.data?.attributes.url;

            return (
              <SwiperSlide key={datos.id} style={{ width: "200px" }}>
                <div className="flex flex-col gap-4">
                  <img src={urlIMG} alt="" />
                  <h3 className="text-2xl">{titulo}</h3>
                  <p>{descripcion}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
