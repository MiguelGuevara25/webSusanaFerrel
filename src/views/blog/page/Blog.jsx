import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import Post from "../components/Post";
import Subtitles from "../../../components/Subtitles";

const Blog = () => {
  const {
    visibleElements,
    urlIMG,
    handleClick,
    formatearFecha,
    postAnt,
    post,
    showMore,
  } = usePost();

  return (
    <div className="lg:pt-20 pt-14">
      <div className="w-[87%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-14 gap-4 lg:w-9/12 lg:my-28 my-12">
          {postAnt ? (
            <img
              src={urlIMG}
              className="relative object-cover rounded-xl w-full h-[248px]"
              alt="Nuevo Blog"
            />
          ) : (
            <Subtitles>Cargando...</Subtitles>
          )}

          {postAnt && (
            <p className="absolute text-white bg-[#2EB593] rounded-lg p-1.5 text-xs mt-3 ml-3">
              ¡NUEVO!
            </p>
          )}

          <div className="">
            <div>
              <span className="text-[13px] uppercase">
                {postAnt?.attributes.categoria}
              </span>

              <h2 className="text-[#024F3C] font-bold text-3xl">
                {postAnt?.attributes.titulo}
              </h2>

              {postAnt ? (
                <span className="font-semibold text-[10px] uppercase">
                  {formatearFecha(postAnt?.attributes.publishedAt)}
                </span>
              ) : (
                <span className="font-semibold text-[10px] uppercase">
                  Cargando...
                </span>
              )}
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

        {post?.length === 0 ? (
          <div className="mb-10">
            <Subtitles>Cargando Blog...</Subtitles>
          </div>
        ) : (
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col gap-20 place-items-center mb-[120px]">
            {post?.slice(0, visibleElements).map((postBlog) => (
              <Post key={postBlog.id} postBlog={postBlog} />
            ))}
          </div>
        )}

        <div className="flex justify-center mb-40" onClick={handleClick}>
          <Button>{showMore ? "Mostrar menos" : "Cargar más articulos"}</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
