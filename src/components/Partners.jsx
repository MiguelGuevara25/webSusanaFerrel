const Partners = () => {
  return (
    <section className="text-[#024F3C] my-10">
      <div className="px-6 mb-10">
        <h2 className="text-[64px] italic font-bold">+40</h2>
        <p className="font-semibold text-2xl">
          empresas que <br />
          confían en nosotros
        </p>
      </div>

      <div className="grid grid-cols-3 px-6 gap-6 relative -z-30">
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img src="/images/logos-empresas.svg" />
        <img
          src="/images/prueba.svg"
          className="absolute -bottom-14 -z-50 w-full"
        />
      </div>
    </section>
  );
};

export default Partners;
