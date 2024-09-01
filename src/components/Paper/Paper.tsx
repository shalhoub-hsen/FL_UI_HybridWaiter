import { PaperProps, usePaper } from "./usePaper";
import {
  Paper as MuiPaper,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";

const Paper: React.FC<PaperProps> = (props) => {
  const { children, theme, title } = usePaper(props);
  return (
    <MuiPaper
      sx={{
        padding: 0,
      }}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
