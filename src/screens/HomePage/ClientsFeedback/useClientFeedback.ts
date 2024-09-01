export interface ClientFeedbackProps {}

import image1 from "../../../img/testimonial-1.jpg";

export const useClientFeedback = (props: ClientFeedbackProps) => {
  var lstFeedbacks = [
    {
      id: 1,
      feedback:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client Name",
      serviceDescription: "Profession",
      imgSrc: image1,
    },
    {
      id: 2,
      feedback:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client Name",
      serviceDescription: "Profession",
      imgSrc: image1,
    },
    {
      id: 3,
      feedback:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client Name",
      serviceDescription: "Profession",
      imgSrc: image1,
    },
    {
      id: 4,
      feedback:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client Name",
      serviceDescription: "Profession",
      imgSrc: image1,
    },
  ];

  return { ...props, lstFeedbacks };
};
