import { useEffect, useState } from "react";

const usePageAcademia = () => {
  const [datosAcademia, setDatosAcademia] = useState([]);

  const getDatosAcademia = async () => {
    const url = `${import.meta.env.VITE_API_URL}page-academias?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setDatosAcademia(data.data);
  };

  useEffect(() => {
    getDatosAcademia();
  }, []);

  return { datosAcademia };
};

export default usePageAcademia;
