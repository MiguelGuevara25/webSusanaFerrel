import { useEffect, useState } from "react";

const CollaboratorsDetails = () => {
  const [prueba, setPrueba] = useState([]);

  const getPrueba = async () => {
    const url = "http://localhost:1337/api/trabajadores";
    const res = await fetch(url);
    const data = await res.json();
    setPrueba(data.data);
  };

  useEffect(() => {
    getPrueba();
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-[#024F3C] text-3xl font-bold px-7">
        Conoce al equipo que te llevarán a lo más alto
      </h2>

      <img src="/images/rectangle-6.png" className="my-10" />

      <div className="px-6 flex flex-col gap-14">
        {prueba.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <img src="/images/rectangle-18.png" alt="" />

              <div className="font-semibold">
                <h3 className="text-2xl">{item.attributes.nombre}</h3>
                <span>Consultor</span>
              </div>

              <p>{item.attributes.descripcion}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CollaboratorsDetails;
