import { useEffect, useState } from "react";

const useServicios = () => {
  const [servicios, setServicios] = useState([]);

  const getServicios = async () => {
    const url = `${import.meta.env.VITE_API_URL}servicios?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setServicios(data.data);
  };

  useEffect(() => {
    getServicios();
  }, []);

  return { servicios };
};

export default useServicios;
