import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Subtitles from "../../../components/Subtitles";
import Course from "../components/Course";

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
      <div className="relative flex flex-row-reverse lg:mb-[178px] mb-[121px]">
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

      <section className="w-[87%] mx-auto">
        {obtenerCursos.length === 0 ? (
          <Subtitles>Cargando Cursos...</Subtitles>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[80px] place-items-center lg:mb-[120px] mb-20">
            {obtenerCursos.map((curso) => (
              <Course key={curso.id} curso={curso} />
            ))}
          </div>
        )}

        <div className="flex justify-center lg:mb-40 mb-24">
          <Button>Mostrar más articulos</Button>
        </div>
      </section>
    </>
  );
};

export default Courses;
