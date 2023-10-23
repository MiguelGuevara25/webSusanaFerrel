import { Link } from "react-router-dom";

const Post = ({ postBlog }) => {
  const { titulo, imagen, categoria, publishedAt, descripcion, url } =
    postBlog.attributes;
  const urlIMG = import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

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
    <div className="w-[342px] h-[539px]">
      <Link to={`/post/${url}`}>
        <div className="h-[248px] mb-8">
          <img src={urlIMG} className="rounded-xl w-full h-full" alt="" />
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
};

export default Post;