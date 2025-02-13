import "./ExamDetail.css";

/* eslint-disable react/prop-types */
const ExamDetail = ({
  title,
  description,
  examDetails,
  certificateDetails,
  reasons,
}) => (
  <div>
    <h4 data-aos="fade-right" className="mb-4 mt-5 bold">
      {title}
    </h4>
    {description &&
      description.map((text, index) => (
        <p key={index} className="py-2 mb-0">
          {text}
        </p>
      ))}
    {examDetails && (
      <ul className="py-2 examDetails">
        {examDetails.map((detail, index) => (
          <li key={index}>
            <header>
              <img
                src={
                  "./icons/" +
                  (index === 0
                    ? "exam.svg"
                    : index === 1
                    ? "file-pen.svg"
                    : "clock.svg")
                }
                alt="Detalle"
              />
              {detail[0]}
            </header>
            <p>
              {detail[1]}
            </p>
          </li>
        ))}
      </ul>
    )}
    {certificateDetails && (
      <>
        <h5 className="mb-0">
          El certificado {title} demuestra que puedes:
        </h5>
        <ul className="py-2 ms-2 certificateDetails">
          {certificateDetails.map((detail, index) => (
            <li key={index}>
              <img
                className="examIcon"
                src="./icons/check.svg" 
                alt="Icono de listo"
              />
              {detail}
            </li>
          ))}
        </ul>
      </>
    )}
    {reasons && (
      <>
        <h5 className="mb-0">Razones para elegir {title}:</h5>
        <ul className="py-2 ms-2 certificationReasons">
          {reasons.map((reason, index) => (
            <li key={index}>
              <img
                src="./icons/arrow-right.svg"
                alt="Flecha"
                className="examIcon"
              />
              {reason}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);
export default ExamDetail;
