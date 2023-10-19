import Button from "../../../components/Button";

const Contact = () => {
  return (
    <div className="w-[87%] lg:w-8/12 mx-auto">
      <img src="/images/group-33.svg" className="my-14" />

      <h2 className="text-[#024F3C] font-semibold text-2xl">
        ¿Cómo te podemos ayudar?
      </h2>

      <form className="flex flex-col lg:flex-row lg:gap-8 gap-5 mt-8 lg:mb-36 mb-[122px]">
        <div className="[&>input]:border [&>input]:border-[#128266] [&>input]:rounded-lg [&>input]:py-4 [&>input]:px-5 [&>input]:placeholder:text-black flex flex-col gap-5 flex-1">
          <input type="text" placeholder="Nombre y apellido" />
          <input type="text" placeholder="Empresa" />
          <input type="text" placeholder="Teléfono" />
          <input type="text" placeholder="Correo electrónico" />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <textarea
            className="border border-[#128266] py-4 px-5 rounded-lg placeholder:text-black mb-11 h-32"
            placeholder="Cuéntanos cómo te ayudamos..."
          ></textarea>

          <Button>Enviar Formulario</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
