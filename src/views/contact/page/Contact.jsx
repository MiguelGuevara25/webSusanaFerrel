import { useState } from "react";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [user, setUser] = useState({
    nombreCompleto: "",
    empresa: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleFormulario = async (e) => {
    e.preventDefault();
    if (
      user.nombreCompleto === "" &&
      user.empresa === "" &&
      user.telefono === "" &&
      user.correo === "" &&
      user.mensaje === ""
    ) {
      toast.error("Completa todos los campos por favor");
      return;
    } else if (user.nombreCompleto === "") {
      toast.error("Completa tu nombre por favor");
      return;
    } else if (user.empresa === "") {
      toast.error("Completa tu empresa por favor");
      return;
    } else if (user.telefono === "") {
      toast.error("Completa tu teléfono por favor");
      return;
    } else if (user.correo === "") {
      toast.error("Completa tu correo por favor");
      return;
    } else if (user.mensaje === "") {
      toast.error("Completa tu mensaje por favor");
      return;
    }

    await fetch("https://admin.susanaferrel.com/api/mensajes/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Datos enviados correctamente");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al enviar los datos");
      });
  };

  return (
    <div className="lg:pt-32 pt-14">
      <Toaster position="top-center" richColors />
      <div className="w-[87%] lg:w-8/12 mx-auto">
        <img src="/images/capa-1.svg" className="my-14" />

        <h2 className="text-[#024F3C] font-bold text-2xl">
          ¿Cómo te podemos ayudar?
        </h2>

        <form className="flex flex-col lg:flex-row lg:gap-8 gap-5 mt-8 lg:mb-36 mb-[122px]">
          <div className="[&>input]:border [&>input]:border-[#128266] [&>input]:rounded-lg [&>input]:py-4 [&>input]:px-5 [&>input]:placeholder:text-black flex flex-col gap-5 flex-1">
            <input
              type="text"
              placeholder="Nombre y apellido"
              name="nombreCompleto"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Empresa"
              name="empresa"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Teléfono"
              name="telefono"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="correo"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <textarea
              className="border border-[#128266] py-4 px-5 rounded-lg placeholder:text-black mb-11 h-32"
              placeholder="Cuéntanos cómo te ayudamos..."
              onChange={handleChange}
              name="mensaje"
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
