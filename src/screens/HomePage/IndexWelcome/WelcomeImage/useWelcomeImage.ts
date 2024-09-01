export interface WelcomeImageProps {
  textAlign: string;
  width: string;
  delayTime: string;
  imageSrc: any;
}

export const useWelcomeImage = (props: WelcomeImageProps) => {
  return { ...props };
};
