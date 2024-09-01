import { createTheme, Palette } from "@mui/material";
const componentStyleOverrides = (palette: Palette) =>
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: "4px",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
          rounded: {
            borderRadius: `5px`,
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            color: "#212121",
            padding: "24px",
          },
          title: {
            fontSize: "1.125rem",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: "24px",
          },
        },
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: "24px",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            color: "#616161",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&.Mui-selected": {
              color: "#651fff",
              backgroundColor: "#ede7f6",
              "&:hover": {
                backgroundColor: "#ede7f6",
              },
              "& .MuiListItemIcon-root": {
                color: "#5e35b1",
              },
            },
            "&:hover": {
              backgroundColor: "#ede7f6",
              color: "#5e35b1",
              "& .MuiListItemIcon-root": {
                color: "#5e35b1",
              },
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#616161",
            minWidth: "36px",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: "#212121",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#212121",
            "&::placeholder": {
              color: "#9e9e9e",
              fontSize: "0.875rem",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background: "#fafafa",
            borderRadius: `5px`,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9e9e9e",
            },
            "&:hover $notchedOutline": {
              borderColor: "#e3f2fd",
            },
            "&.MuiInputBase-multiline": {
              padding: 1,
            },
          },
          input: {
            fontWeight: 500,
            background: "#fafafa",
            padding: "15.5px 14px",
            borderRadius: `5px`,
            "&.MuiInputBase-inputSizeSmall": {
              padding: "10px 14px",
              "&.MuiInputBase-inputAdornedStart": {
                paddingLeft: 0,
              },
            },
          },
          inputAdornedStart: {
            paddingLeft: 4,
          },
          notchedOutline: {
            borderRadius: `5px`,
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              color: "#e0e0e0",
            },
          },
          mark: {
            backgroundColor: "#ffffff",
            width: "4px",
          },
          valueLabel: {
            color: "#e3f2fd",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: "#eeeeee",
            opacity: 1,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            color: "#1e88e5",
            background: "#90caf9",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            "&.MuiChip-deletable .MuiChip-deleteIcon": {
              color: "inherit",
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            color: '#ffffff',
            background: "#616161",
          },
        },
      },
    },
  });

const brandComponents = (pallete: Palette) =>
  componentStyleOverrides(pallete).components;
export default brandComponents;
