import Subtitles from "../../../components/Subtitles";
import useServicios from "../../../hooks/useServicios";

const ServicesCoach = () => {
  const { servicios } = useServicios();

  return (
    <section className="w-[87%] mx-auto flex flex-col lg:flex-row md:gap-16 gap-20 [&>div]:flex-1">
      {servicios?.map((servicio) => {
        const { nombre, descripcion, foto } = servicio.attributes;
        const urlIMG =
          import.meta.env.VITE_IMG_URL + foto?.data?.attributes.url;

        return (
          <div
            key={servicio.id}
            className="flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col">
              <img
                src={urlIMG}
                width={245}
                className="mb-12 self-center"
                alt={`Imagen de ${nombre}`}
              />

              <Subtitles self="start">{nombre}</Subtitles>

              <p className="mt-4">{descripcion}</p>
            </div>

            <button className="flex text-[#2EB593] font-semibold items-center gap-3 ">
              <p>Empecemos hoy</p>
              <img
                src="/images/group-10.svg"
                className="animationButton2"
                width={25}
                alt=""
              />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesCoach;
