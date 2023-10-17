import Button from "../../../components/Button";

const Contact = () => {
  return (
    <div className="px-4">
      <img src="/images/group-33.svg" />
      <h2 className="text-[#024F3C] font-semibold text-2xl my-7">
        Cuéntanos cómo podemos potenciar tu mejor tu
      </h2>

      <form className="[&>input]:border [&>input]:border-[#128266] [&>input]:rounded-lg [&>input]:py-4 [&>input]:px-5 flex flex-col gap-5 [&>input]:placeholder:text-black">
        <input type="text" placeholder="Nombre y apellido" />
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="Teléfono" />
        <input type="text" placeholder="Correo electrónico" />

        <textarea
          className="border border-[#128266] py-4 px-5 rounded-lg placeholder:text-black h-32 mb-10"
          placeholder="Cuéntanos cómo te ayudamos..."
        ></textarea>

        <Button mb="10">Enviar</Button>
      </form>
    </div>
  );
};

export default Contact;
