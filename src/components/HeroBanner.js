import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: "40px",
      }}
    >
      <Box
        component="span"
        sx={{
          mt: { lg: "100px", xs: "7px" },
          ml: { sm: "50px" },
          position: "relative",
        }}
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          sx={{ fontWeight: "700", fontSize: { lg: "44px", xs: "40px" } }}
        >
          Swear, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={5}>
          Checkout the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ marginTop: "15px", display: "block", marginBottom: "4px" }}
        >
          Explore Excercises
        </Button>
        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
          fontSize="100px"
          marginRight={10}
        >
          Exercises
        </Typography>
      </Box>
      <img
        src={HeroBannerImage}
        width="600px"
        height="600px"
        className="hero-banner-image"
      />
    </Stack>
  );
};

export default HeroBanner;
