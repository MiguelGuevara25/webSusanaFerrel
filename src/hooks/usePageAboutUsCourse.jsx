import { useEffect, useState } from "react";

const usePageAboutUsCourse = () => {
  const [datosPageAboutUsCourse, setPageDatosAboutUsCourse] = useState([]);

  const getDatosAboutUsCourse = async () => {
    const url = `${import.meta.env.VITE_API_URL}page-aboutus-cursos?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setPageDatosAboutUsCourse(data.data);
  };

  useEffect(() => {
    getDatosAboutUsCourse();
  }, []);

  return { datosPageAboutUsCourse };
};

export default usePageAboutUsCourse;
