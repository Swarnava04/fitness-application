import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPart,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        // p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        style={{ width: "700px", height: "700px" }}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. <u>{name}</u> is one of the best exercises
          to target your <u>{target}</u>. It will help you improve your mood and
          gain energy.
        </Typography>
        {extraDetail.map((item) => {
          return (
            <Stack direction={"row"} key={item.name} gap={"30px"}>
              <Button
                sx={{
                  background: "#FFFF5C",
                  borderRadius: "60%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img src={item.icon} />
              </Button>
              <Typography
                variant="h6"
                marginTop={"28px"}
                textTransform={"capitalize"}
              >
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
