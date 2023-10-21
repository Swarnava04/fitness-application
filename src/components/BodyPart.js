import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "150px",
        height: "150px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item); //this will set the bodyPart ==item in the home component
        window.scrollTo({ left: 100, top: 1800, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        style={{
          width: "50px",
          height: "50px",
          display: "absolute",
          //   marginTop: "2px",
        }}
      />
      <Typography fontWeight="bold" color="#3A1212" fontSize="24px">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
