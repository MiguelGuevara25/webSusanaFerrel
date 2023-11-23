import Button from "../../../components/Button";
import Founder from "../../../components/Founder";
import Partners from "../../../components/Partners";
import Collaborators from "../components/Collaborators";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="lg:pt-20 pt-14">
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
          <h2 className="text-[#024F3C] font-bold lg:text-[42px] text-[36px] lg:leading-[47px] leading-10">
            Conviértete en la
            <br />
            {/* mejor versión de ti */}
            Probando git en frontend
          </h2>
        </div>

        <p className="md:mb-16 mb-14">
          Con nosotros libera y potencia al máximo tus
          <br />
          habilidades para lograr tu mejor versión.
        </p>

        <Button>Empieza tu consultoría</Button>
      </div>
    </div>
  );
};

export default Home;
