const Subtitles = ({ children, self }) => {
  return (
    <h2 className={`text-[#024F3C] font-bold text-3xl self-${self}`}>
      {children}
    </h2>
  );
};

export default Subtitles;
