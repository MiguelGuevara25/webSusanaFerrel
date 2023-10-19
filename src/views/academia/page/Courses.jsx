import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Subtitles from "../../../components/Subtitles";

const Courses = () => {
  const [obtenerCursos, setObtenerCursos] = useState([]);

  const getCursos = async () => {
    const url = `${import.meta.env.VITE_API_URL}cursos?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setObtenerCursos(data.data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <div className="relative flex flex-row-reverse mb-[124px]">
        <div className="relative lg:w-1/2 md:w-full">
          <img src="/images/rectangle-17.png" className="w-full" />
          <div className="absolute bg-gradient-to-t from-[#024F3C] inset-0"></div>
        </div>

        <div className="lg:relative absolute bottom-0 text-[#EFFFFB] lg:w-1/2 flex items-center">
          <div className="w-[87%] lg:w-[75%] mx-auto text-center lg:text-start">
            <h1 className="text-4xl font-bold mb-9 lg:text-[#024F3C] lg:text-6xl">
              Nuestra academia tiene lo indicado para ti y tu equipo
            </h1>

            <p className="mb-4 lg:text-black lg:text-[28px]">
              Todo lo que ofrecemos esta diseñado para ayudarte a crear la mejor
              versión de ti.
            </p>
          </div>
        </div>
      </div>

      <section className="px-6 flex flex-col">
        {obtenerCursos.length === 0 ? (
          <Subtitles>Cargando Cursos...</Subtitles>
        ) : (
          obtenerCursos.map((cursos) => {
            const { imagen, descripcion, titulo } = cursos.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + imagen.data.attributes.url;

            return (
              <div key={cursos.id} className="flex flex-col gap-8 mb-20">
                <img
                  src={urlIMG}
                  alt={`Imagen del curso ${titulo}`}
                  className="w-[341px] h-[248px] rounded-xl"
                />

                <div className="flex flex-col gap-4">
                  <Subtitles>{titulo}</Subtitles>
                  <p>{descripcion}</p>
                </div>

                <button className="flex text-[#2EB593] font-semibold gap-3 items-center">
                  <p>Conocer más</p>
                  <img src="/images/group-10.svg" width={25} alt="" />
                </button>
              </div>
            );
          })
        )}

        <Button self="center" mb="10">
          Mostrar más articulos
        </Button>
      </section>
    </>
  );
};

export default Courses;
