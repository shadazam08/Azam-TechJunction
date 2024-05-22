import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const LoadDatabase = () => {
  return (
    <>
      <Helmet>
        <title>Load PostgreSQL Sample Database - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            Load PostgreSQL Sample Database
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LoadDatabase;
