import Subtitles from "../../../components/Subtitles";

const Course = ({ curso }) => {
  const { imagen, descripcion, titulo } = curso.attributes;
  const urlIMG = import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

  return (
    <div className="w-[342px] h-[482px]">
      <div className="mb-8 h-[248px]">
        <img
          src={urlIMG}
          alt={`Imagen del curso ${titulo}`}
          className="h-full w-full rounded-xl"
        />
      </div>

      <div className="mb-4">
        <Subtitles>{titulo}</Subtitles>
      </div>

      <p className="mb-8 descriptionEmergencies">{descripcion}</p>

      <button className="flex text-[#2EB593] font-semibold items-center gap-3 ">
        <p>Conocer más</p>
        <img src="/images/group-10.svg" width={25} alt="" />
      </button>
    </div>
  );
};

export default Course;
