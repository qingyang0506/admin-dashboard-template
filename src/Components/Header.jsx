import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: colors.grey[100],
          m: "0,0,10px,0",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          color: colors.greenAccent[400],
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
