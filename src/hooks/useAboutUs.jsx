import { useEffect, useState } from "react";

const useAboutUs = () => {
  const [datosPageAboutUs, setDatosPageAboutUs] = useState([]);

  const getDatosPageAboutUs = async () => {
    const url = `${import.meta.env.VITE_API_URL}page-aboutuses?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setDatosPageAboutUs(data.data);
  };

  useEffect(() => {
    getDatosPageAboutUs();
  }, []);

  return { datosPageAboutUs };
};

export default useAboutUs;
