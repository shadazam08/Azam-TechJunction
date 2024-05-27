import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Helmet } from "react-helmet";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>Courses</Box>
      </Box>
    </>
  );
};

export default Courses;
