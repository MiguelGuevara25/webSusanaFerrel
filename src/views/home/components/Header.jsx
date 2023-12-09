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
              <div
                className="lg:w-[586.086px] lg:h-[586.086px] w-80 h-80 rounded-full absolute lg:right-0 lg:left-8 -left-24 -top-12 -z-10"
                style={{
                  backgroundImage: `linear-gradient(155deg, #ff8487 5%, rgba(255,255,255,0) 75.32%), url(${urlIMG})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div
                className="lg:w-[367px] lg:h-[367px] w-[200px] h-[200px] rounded-full absolute lg:right-0 lg:bottom-0 -right-20 -bottom-10 -z-10"
                style={{
                  backgroundImage: `linear-gradient(323deg, #FF5053 7.42%, rgba(255, 255, 255, 0.00) 52.36%), url(${urlIMG2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
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
