export interface ScreenHeaderProps {
  PageName : string;
  ItemName : string
}

export const useScreenHeader = (props: ScreenHeaderProps) => {
  return {
    ...props,
  };
};