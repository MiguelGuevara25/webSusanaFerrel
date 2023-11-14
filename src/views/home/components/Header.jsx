import Button from "../../../components/Button";
import useInicio from "../../../hooks/useInicio";

const Header = () => {
  const { datosInicio } = useInicio();

  return (
    <header className="flex lg:flex-row-reverse flex-col lg:w-[87%] mx-auto overflow-hidden">
      <div className="lg:w-1/2 relative h-[350px] lg:h-[950px]">
        <img
          src="/images/photo1.png"
          className="rounded-full absolute -left-24 -top-12 -z-20 lg:hidden"
          width={320}
          alt=""
        />
        <div className="bg__img__header w-80 h-80 -z-10 -left-24 -top-12 lg:hidden"></div>

        <img
          src="/images/photo1.png"
          className="rounded-full absolute right-0 -top-12 -z-10 hidden lg:block"
          alt=""
        />
        <div className="bg__img__header w-[586.086px] h-[586.086px] -z-10 right-0 -top-12 hidden lg:block"></div>

        <img
          src="/images/photo2.png"
          className="rounded-full absolute right-0 bottom-0 -z-10 hidden lg:block"
          alt=""
        />
        <div className="bg__img__header2 w-[367px] h-[367px] right-0 bottom-0 hidden lg:block"></div>

        <img
          src="/images/photo2.png"
          className="rounded-full absolute -right-20 -bottom-10 -z-10 lg:hidden"
          width={200}
          alt=""
        />
        <div className="bg__img__header2 w-[200px] h-[200px] -right-20 -bottom-10 lg:hidden"></div>
      </div>

      {datosInicio?.map((datos) => {
        const { tituloPrincipal, subtitlePrincipal } = datos.attributes;

        return (
          <div
            key={datos.id}
            className="lg:w-1/2 flex flex-col justify-center lg:gap-12 gap-9 w-[87%] mx-auto"
          >
            <h1 className="text-[#024F3C] font-bold lg:text-[64px] text-4xl lg:text-start text-center lg:leading-[72px]">
              {tituloPrincipal}
            </h1>

            <p className="lg:text-3xl lg:text-start text-center lg:mb-16 mb-5">
              {subtitlePrincipal}
            </p>
            <div className="mb-5 self-center lg:self-start ml-1">
              <Button>Conversemos</Button>
            </div>

            <img className="self-start" src="/images/arrowDown.svg" />
          </div>
        );
      })}
    </header>
  );
};

export default Header;
