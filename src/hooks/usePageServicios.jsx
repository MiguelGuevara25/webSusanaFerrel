import { useEffect, useState } from "react";

const usePageServicios = () => {
  const [datosPageServicios, setPageDatosServicios] = useState([]);

  const getDatosServicios = async () => {
    const url = `${import.meta.env.VITE_API_URL}page-servicios?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setPageDatosServicios(data.data);
  };

  useEffect(() => {
    getDatosServicios();
  }, []);

  return { datosPageServicios };
};

export default usePageServicios;
