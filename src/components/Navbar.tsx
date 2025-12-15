import {
  Typography,
  AppBar,
  Toolbar,
  Icon,
  Box,
  useTheme,
} from "@mui/material";

import { useContext } from "react";
import { ColorModeContext } from "../utils/theme";

export const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar position="static" sx={{ width: "100vw", overflowX: "hidden" }}>
      <Toolbar disableGutters sx={{ px: 2 }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Icon>cached</Icon>
          <Typography
            fontFamily={"BBH Bartle"}
            fontSize={20}
            marginLeft={"19px"}
          >
            WMMPEG
          </Typography>
        </Box>
        {/*      <IconButton color="inherit" onClick={toggleColorMode} size="large">
          <Icon>
            {theme.palette.mode === "dark" ? "light_mode" : "dark_mode"}
          </Icon>
        </IconButton>
  */}
      </Toolbar>
    </AppBar>
  );
};
