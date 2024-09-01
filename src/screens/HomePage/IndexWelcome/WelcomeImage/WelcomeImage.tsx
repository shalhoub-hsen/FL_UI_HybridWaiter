import { useViewFile } from "hooks/useViewFile";
import { useWelcomeImage, WelcomeImageProps } from "./useWelcomeImage";

const WelcomeImage: React.FC<WelcomeImageProps> = (props) => {
  const { textAlign, width, delayTime, imageSrc } = useWelcomeImage(props);

  return (
    <>
      <div className={`col-6 ${textAlign}`}>
        <img
          className={`img-fluid rounded ${width} wow zoomIn`}
          data-wow-delay={`${delayTime}s`}
          src={useViewFile(imageSrc)}
        />
      </div>
    </>
  );
};

export default WelcomeImage;
