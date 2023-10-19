import { useEffect, useState } from "react";
import Subtitles from "../../../components/Subtitles";

const CollaboratorsDetails = () => {
  const [obtenerColaborador, setObtenerColaborador] = useState([]);

  const getColaborador = async () => {
    const url = `${import.meta.env.VITE_API_URL}trabajadores?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setObtenerColaborador(data.data);
  };

  useEffect(() => {
    getColaborador();
  }, []);

  return (
    <section>
      <div className="mb-8 md:mb-16 w-[87%] mx-auto">
        <div className="md:w-[50%]">
          <Subtitles>Conoce al equipo que te llevarán a lo más alto</Subtitles>
        </div>
      </div>

      <img src="/images/rectangle-6.png" className="mb-12 md:hidden w-full" />

      <div className="flex flex-col gap-14 w-[87%] mx-auto">
        {obtenerColaborador.length === 0 ? (
          <Subtitles>Loading...</Subtitles>
        ) : (
          obtenerColaborador.map((colaborador) => {
            const { nombre, descripcion } = colaborador.attributes;

            return (
              <div key={colaborador.id} className="flex flex-col gap-4">
                <img src="/images/rectangle-18.png" alt="" />

                <div className="font-semibold">
                  <h3 className="text-2xl">{nombre}</h3>
                  <span>Consultor</span>
                </div>

                <p>{descripcion}</p>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default CollaboratorsDetails;
