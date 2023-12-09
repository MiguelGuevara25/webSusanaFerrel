import Button from "../../../components/Button";
import useInicio from "../../../hooks/useInicio";

const Header = () => {
  const { datosInicio } = useInicio();

  return (
    <>
      {datosInicio?.map((datos) => {
        const {
          tituloPrincipal,
          subtituloPrincipal,
          imagenPrincipal1,
          imagenPrincipal2,
        } = datos.attributes;

        const urlIMG =
          import.meta.env.VITE_IMG_URL +
          imagenPrincipal1?.data?.attributes?.url;

        const urlIMG2 =
          import.meta.env.VITE_IMG_URL +
          imagenPrincipal2?.data?.attributes?.url;

        return (
          <header
            key={datos.id}
            className="flex lg:flex-row-reverse flex-col lg:w-[87%] mx-auto overflow-hidden"
          >
            <div className="lg:w-1/2 relative h-[350px] lg:h-[950px]">
              <img
                src={urlIMG}
                className="rounded-full absolute w-80 h-80 -left-24 -top-12 -z-20 lg:hidden"
                width={320}
              />

              <div className="bg__img__header w-80 h-80 -z-10 -left-24 -top-12 lg:hidden"></div>

              <img
                src={urlIMG}
                className="rounded-full w-[586.086px] h-[586.086px] absolute right-0 -top-12 -z-10 hidden lg:block"
                alt=""
              />

              <div className="bg__img__header w-[586.086px] h-[586.086px] -z-10 right-0 -top-12 hidden lg:block"></div>

              <img
                src={urlIMG2}
                className="rounded-full w-[367px] h-[367px] absolute right-0 bottom-0 -z-10 hidden lg:block"
                alt=""
              />

              <div className="bg__img__header2 w-[367px] h-[367px] right-0 bottom-0 hidden lg:block"></div>

              <img
                src={urlIMG2}
                className="rounded-full w-[200px] h-[200px] absolute -right-20 -bottom-10 -z-10 lg:hidden"
                width={200}
                alt=""
              />

              <div className="bg__img__header2 w-[200px] h-[200px] -right-20 -bottom-10 lg:hidden"></div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center lg:gap-12 gap-9 w-[87%] mx-auto">
              <h1 className="text-[#024F3C] font-bold lg:text-[64px] text-4xl lg:text-start text-center lg:leading-[72px]">
                {tituloPrincipal}
              </h1>

              <p className="lg:text-3xl lg:text-start text-center lg:mb-16 mb-5">
                {subtituloPrincipal}
              </p>
              <div className="mb-5 self-center lg:self-start ml-1">
                <Button>Conversemos</Button>
              </div>

              <img className="self-start" src="/images/arrowDown.svg" />
            </div>
          </header>
        );
      })}
    </>
  );
};

export default Header;
