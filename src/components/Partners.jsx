const Partners = () => {
  return (
    <section className="text-[#024F3C]">
      <div className="w-[87%] mx-auto mb-10">
        <h2 className="text-[64px] italic font-bold">+40</h2>
        <p className="font-semibold text-2xl">
          empresas que <br />
          confían en nosotros
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 px-6 gap-6 place-items-center">
        <img src="/images/entel.svg" />
        <img src="/images/alicorp.svg" />
        <img src="/images/calidda.svg" />
        <img src="/images/ingram.svg" />
        <img src="/images/kavak.svg" />
        <img src="/images/kpmg.svg" />
        <img src="/images/laureate.svg" />
        <img src="/images/backus.svg" />
        <img src="/images/roche.svg" />
        {/* <img
          src="/images/prueba.svg"
          className="absolute -bottom-16 -z-10 w-full"
        /> */}
      </div>
    </section>
  );
};

export default Partners;
