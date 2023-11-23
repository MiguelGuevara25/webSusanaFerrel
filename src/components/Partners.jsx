import usePartners from "../hooks/usePartners";

const Partners = () => {
  const { infoPartners } = usePartners();

  return (
    <>
      {infoPartners.map((datos) => {
        const { numero_partners, titulo_partners, logo_partners } =
          datos.attributes;

        const partner1 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[0].attributes.url;
        const partner2 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[1].attributes.url;
        const partner3 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[2].attributes.url;
        const partner4 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[3].attributes.url;
        const partner5 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[4].attributes.url;
        const partner6 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[5].attributes.url;
        const partner7 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[6].attributes.url;
        const partner8 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[7].attributes.url;
        const partner9 =
          import.meta.env.VITE_IMG_URL + logo_partners.data[8].attributes.url;

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
              <div className="grid lg:grid-cols-10 grid-cols-3 w-[87%] mx-auto place-items-center lg:gap-0 gap-6">
                <img src={partner1} className="lg:col-span-2" />
                <img src={partner2} className="lg:col-span-2" />
                <img src={partner3} className="lg:col-span-2" />
                <img src={partner4} className="lg:col-span-2" />
                <img src={partner5} className="lg:col-span-2" />
                <img src={partner6} className="lg:col-start-2 lg:col-end-4" />
                <img src={partner7} className="lg:col-start-4 lg:col-end-6" />
                <img src={partner8} className="lg:col-start-6 lg:col-end-8" />
                <img src={partner9} className="lg:col-start-8 lg:col-end-10" />
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
