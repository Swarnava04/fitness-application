import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log("we are inside exercises videos section", exerciseVideos);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        videos
      </Typography>
      <Stack
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "25px", xs: "0px" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => {
          return (
            <a
              key={index}
              className="exercise-video"
              target="blank"
              rel="noreferrer"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={`${item.video.title}`}
                style={{
                  border: "4px solid black",
                  padding: "4px",
                  margin: "6px",
                }}
              />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="yello">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
