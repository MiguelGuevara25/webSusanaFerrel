import Button from "../../../components/Button";
import Founder from "../../../components/Founder";
import Partners from "../../../components/Partners";
import Collaborators from "../components/Collaborators";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Founder />
      <Collaborators />
      <Partners />

      <div className="px-6 text-[#024F3C] mt-36 mb-10 flex flex-col items-center gap-10">
        <h2 className="text-center text-4xl font-bold">
          Conviértete en la mejor versión de ti
        </h2>

        <p className="text-center font-light text-[#181818]">
          Con nosotros libera y potencia al máximo tus habilidades para lograr
          tu mejor versión.
        </p>

        <Button>Empieza tu consultoría</Button>
      </div>
    </>
  );
};

export default Home;
