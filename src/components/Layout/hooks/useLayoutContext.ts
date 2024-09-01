import { useCallback, useContext } from "react";
import { LayoutCtx } from "../context/layoutContext";
import {
  setMenu as setMenuState,
  menuOpen as menuOpenState,
  setFontFamily as setFontFamilyState,
  setBorderRadius as setBorderRadiusState,
} from "../reducer/layoutSlice";

export const useLayoutContext = () => {
  const context = useContext(LayoutCtx);
  if (!context) throw Error("useLayoutContext must be inside Page");

  const { contextReducer } = context;
  const [layoutState, layoutDispatch] = contextReducer;

  const setMenu = useCallback(
    (next: boolean) => {
      layoutDispatch(setMenuState(next));
    },
    [layoutDispatch]
  );

  const menuOpen = useCallback(
    (next: Record<string, string>) => {
      layoutDispatch(menuOpenState(next));
    },
    [layoutDispatch]
  );

  const setFontFamily = useCallback(
    (next: string) => {
      layoutDispatch(setFontFamilyState(next));
    },
    [layoutDispatch]
  );

  const setBorderRadius = useCallback(
    (next: number) => {
      layoutDispatch(setBorderRadiusState(next));
    },
    [layoutDispatch]
  );

  return {
    ...layoutState,
    setMenu,
    menuOpen,
    setFontFamily,
    setBorderRadius,
  };
};
