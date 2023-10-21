import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollingBar from "./HorizontalScrollingBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" marginBottom={"30px"}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollingBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" marginBottom={"30px"}>
        Exercises which require the same equipments
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollingBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
