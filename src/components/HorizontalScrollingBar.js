import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollingBar = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
}) => {
  const { scrollPrev, scrollNext } = useContext(VisibilityContext);
  const LeftArrow = () => {
    return (
      <Typography onClick={() => scrollPrev} className="left-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  const RightArrow = () => {
    return (
      <Typography onClick={() => scrollNext} className="right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <Box key={item.id || item} m="0 40px">
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollingBar;
