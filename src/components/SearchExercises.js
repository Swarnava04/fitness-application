import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollingBar from "./HorizontalScrollingBar";
const SearchExercises = ({ setBodyPart, bodyPart, setWorkouts }) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"; //this url is showing the body parts by categories
      const bodyPartsData = await fetchData(url, exerciseOptions);
      setBodyParts(["all", ...bodyPartsData]);
      console.log("body parts data ", bodyPartsData);
      console.log("body parts are", bodyParts);
    };
    fetchExercisesData();
  }, []);
  async function handleSearchExercises() {
    if (search) {
      const url = "https://exercisedb.p.rapidapi.com/exercises"; //modified the url for out purpose
      const data = await fetchData(url, exerciseOptions); //fetching the exercise data
      const searchExercises = data.filter((eachExcersise) => {
        return (
          eachExcersise.name.toLowerCase().includes(search) ||
          eachExcersise.target.toLowerCase().includes(search) ||
          eachExcersise.bodyPart.toLowerCase().includes(search) ||
          eachExcersise.equipment.toLowerCase().includes(search)
        );
      });
      setSearch(""); //clearing the search
      setExercises(searchExercises);
      setWorkouts(searchExercises); //so here we are updating the state variable exercises in the home page
      console.log("The exercises inside Search Exercises component", exercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700px"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
      >
        Awesome Exercises You
        <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700" },
            border: "none",
            borderRadius: "10%",
            marginTop: "5px",
            width: { lg: "700px", xs: "350px" },
          }}
          value={search}
          height="76px"
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "150px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "55px",
            position: "absolute",
            top: "4px",
          }}
          onClick={handleSearchExercises}
        >
          Search
        </Button>
      </Box>
      {/* <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollingBar
          data={bodyParts}
          bodyParts={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box> */}
    </Stack>
  );
};
export default SearchExercises;
