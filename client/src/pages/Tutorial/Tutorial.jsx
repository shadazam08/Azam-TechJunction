import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const Tutorial = () => {
  return (
    <>
    <Helmet>
      <title></title>
    </Helmet>
      <Box component={"main"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>Tutorial</Box>
      </Box>
    </>
  );
};

export default Tutorial;
