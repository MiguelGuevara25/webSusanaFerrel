import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "react-markdown";

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState([]);
  const { url } = useParams();
  const navigate = useNavigate();

  const getPostDetails = async (urlData) => {
    const url = `${
      import.meta.env.VITE_API_URL
    }posts?filters[url]=${urlData}&populate=*`;

    const res = await fetch(url);
    const data = await res.json();
    setPostDetails(data.data[0].attributes);
  };

  useEffect(() => {
    getPostDetails(url);
  }, [url]);

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
    <div className="lg:pt-20 pt-14">
      <div className="lg:w-1/2 w-[87%] mx-auto my-28">
        <span>{postDetails?.categoria}</span>

        <h1 className="text-3xl font-bold text-[#024F3C]">
          {postDetails?.titulo}
        </h1>

        <span className="text-[10px] font-semibold uppercase">
          {formatearFecha(postDetails?.publishedAt)}
        </span>

        <img
          src={`${import.meta.env.VITE_IMG_URL}${
            postDetails?.foto?.data.attributes.url
          }`}
          className="md:mb-16 md:mt-9 my-10"
        />

        <Markdown className="mb-16 postMD">
          {postDetails?.descripcionCompleta}
        </Markdown>

        <button
          className="flex text-[#2EB593] font-semibold gap-3 items-center"
          onClick={() => navigate(-1)}
        >
          <img
            src="/images/group-10.svg"
            className="rotate-180"
            width={25}
            alt=""
          />
          <p>Regresar</p>
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
