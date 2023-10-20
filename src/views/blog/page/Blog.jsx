import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Subtitles from "../../../components/Subtitles";

const Blog = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const url = `${import.meta.env.VITE_API_URL}posts?populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setPost(data.data);
  };

  useEffect(() => {
    getPost();
  }, []);

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
      {/* Blog Principal */}
      {/* <div className="flex flex-col md:flex-row gap-4 border border-red-500 md:w-3/4 md:my-28 my-12">
        <img src="/images/rectangle-18.png" className="relative" alt="" />

        <p className="absolute text-white bg-[#2EB593] rounded-lg p-1.5 text-xs mt-3 ml-3">
          ¡NUEVO!
        </p>

        <div>
          <div>
            <span className="text-[13px]">CATEGORIA DE ARTÍCULO</span>

            <h2 className="text-[#024F3C] font-bold text-3xl">
              Nombre de artículo máx 2 líneas
            </h2>

            <span className="font-semibold text-[10px]">
              12 SEPTIEMBRE, 2023
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
            elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
            malesuada sed ut elementum lacus.
          </p>

          <button className="flex text-[#2EB593] font-semibold gap-3 items-center">
            <p>Seguir Leyendo</p>
            <img src="/images/group-10.svg" width={25} alt="" />
          </button>
        </div>
      </div> */}

      {post.map((postBlog) => {
        const { imagen, titulo, descripcion, categoria, publishedAt } =
          postBlog.attributes;
        const urlIMG =
          import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

        return (
          <div
            key={postBlog.id}
            className="flex flex-col md:flex-row md:gap-14 gap-4 md:w-8/12 md:my-28 my-12"
          >
            <img
              src={urlIMG}
              className="relative rounded-xl w-[341px] h-[248px]"
              alt=""
            />

            <p className="absolute text-white bg-[#2EB593] rounded-lg p-1.5 text-xs mt-3 ml-3">
              ¡NUEVO!
            </p>

            <div>
              <div>
                <span className="text-[13px] uppercase">{categoria}</span>

                <h2 className="text-[#024F3C] font-bold text-3xl">{titulo}</h2>

                <span className="font-semibold text-[10px] uppercase">
                  {formatearFecha(publishedAt)}
                </span>
              </div>

              <p className="descriptionEmergencies2">{descripcion}</p>

              <button className="flex text-[#2EB593] font-semibold gap-3 items-center">
                <p>Seguir Leyendo</p>
                <img src="/images/group-10.svg" width={25} alt="" />
              </button>
            </div>
          </div>
        );
      })}

      <h2 className="text-2xl">Más Recientes</h2>

      {/* Más Recientes */}
      <div className="flex flex-col gap-20 my-10">
        {/* Post 1 */}
        <div className="flex flex-col gap-4">
          <img src="/images/rectangle-18.png" alt="" />

          <div>
            <span className="text-[13px]">CATEGORIA DE ARTÍCULO</span>
            <Subtitles>Nombre de artículo máx 2 líneas</Subtitles>
            <span className="font-semibold text-[10px]">
              12 SEPTIEMBRE, 2023
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
            elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
            malesuada sed ut elementum lacus.
          </p>

          <div className="border-b w-1/2 mt-2 border-[#128266]"></div>
        </div>

        {/* Post 2 */}
        <div className="flex flex-col gap-4">
          <img src="/images/rectangle-18.png" alt="" />

          <div>
            <span className="text-[13px]">CATEGORIA DE ARTÍCULO</span>
            <Subtitles>Nombre de artículo máx 2 líneas</Subtitles>
            <span className="font-semibold text-[10px]">
              12 SEPTIEMBRE, 2023
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
            elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
            malesuada sed ut elementum lacus.
          </p>

          <div className="border-b w-1/2 mt-2 border-[#128266]"></div>
        </div>

        {/* Post 3 */}
        <div className="flex flex-col gap-4">
          <img src="/images/rectangle-18.png" alt="" />

          <div>
            <span className="text-[13px]">CATEGORIA DE ARTÍCULO</span>
            <Subtitles>Nombre de artículo máx 2 líneas</Subtitles>
            <span className="font-semibold text-[10px]">
              12 SEPTIEMBRE, 2023
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Habitasse mauris diam hac
            elementum. Arcu dignissim duis auctor faucibus eleifend arcu. Amet
            malesuada sed ut elementum lacus.
          </p>

          <div className="border-b w-1/2 mt-2 border-[#128266]"></div>
        </div>

        <Button self="center" mb="10">
          Cargar más articulos
        </Button>
      </div>
    </div>
  );
};

export default Blog;
