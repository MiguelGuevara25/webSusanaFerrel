import { useEffect, useState } from "react";

const usePost = () => {
  const [post, setPost] = useState([]);
  const [visibleElements, setVisibleElements] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const postAnt = post.at(-1);

  const urlIMG =
    import.meta.env.VITE_IMG_URL +
    postAnt?.attributes.imagen.data?.attributes.url;

  const getPost = async () => {
    const url = `${import.meta.env.VITE_API_URL}posts?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setPost(data.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleClick = () => {
    if (showMore) {
      setVisibleElements(6);
      setShowMore(false);
    } else {
      setVisibleElements(post.length);
      setShowMore(true);
    }
  };

  const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    return fechaNueva.toLocaleDateString("es-ES", opciones);
  };

  return {
    visibleElements,
    urlIMG,
    handleClick,
    formatearFecha,
    postAnt,
    post,
    showMore,
  };
};

export default usePost;
