import CollaboratorsDetails from "../components/CollaboratorsDetails";
import Founder from "../../../components/Founder";
import Courses from "../components/Courses";

const AboutUs = () => {
  return (
    <>
      <div className="photo"></div>
      <Founder />
      <Courses />
      <CollaboratorsDetails />
    </>
  );
};

export default AboutUs;
