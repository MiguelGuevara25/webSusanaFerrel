import usePartners from "../hooks/usePartners";

const Partners = () => {
  const { infoPartners } = usePartners();

  return (
    <>
      {infoPartners.map((datos) => {
        const { numero_partners, titulo_partners, logo_partners } =
          datos.attributes;

        const imgUrl = import.meta.env.VITE_IMG_URL;

        return (
          <section key={datos.id} className="text-[#024F3C]">
            <div className="w-[87%] mx-auto mb-10 flex md:flex-row flex-col md:items-center md:gap-7 gap-2">
              <h2 className="text-[64px] italic font-bold">
                {numero_partners}
              </h2>
              <p className="font-semibold text-2xl w-[230px]">
                {titulo_partners}
              </p>
            </div>

            <div className="relative">
              <div className="max-w-screen-xl mx-auto flex flex-row flex-wrap justify-center gap-x-10 items-center">
                {logo_partners.data.map((partner, index) => {
                  return (
                    <div
                      className="basis-auto w-[90px] md:w-48 justify-center flex"
                      key={index}
                    >
                      <img
                        src={`${imgUrl}${partner.attributes.url}`}
                        alt={`Partner ${index + 1}`}
                      />
                    </div>
                  );
                })}
              </div>

              <img
                src="images/Bg_logos_Desktop.svg"
                className="md:block hidden absolute -bottom-16 w-full -z-20"
              />

              <img
                src="images/Bg_logos_Mobile.svg"
                className="md:hidden block absolute -bottom-14 w-full -z-20"
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Partners;
