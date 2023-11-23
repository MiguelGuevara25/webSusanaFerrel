import { useEffect, useState } from "react";

const usePartners = () => {
  const [infoPartners, setInfoPartners] = useState([]);

  const getInfoPartners = async () => {
    const url = `${import.meta.env.VITE_API_URL}partners?populate=*`;
    const res = await fetch(url);
    const data = await res.json();
    setInfoPartners(data.data);
  };

  useEffect(() => {
    getInfoPartners();
  }, []);

  return { infoPartners };
};

export default usePartners;
