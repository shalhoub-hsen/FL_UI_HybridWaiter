import Config from "utils/config";

export const useViewFile = (fileName: string) => {
  return `${Config.BASE_URL}Media/${fileName}`;
};
