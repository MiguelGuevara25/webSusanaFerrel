import Subtitles from "../../../components/Subtitles";

const Courses = () => {
  return (
    <section className="px-6 mb-20">
      <Subtitles>
        Recibimos y damos para completar un círculo de cremiento
      </Subtitles>

      <div className="flex flex-col gap-4 mt-8">
        <img src="/images/rectangle-18.png" alt="" />
        <h3 className="text-2xl">Laboratoria</h3>
        <p>
          Preparación y acompañamiento a estudiantes en la fase final de
          formación para participar en procesos de selección.
        </p>
      </div>
    </section>
  );
};

export default Courses;
