const Collaborator = ({ colab }) => {
  const { foto, nombre, cargo } = colab.attributes;
  const urlIMG = import.meta.env.VITE_IMG_URL + foto.data?.attributes.url;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <img src={urlIMG} className="rounded-full h-36 w-36 object-cover" />
      <span className="font-semibold text-center">{nombre}</span>
      <span>{cargo}</span>
    </div>
  );
};

export default Collaborator;
