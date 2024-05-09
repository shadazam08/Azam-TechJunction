import React from "react";
import { Box, Button, Paper, Toolbar, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { purple } from "@mui/material/colors";
import ReactjsTutorial from "../../Assets/image/ReactjsTutorial.gif";
import JavaScriptTutorial from "../../Assets/image/JavaScriptTutorial.gif";
import DSATutorial from "../../Assets/image/DSATutorial.gif";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const RecommendCourses = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[700],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <div className="text-center mt-6 text-3xl font-bold text-gray-800 md:text-4xl mb-3">
        Recommended Courses
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
      >
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Item>
            <img
              src={DSATutorial}
              alt="Python Tutorials - 100 Days of Code"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"h4"}
              sx={{ fontWeight: 500 }}
            >
              DSA JAVA Tutorials For Beginners
            </Typography>
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Get started with Data Structures and Algorithms (DSA) in Java with
              our comprehensive beginner-friendly tutorials. Master the
              fundamental concepts of DSA, including arrays, linked lists,
              stacks, queues, trees, graphs, sorting, searching, and more.
            </Typography>
            <div className="flex justify-center lg:justify-start mt-6">
              <ColorButton variant="contained">Free Courses</ColorButton>
            </div>
          </Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Item>
            <img
              src={JavaScriptTutorial}
              alt="Python Tutorials - 100 Days of Code"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"h4"}
              sx={{ fontWeight: 500 }}
            >
              JavaScript Tutorials For Beginners
            </Typography>
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Embark on your journey into the world of web development with our
              JavaScript tutorials designed for beginners. Learn the
              fundamentals of JavaScript programming, including variables, data
              types, control structures, functions, and objects.
            </Typography>
            <div className="flex justify-center lg:justify-start mt-6">
              <ColorButton variant="contained">Free Courses</ColorButton>
            </div>
          </Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Item>
            <img
              src={ReactjsTutorial}
              alt="React JS Tutorials For Beginners"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"h4"}
              sx={{ fontWeight: 500 }}
            >
              React JS Tutorials For Beginners
            </Typography>
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Jumpstart your front-end development journey with our React JS
              tutorials tailored for beginners. Discover the core concepts of
              React, including components, JSX syntax, state management, and
              props. Learn how to build reusable UI components and more...
            </Typography>
            <div className="flex justify-center lg:justify-start mt-6">
              <ColorButton variant="contained">Free Courses</ColorButton>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecommendCourses;
