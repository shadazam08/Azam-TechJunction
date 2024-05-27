import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>Contact</Box>
      </Box>
    </>
  );
};

export default Contact;
