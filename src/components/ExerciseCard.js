import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        // loading="lazy"
        className="exercise-card"
        style={{ marginRight: "12px" }}
      />
      <Stack direction={"row"}>
        <Button
          sx={{
            ml: "21px",
            mb: "5px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            width: "12%",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            mb: "5px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            width: "12%",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        fontSize="18px"
        ml="21px"
        color="#000"
        mt="11px"
        fontWeight="bold"
        textTransform="capitalize"
        pb="10px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
