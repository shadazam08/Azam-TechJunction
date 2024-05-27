import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const Notes = () => {
  return (
    <>
      <Helmet>
        <title>Notes - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>Notes</Box>
      </Box>
    </>
  );
};

export default Notes;
