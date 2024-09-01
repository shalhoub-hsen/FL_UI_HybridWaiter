import { useEffect } from "react";

export interface AlertProps {
  message: string;
  onClose: () => void;
}

export const useAlert = (props: AlertProps) => {
  const { onClose } = props;
  useEffect(() => {
    const timeoutId = setTimeout(onClose, 1500);

    // Clear the timeout when the component unmounts or re-renders
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return { ...props };
};
