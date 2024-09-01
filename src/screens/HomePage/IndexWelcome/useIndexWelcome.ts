export interface IndexWelcomeProps {}

export const useIndexWelcome = (props: IndexWelcomeProps) => {
  var images = [
    {
      textAlign: "text-start",
      width: "w-100",
      delayTime: "0.1",
      imageSrc: "about-1.jpg",
    },
    {
      textAlign: "text-start",
      width: "w-75",
      delayTime: "0.3",
      imageSrc: "about-2.jpg",
      marginTopStyle: "25%",
    },
    {
      textAlign: "text-end",
      width: "w-75",
      delayTime: "0.5",
      imageSrc: "about-3.jpg",
    },
    {
      textAlign: "text-end",
      width: "w-100",
      delayTime: "0.7",
      imageSrc: "about-4.jpg",
    },
  ];

  return { ...props, images };
};
