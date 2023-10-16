import Button from "../../../components/Button";

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center px-6 gap-8 my-10 animate__animated animate__fadeInUp">
        <h1 className="text-center text-4xl font-bold text-[#024F3C]">
          Descubre tu fortaleza interna y toma las riendas de la vida que
          anhelas
        </h1>

        <p className="text-center">
          Te ayudamos a crear un ambiente ideal para el crecimiento personal y
          colectivo.
        </p>

        <Button>Conversemos</Button>
      </header>
    </>
  );
};

export default Header;
