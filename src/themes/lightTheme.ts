import { createTheme } from "@mui/material";

import { brandPalette } from "./brandPalette";

import componentStyleOverrides from "./compStyleOverride";
import { themeTypography } from "./typography";

const palette = brandPalette;
const lightTheme = createTheme({
  direction: "ltr",

  typography: themeTypography(palette),
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    ...componentStyleOverrides(palette),
  },
});
export default lightTheme;
