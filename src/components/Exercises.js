import React, { useEffect, useState } from "react";
import { Pagination, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log("We are inside Exercises component");
  console.log("Exercises :-", exercises);
  const [currPage, setCurrPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrPage(value);
    window.scrollTo({ top: 1320, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        console.log("The exercises(inside exercise component)", exercisesData);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        console.log("The exercises(inside exercise component)", exercisesData);
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" marginBottom="46px">
        Showing results
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {currExercises.map((exercise, index) => {
          // return exercise.equipment;
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && ( //if length of exercises is greater than 9, then we will import Pagination component
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
export default Exercises;
