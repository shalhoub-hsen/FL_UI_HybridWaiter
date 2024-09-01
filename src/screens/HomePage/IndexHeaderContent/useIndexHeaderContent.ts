import { useLayoutContext } from "components/Layout/hooks/useLayoutContext";
import { useAppDispatch } from "hooks/redux";

export interface IndexHeaderContentProps {}

export const useIndexHeaderContent = (props: IndexHeaderContentProps) => {
  const context = useLayoutContext();
  const { title } = context;

  return {};
};
