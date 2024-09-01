import React from "react";
import Feedback from "./Feedback/Feedback";
import OwlCarousel from "react-owl-carousel";
import { ClientFeedbackProps, useClientFeedback } from "./useClientFeedback";
import { width } from "@mui/system";
const ClientFeedback: React.FC<ClientFeedbackProps> = (props) => {
  const { lstFeedbacks } = useClientFeedback(props);

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          {/* <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Testimonial
          </h5>
          <h1 className="mb-5">Our Clients Say!!!</h1> */}
        </div>
        {/* <div style={{ width: "20%", height: "500px" }}>
          <OwlCarousel
            className="owl-carousel testimonial-carousel"
            items={3}
            center
            autoplay
            dots
            loop
          >
            {lstFeedbacks.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <Feedback
                    feedback={val.feedback}
                    clientName={val.clientName}
                    serviceDescription={val.serviceDescription}
                    imgSrc={val.imgSrc}
                  />
                </React.Fragment>
              );
            })}
          </OwlCarousel>
        </div> */}
      </div>
    </div>
  );
};

export default ClientFeedback;
