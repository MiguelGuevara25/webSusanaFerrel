import Button from "../../../components/Button";
import Founder from "../../../components/Founder";
import Partners from "../../../components/Partners";
import Subtitles from "../../../components/Subtitles";
import Collaborators from "../components/Collaborators";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="mb-5">
        <Header />
      </div>

      <div className="mb-28 lg:mb-24">
        <Founder />
      </div>

      <Collaborators />

      <div className="mb-40">
        <Partners />
      </div>

      <div className="flex flex-col w-[87%] mx-auto items-center text-center lg:mb-40 mb-24">
        <div className="mb-9">
          <Subtitles>
            Conviértete en la
            <br />
            mejor versión de ti
          </Subtitles>
        </div>

        <p className="md:mb-16 mb-14">
          Con nosotros libera y potencia al máximo tus
          <br />
          habilidades para lograr tu mejor versión.
        </p>

        <Button>Empieza tu consultoría</Button>
      </div>
    </>
  );
};

export default Home;
