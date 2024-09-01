import { useViewFile } from "hooks/useViewFile";
import { FeedbackProps, useFeedback } from "./useFeedback";
const Feedback: React.FC<FeedbackProps> = (props) => {
  const { feedback, clientName, serviceDescription, imgSrc } =
    useFeedback(props);

  return (
    <div className="testimonial-item bg-transparent border rounded p-4">
      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
      <p>{feedback}</p>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={useViewFile(imgSrc)}
          style={{ width: "50px", height: "50px" }}
        />
        <div className="ps-3">
          <h5 className="mb-1">{clientName}</h5>
          <small>{serviceDescription}</small>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
