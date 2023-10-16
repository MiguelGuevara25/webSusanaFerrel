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
      <div className="photo flex items-end text-center">
        <div className="flex flex-col items-center px-6 text-white gap-9 mb-16">
          <h1 className="font-bold text-4xl">
            Descubre nuestros servicios que potenciarán tu mejor yo
          </h1>

          <p>
            Conoce todas la posibilidades que pueden potenciar a ti y a tu
            equipo.
          </p>
        </div>
      </div>

      <section className="px-6 flex flex-col">
        {obtenerCursos.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          obtenerCursos.map((cursos) => {
            const { imagen, descripcion, titulo } = cursos.attributes;
            const urlIMG =
              import.meta.env.VITE_IMG_URL + imagen.data.attributes.url;

            return (
              <div key={cursos.id} className="flex flex-col gap-8 my-14">
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
