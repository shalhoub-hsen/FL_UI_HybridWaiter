import { ThemeProvider, Typography } from "@mui/material";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import LayoutProvider from "components/Layout/LayoutProvider/LayoutProvider";
import Routes from "router/routes";
import { useApp } from "./useApp";

const App: React.FC = () => {
  const { currentTheme } = useApp();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <LayoutProvider>
          <CssBaseline />
          <Routes />
        </LayoutProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
