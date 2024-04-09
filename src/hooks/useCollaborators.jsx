import { useEffect, useState } from "react";

const useCollaborators = () => {
  const [colaborador, setColaborador] = useState([]);

  const getColaborador = async () => {
    const url = `${import.meta.env.VITE_API_URL}trabajadores?populate=*&sort[0]=orden`;
    const res = await fetch(url);
    const data = await res.json();
    setColaborador(data.data);
  };

  useEffect(() => {
    getColaborador();
  }, []);

  return { colaborador };
};

export default useCollaborators;
