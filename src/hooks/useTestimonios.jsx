import { useEffect, useState } from "react";

const useTestimonios = () => {
  const [obtenerTestimonios, setObtenerTestimonios] = useState([]);

  const getTestimonios = async () => {
    const url = `${import.meta.env.VITE_API_URL}testimonios?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setObtenerTestimonios(data?.data);
  };

  useEffect(() => {
    getTestimonios();
  }, []);

  return { obtenerTestimonios };
};

export default useTestimonios;
