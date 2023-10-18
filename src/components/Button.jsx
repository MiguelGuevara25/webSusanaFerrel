const Button = ({ children, self, mb = 0 }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#2EB593] to-[#81FDDE] rounded-[32px] px-6 py-4 font-semibold shadow-md w-max animationButton mb-${mb} ${
        self ? `self-${self}` : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
