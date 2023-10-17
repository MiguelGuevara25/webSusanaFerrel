import Button from "../../../components/Button";

const Header = () => {
  return (
    <header>
      <div className="relative h-80">
        <img
          src="/images/photo1.png"
          className="rounded-full w-80 h-80 absolute -top-5 -left-20 -z-10"
          alt=""
        />

        <img
          src="/images/photo2.png"
          className="rounded-full w-48 h-48 absolute -right-10 -bottom-8 -z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-9 px-6">
        <h1 className="text-center text-4xl font-bold text-[#024F3C]">
          Descubre tu fortaleza interna y toma las riendas de la vida que
          anhelas
        </h1>

        <p className="text-center">
          Te ayudamos a crear un ambiente ideal para el crecimiento personal y
          colectivo.
        </p>

        <Button>Conversemos</Button>
        <img className="self-start" src="/images/arrowDown.svg" />
      </div>
    </header>
  );
};

export default Header;
