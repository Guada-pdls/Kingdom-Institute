/* eslint-disable react/prop-types */
const ExamDetail = ({ title, description, examDetails, certificateDetails, reasons }) => (
    <div>
      <h4 data-aos="fade-right" className="my-4 bold">
        {title}
      </h4>
      {description && description.map((text, index) => (
        <p key={index} className="py-2 mb-0">
          <span className="sangria">{text.charAt(0)}</span>{text.slice(1)}
        </p>
      ))}
      {examDetails && (
        <ul className="py-2 ms-5">
          {examDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
      {certificateDetails && (
        <>
          <p className="py-0 mb-0">El certificado {title} demuestra que puedes:</p>
          <ul className="py-2 ms-5">
            {certificateDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      )}
      {reasons && (
        <>
          <p className="py-0 mb-0">Razones para elegir {title}:</p>
          <ul className="py-2 ms-5">
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
export default ExamDetail
