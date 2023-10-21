import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  const logoStyling = {
    width: "48px",
    height: "48px",
    margin: "0 20px",
  };
  return (
    <Stack
      direction="row"
      //   justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "400px" },
        mt: { sm: "32px", xs: "20px" },
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={logoStyling} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2626",
          }}
        >
          Home
        </Link>
        <a
          href="#excercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
