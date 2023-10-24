const Partners = () => {
  return (
    <section className="text-[#024F3C]">
      <div className="w-[87%] mx-auto mb-10 flex md:flex-row flex-col md:items-center md:gap-7 gap-2">
        <h2 className="text-[64px] italic font-bold">+40</h2>
        <p className="font-semibold text-2xl">
          empresas que <br />
          confían en nosotros
        </p>
      </div>

      <div className="relative">
        <div className="grid lg:grid-cols-10 grid-cols-3 w-[87%] mx-auto place-items-center lg:gap-0 gap-6">
          <img src="/images/entel.svg" className="lg:col-span-2" />
          <img src="/images/alicorp.svg" className="lg:col-span-2" />
          <img src="/images/calidda.svg" className="lg:col-span-2" />
          <img src="/images/ingram.svg" className="lg:col-span-2" />
          <img src="/images/kavak.svg" className="lg:col-span-2" />
          <img src="/images/kpmg.svg" className="lg:col-start-2 lg:col-end-4" />
          <img
            src="/images/laureate.svg"
            className="lg:col-start-4 lg:col-end-6"
          />
          <img
            src="/images/backus.svg"
            className="lg:col-start-6 lg:col-end-8"
          />
          <img
            src="/images/roche.svg"
            className="lg:col-start-8 lg:col-end-10"
          />
        </div>

        <img
          src="images/Bg_logos_Desktop.svg"
          className="md:block hidden absolute -bottom-16 -z-20"
        />

        <img
          src="images/Bg_logos_Mobile.svg"
          className="md:hidden block absolute -bottom-14 -z-20"
        />
      </div>
    </section>
  );
};

export default Partners;
