import Button from "../../../components/Button";
import Subtitles from "../../../components/Subtitles";
import useCourse from "../../../hooks/useCourse";
import usePageAcademia from "../../../hooks/usePageAcademia";
import Course from "../components/Course";

const Courses = () => {
  const { obtenerCursos } = useCourse();
  const { datosAcademia } = usePageAcademia();

  return (
    <div className="lg:pt-[100px] pt-14">
      {datosAcademia?.map((datos) => {
        const { tituloPrincipal, subtituloPrincipal, imagenPrincipal } =
          datos.attributes;

        const urlIMG =
          import.meta.env.VITE_IMG_URL + imagenPrincipal?.data?.attributes.url;

        return (
          <div
            key={datos.id}
            className="relative flex flex-row-reverse lg:mb-[178px] mb-[121px]"
          >
            <div className="relative lg:w-1/2 md:w-full">
              <img
                src={urlIMG}
                className="w-full lg:h-screen h-[450px] object-cover"
              />
              <div className="absolute bg-gradient-to-t from-[#024F3C] inset-0"></div>
            </div>

            <div className="lg:relative absolute bottom-0 text-[#EFFFFB] lg:w-1/2 flex items-center">
              <div className="w-[87%] lg:w-[75%] mx-auto text-center lg:text-start">
                <h1 className="text-4xl font-bold mb-9 lg:text-[#024F3C] lg:text-6xl">
                  {tituloPrincipal}
                </h1>

                <p className="mb-4 lg:text-black lg:text-[28px]">
                  {subtituloPrincipal}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <section className="w-[87%] mx-auto">
        {obtenerCursos?.length === 0 ? (
          <div className="mb-10">
            <Subtitles>Cargando Cursos...</Subtitles>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[80px] place-items-center lg:mb-[120px] mb-20">
            {obtenerCursos?.map((curso) => (
              <Course key={curso.id} curso={curso} />
            ))}
          </div>
        )}

        {obtenerCursos?.length >= 7 && (
          <div className="flex justify-center lg:mb-40 mb-24">
            <Button>Mostrar más articulos</Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;
