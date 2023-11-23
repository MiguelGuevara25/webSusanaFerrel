import { useEffect, useState } from "react";

const useInfoSusana = () => {
  const [infoSusana, setInfoSusana] = useState([]);

  const getInfoSusana = async () => {
    const url = `${import.meta.env.VITE_API_URL}info-susanas?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setInfoSusana(data.data);
  };

  useEffect(() => {
    getInfoSusana();
  }, []);

  return { infoSusana };
};

export default useInfoSusana;
