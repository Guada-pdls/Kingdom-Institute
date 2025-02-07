// eslint-disable-next-line react/prop-types
const CourseSection = ({ title, description, details }) => {
  return (
    <div className="pb-4">
      <h4 data-aos="fade-right" className="mb-4">{title}</h4>
      <p className="py-0 mb-0"><span className="sangria">{description}</span></p>
      <p className="py-0 mb-0"><span className="sangria">{details}</span></p>
    </div>
  );
};

export default CourseSection;
