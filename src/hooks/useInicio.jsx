import { useEffect, useState } from "react";

const useInicio = () => {
  const [datosInicio, setDatosInicio] = useState([]);

  const getDatosInicio = async () => {
    const url = `${import.meta.env.VITE_API_URL}page-inicios?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setDatosInicio(data.data);
  };

  useEffect(() => {
    getDatosInicio();
  }, []);

  return { datosInicio };
};

export default useInicio;
