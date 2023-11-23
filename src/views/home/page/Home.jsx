import Button from "../../../components/Button";
import Founder from "../../../components/Founder";
import Partners from "../../../components/Partners";
import useInicio from "../../../hooks/useInicio";
import Collaborators from "../components/Collaborators";
import Header from "../components/Header";

const Home = () => {
  const { datosInicio } = useInicio();

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

      {datosInicio.map((datos) => {
        const { tituloArticulo, descripcionArticulo } = datos.attributes;

        return (
          <div
            key={datos.id}
            className="flex flex-col w-[87%] mx-auto items-center text-center lg:mb-40 mb-24"
          >
            <div className="mb-9">
              <h2 className="text-[#024F3C] font-bold lg:text-[42px] text-[36px] lg:leading-[47px] leading-10 w-96">
                {tituloArticulo}
              </h2>
            </div>

            <p className="md:mb-16 mb-14 w-96">{descripcionArticulo}</p>
            <Button>Empieza tu consultoría</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
