const Contact = () => {
  const handleFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <div className="lg:pt-32 pt-14">
      <div className="w-[87%] lg:w-8/12 mx-auto">
        <img src="/images/capa-1.svg" className="my-14" />

        <h2 className="text-[#024F3C] font-bold text-2xl">
          ¿Cómo te podemos ayudar?
        </h2>

        <form className="flex flex-col lg:flex-row lg:gap-8 gap-5 mt-8 lg:mb-36 mb-[122px]">
          <div className="[&>input]:border [&>input]:border-[#128266] [&>input]:rounded-lg [&>input]:py-4 [&>input]:px-5 [&>input]:placeholder:text-black flex flex-col gap-5 flex-1">
            <input type="text" placeholder="Nombre y apellido" required />
            <input type="text" placeholder="Empresa" required />
            <input type="text" placeholder="Teléfono" required />
            <input type="text" placeholder="Correo electrónico" required />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <textarea
              className="border border-[#128266] py-4 px-5 rounded-lg placeholder:text-black mb-11 h-32"
              placeholder="Cuéntanos cómo te ayudamos..."
            ></textarea>

            <button
              className="bg-gradient-to-r from-[#2EB593] to-[#81FDDE] rounded-[32px] px-6 py-4 font-semibold shadow-md w-max animationButton"
              onClick={handleFormulario}
            >
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
