import { createContext, Dispatch, useContext } from "react";

export type LayoutProps = {
  // height?: number;
};

export interface LayoutState {
  isOpen: string[]; // for active default menu
  fontFamily: string;
  borderRadius: number;
  opened: boolean;
  title: string;
}

export type LayoutCtxState = {
  contextReducer: [LayoutState, Dispatch<any>];
  providerProps: LayoutProps;
} | null;

export const LayoutCtx = createContext<LayoutCtxState>(null);
export const useLayoutCtx = () => useContext<LayoutCtxState>(LayoutCtx);
