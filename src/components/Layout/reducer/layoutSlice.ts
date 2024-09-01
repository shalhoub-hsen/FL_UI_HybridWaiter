import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutState } from "../context/layoutContext";

export const initialLayoutState: LayoutState = {
  isOpen: [], // for active default menu
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
  title: "",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: initialLayoutState,
  reducers: {
    setMenu(state, action: PayloadAction<boolean>) {
      state.opened = action.payload;
    },
    menuOpen(state, action: PayloadAction<Record<string, string>>) {
      state.isOpen = [action.payload.id];
      state.title = action.payload.title;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    setBorderRadius(state, action: PayloadAction<number>) {
      state.borderRadius = action.payload;
    },
  },
});

export const { setMenu,   menuOpen, setFontFamily, setBorderRadius } =
  layoutSlice.actions;

const layoutReducer = layoutSlice.reducer;
export default layoutReducer;
