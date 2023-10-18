import Subtitles from "../../../components/Subtitles";

const ServicesCoach = () => {
  return (
    <section className="w-[87%] mx-auto flex flex-col md:flex-row md:gap-16 gap-20 [&>div]:flex-1">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col">
          <img
            src="/images/group-24.svg"
            width={245}
            className="mb-12 self-center"
            alt=""
          />

          <Subtitles self="start">Coaching</Subtitles>

          <p className="mt-4">
            Te acompañamos para que liberes tu potencial personal y profesional,
            te ayudaremos a identificar limitantes que son obstáculos para
            lograr tus metas, y tomarás consciencia para decidir y generar
            cambios, impactando positivamente en diferentes ámbitos de tu vida.
          </p>
        </div>

        <button className="flex text-[#2EB593] font-semibold items-center gap-3 ">
          <p>Empecemos hoy</p>
          <img src="/images/group-10.svg" width={25} alt="" />
        </button>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col">
          <img
            src="/images/group-24.svg"
            width={245}
            className="mb-12 self-center"
            alt=""
          />

          <Subtitles self="start">Mentoring</Subtitles>

          <p className="mt-4">
            Como MENTORES dejaremos nuestro legado compartiendo nuestras
            experiencias y aprendizajes que el MENTEE podrá capitalizar con la
            finalidad de prepararse para sus siguientes posiciones de liderazgo.
          </p>
        </div>

        <button className="flex text-[#2EB593] font-semibold items-center gap-3">
          <p>Empecemos hoy</p>
          <img src="/images/group-10.svg" width={25} alt="" />
        </button>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col">
          <img
            src="/images/group-24.svg"
            width={245}
            className="mb-12 self-center"
            alt=""
          />

          <Subtitles self="start">Liderazgo</Subtitles>

          <p className="mt-4">
            A través de una mirada apreciativa, construyendo hacia afuera,
            activando la comunicación, empatía, confianza, escucha y promoviendo
            espacios seguros para desarrollar a su equipo y fortaleciendo su
            marca personal como referente en la organización.
          </p>
        </div>

        <button className="flex text-[#2EB593] font-semibold items-center gap-3">
          <p>Empecemos hoy</p>
          <img src="/images/group-10.svg" width={25} alt="" />
        </button>
      </div>
    </section>
  );
};

export default ServicesCoach;
