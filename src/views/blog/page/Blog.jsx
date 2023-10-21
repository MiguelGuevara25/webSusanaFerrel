import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Blog = () => {
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

  return (
    <div className="w-[87%] mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-14 gap-4 lg:w-9/12 lg:my-28 my-12">
        <img
          src={urlIMG}
          className="relative object-cover rounded-xl w-full h-[248px]"
          alt="Nuevo Blog"
        />

        <p className="absolute text-white bg-[#2EB593] rounded-lg p-1.5 text-xs mt-3 ml-3">
          ¡NUEVO!
        </p>

        <div className="">
          <div>
            <span className="text-[13px] uppercase">
              {postAnt?.attributes.categoria}
            </span>

            <h2 className="text-[#024F3C] font-bold text-3xl">
              {postAnt?.attributes.titulo}
            </h2>

            <span className="font-semibold text-[10px] uppercase">
              {formatearFecha(postAnt?.attributes.publishedAt)}
            </span>
          </div>

          <p className="descriptionEmergencies2 mb-8">
            {postAnt?.attributes.descripcion}
          </p>

          <Link to={`/post/${postAnt?.attributes.url}`}>
            <button className="flex text-[#2EB593] font-semibold gap-3 items-center">
              <p>Seguir Leyendo</p>
              <img src="/images/group-10.svg" width={25} alt="" />
            </button>
          </Link>
        </div>
      </div>

      <h3 className="text-2xl text-[#024F3C] mb-20">Más Recientes</h3>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col gap-20 place-items-center mb-[120px]">
        {post.slice(0, visibleElements).map((postBlog) => {
          const { titulo, imagen, categoria, publishedAt, descripcion, url } =
            postBlog.attributes;
          const urlIMG =
            import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

          return (
            <div key={postBlog.id} className="w-[342px] h-[539px]">
              <Link to={`/post/${url}`}>
                <div className="h-[248px] mb-8">
                  <img
                    src={urlIMG}
                    className="rounded-xl w-full h-full"
                    alt=""
                  />
                </div>
              </Link>

              <span className="text-[13px] uppercase">{categoria}</span>
              <h2 className="text-3xl font-bold text-[#024F3C] descriptionEmergencies3">
                {titulo}
              </h2>

              <span className="text-[10px] font-semibold uppercase">
                {formatearFecha(publishedAt)}
              </span>

              <p className="descriptionEmergencies2 mt-4 mb-8">{descripcion}</p>

              <div className="w-1/2 border-b border-[#128266]"></div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mb-40" onClick={handleClick}>
        <Button>{showMore ? "Mostrar menos" : "Cargar más articulos"}</Button>
      </div>
    </div>
  );
};

export default Blog;
