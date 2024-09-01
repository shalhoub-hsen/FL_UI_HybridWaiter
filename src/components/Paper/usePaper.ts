import { PropsWithChildren, ReactNode } from "react";
import { useTheme } from "@mui/material";

export type PaperProps = PropsWithChildren<{
  title: string;
}>;
export const usePaper = (props: PaperProps) => {
  const theme = useTheme();
  const { title } = props;

  return { ...props, theme, title };
};
