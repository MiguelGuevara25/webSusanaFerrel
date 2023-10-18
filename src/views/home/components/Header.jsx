import Button from "../../../components/Button";

const Header = () => {
  return (
    <header className="flex lg:flex-row-reverse flex-col w-[89%] mx-auto items-stretch">
      <div className="lg:w-[57%] border-2 border-red-500 relative">
        <img
          src="/images/photo1.png"
          // className="rounded-full absolute md:left-28 right-28 -top-12"
          className="rounded-full absolute right-0 -top-12 -z-10"
          alt=""
        />

        <img
          src="/images/photo2.png"
          className="rounded-full absolute -bottom-12 right-0"
          // className="rounded-full absolute md:left-[330px] md:bottom-0 bottom-40"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center lg:w-[43%] border-2 border-red-500">
        <h1 className="lg:text-6xl text-4xl text-center lg:text-start font-bold text-[#024F3C] lg:mb-12 mb-9">
          Descubre tu fortaleza interna y toma las riendas de la vida que
          anhelas
        </h1>

        <p className="lg:text-[28px] text-center lg:text-start lg:mb-28 mb-14">
          Te ayudamos a crear un ambiente ideal para el crecimiento personal y
          colectivo.
        </p>

        <div className="self-center md:self-start lg:mb-16 mb-9">
          <Button>Conversemos</Button>
        </div>
        <img className="self-start" src="/images/arrowDown.svg" />
      </div>
    </header>
  );
};

export default Header;
