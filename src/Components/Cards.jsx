import { Box, Typography } from "@mui/material";
import Card from "./Card";

export default function Cards() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "40px 0px",
        }}
      >
        <Box
          sx={{
            background: "#FF9671",
            height: "15px",
            width: { xs: "100%", sm: "190px" },
            borderRadius: "10px",
          }}
        ></Box>
        <Typography variant="h5" sx={{ margin: "0px 10px" }} gutterBottom>
          Members Info
        </Typography>
        <Box
          sx={{
            background: "#845EC2",
            height: "15px",
            width: { xs: "100%", sm: "190px" },
            borderRadius: "10px",
          }}
        ></Box>
      </Box>
      <Card />
    </>
  );
}
