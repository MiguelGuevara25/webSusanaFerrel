const CollaboratorDetail = ({ colaborador }) => {
  const { nombre, funcion, cargo, imagen } = colaborador.attributes;
  const urlIMG = import.meta.env.VITE_IMG_URL + imagen.data?.attributes.url;

  return (
    <div className="flex flex-col gap-4">
      <img src={urlIMG} alt="" />

      <div className="font-semibold">
        <h3 className="text-2xl">{nombre}</h3>
        <span>{cargo}</span>
      </div>

      <p>{funcion}</p>
    </div>
  );
};

export default CollaboratorDetail;
