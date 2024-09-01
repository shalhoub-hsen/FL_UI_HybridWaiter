export interface FeedbackProps {
  feedback: string;
  clientName: string;
  serviceDescription: string;
  imgSrc: string;
}

export const useFeedback = (props: FeedbackProps) => {
  return { ...props };
};
