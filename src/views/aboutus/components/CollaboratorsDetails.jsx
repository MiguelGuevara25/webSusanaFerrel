import { useEffect, useState } from "react";

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
      <h2 className="text-[#024F3C] text-3xl font-bold px-7">
        Conoce al equipo que te llevarán a lo más alto
      </h2>

      <img src="/images/rectangle-6.png" className="mt-8 mb-12" />

      <div className="px-6 flex flex-col gap-14">
        {obtenerColaborador.map((colaborador) => {
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
        })}
      </div>
    </section>
  );
};

export default CollaboratorsDetails;
