import { Box, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ marginTop: "5vw", fontSize: 24, fontFamily: "Roboto" }}>
        Convert Your Files
      </Typography>

      <Typography sx={{ marginTop: "2vw", fontSize: 16, color: "#4a5565" }}>
        Upload file and click convert to get started
      </Typography>
    </Box>
  );
};
