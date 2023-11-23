import { useEffect, useState } from "react";

const useCourse = () => {
  const [obtenerCursos, setObtenerCursos] = useState([]);

  const getCursos = async () => {
    const url = `${import.meta.env.VITE_API_URL}cursos?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setObtenerCursos(data.data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  return { obtenerCursos };
};

export default useCourse;
