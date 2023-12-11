import { Link } from "react-router-dom";

const EmpowerForms = ({ children, srcImg }) => {
  return (
    <div className="flex md:flex-col gap-4 md:gap-12 items-center justify-between">
      <img src={srcImg} className="md:w-80" />
      <div className="flex gap-6">
        <span className="text-2xl">{children}</span>
        <Link to="/servicios">
          <img
            src="/images/arrowRight.svg"
            className="animationButton2 hover:cursor-pointer"
            alt={`Imagen de ${srcImg}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default EmpowerForms;
