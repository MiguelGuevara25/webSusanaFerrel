import CollaboratorsDetails from "../components/CollaboratorsDetails";
import Founder from "../../../components/Founder";
import Courses from "../components/Courses";

const AboutUs = () => {
  return (
    <>
      <div className="photo"></div>
      <div className="mt-5 mb-[105px]">
        <Founder />
      </div>

      <div className="mb-24">
        <Courses />
      </div>

      <CollaboratorsDetails />
    </>
  );
};

export default AboutUs;
