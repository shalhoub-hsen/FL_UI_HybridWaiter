// export default function themeTypography(theme) {
//     return {

import { createTheme, Palette } from "@mui/material";
import createTypography from "@mui/material/styles/createTypography";

type SectionVariants =
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "body1"
  | "body2"
  | "button" 
  | "customInput" 
  | "mainContent" 
  | "menuCaption" 
  | "subMenuCaption" 
  | "commonAvatar" 
  | "smallAvatar" 
  | "mediumAvatar" 
  | "largeAvatar" 
  ;
  declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides
    extends Record<SectionVariants, true> {}
}
declare module "@mui/material/styles/createTypography" {
  interface Typography extends Record<SectionVariants, React.CSSProperties> {}
  interface TypographyOptions
    extends Record<SectionVariants, React.CSSProperties> {}
}

export enum TypographyTypes {
  Regular = 400,
  Medium = 500,
  Bold = 700,
}

export enum TypographyFont {
  SegoeUI = "Segoe UI",
  Gotham = "Gotham",
}

export const themeTypography = (palette: Palette) =>
  createTypography(palette, () => ({
    // fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: "#212121",
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: "#212121",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      color: "#212121",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: "#212121",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: "#212121",
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: "#212121",
      fontWeight: 700,
    },
    subtitle1: { 
      fontSize: "0.875rem",
      fontWeight: 500,
      color: '#212121',
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: '#9e9e9e',
    },
    caption: {
      fontSize: "0.75rem",
      color: '#9e9e9e',
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: '#616161',
    },
    button: {
      textTransform: "capitalize",
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 23,
        left: 0,
        color: '#9e9e9e',
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: { 
      backgroundColor: '#e3f2fd',
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      marginRight: "20px",
      borderRadius: `5px`,
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#212121",
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: '#9e9e9e',
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
  }));
