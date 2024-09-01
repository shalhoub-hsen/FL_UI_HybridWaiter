import { AppBar, Box, CssBaseline, styled, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import { PageProps, usePage } from "./usePage";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";

const ContentRoot = styled("div")`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  flex: 1;
`;

const BodyRoot = styled("main")`
  flex-grow: 1;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  padding: 0 !important;
`;

const Page: React.FC<PageProps> = (props) => {
  const { children, name, title, theme, opened } = usePage(props);

  return (
    <Box sx={{ width: "100%" }}>
      <MainHeader />
      <BodyRoot theme={theme}>
        <Outlet />
      </BodyRoot>
      <Footer />
    </Box>
  );
};

export default Page;
