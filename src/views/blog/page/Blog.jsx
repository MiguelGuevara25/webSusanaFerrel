import Button from "../../../components/Button";
import Subtitles from "../../../components/Subtitles";

const Blog = () => {
  return (
    <>
      {/* Blog Principal */}
      <div className="flex flex-col gap-4 px-6 my-10">
        <img src="/images/rectangle-18.png" className="relative" alt="" />

        <p className="absolute text-white bg-[#2EB593] rounded-lg p-1.5 text-xs mt-3 ml-3">
          ¡NUEVO!
        </p>
        <div>
          <span className="text-[13px]">CATEGORIA DE ARTÍCULO</span>
          <Subtitles>Nombre de artículo máx 2 líneas</Subtitles>
          <span className="font-semibold text-[10px]">12 SEPTIEMBRE, 2023</span>
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

      <h2 className="px-6 text-2xl">Más Recientes</h2>

      {/* Más Recientes */}
      <div className="flex flex-col gap-20 my-10">
        {/* Post 1 */}
        <div className="flex flex-col gap-4 px-6">
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
        <div className="flex flex-col gap-4 px-6">
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
        <div className="flex flex-col gap-4 px-6">
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
    </>
  );
};

export default Blog;
