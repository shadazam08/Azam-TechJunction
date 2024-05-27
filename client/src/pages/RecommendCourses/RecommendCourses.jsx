import React from "react";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { purple } from "@mui/material/colors";
import ReactjsTutorial from "../../Assets/image/ReactjsTutorial.gif";
import JavaScriptTutorial from "../../Assets/image/JavaScriptTutorial.gif";
import PostgreSQLTutorial from "../../Assets/image/PostgreSQL.gif";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[700],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const RecommendCourses = () => {
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
        <Grid
          xs={12}
          sm={6}
          md={4}
          sx={{ height: "100%", textAlign: "justify" }}
        >
          <Item>
            <img
              src={PostgreSQLTutorial}
              alt="PostgreSQL Tutorials "
              style={{ width: "100%", marginBottom: "1em" }}
            />
            {/* <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography> */}
            <Typography
              component={"h4"}
              sx={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#000",
                textAlign: "justify",
              }}
            >
              PostgreSQL Tutorials For Beginners
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
                color: "#4D4D4D",
                textAlign: "justify",
                marginTop: "1em",
              }}
            >
              Explore beginner-friendly PostgreSQL tutorials covering essential
              topics. Learn database management fundamentals, SQL querying, data
              manipulation, and more. Master PostgreSQL installation,
              configuration, and basic commands. Elevate your skills and become
              proficient in working with PostgreSQL databases.
            </Typography>
            <div className="flex justify-center lg:justify-start mt-6">
              <ColorButton variant="contained" href="/postgreSQL">
                Free Courses
              </ColorButton>
            </div>
          </Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Item>
            <img
              src={JavaScriptTutorial}
              alt="JavaScript Tutorial for Beginners"
              style={{ width: "100%", marginBottom: "1em" }}
            />
            {/* <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography> */}
            <Typography
              component={"h4"}
              sx={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#000",
                textAlign: "justify",
              }}
            >
              JavaScript Tutorials For Beginners
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
                color: "#4D4D4D",
                textAlign: "justify",
                marginTop: "1em",
              }}
            >
              Begin your web development journey with our beginner-friendly
              JavaScript tutorials. Master the essentials of JavaScript
              programming, covering variables, data types, control structures,
              functions, and objects. Get ready to dive into the world of coding
              and build your first JavaScript projects from scratch.
            </Typography>
            <div className="flex justify-center lg:justify-start mt-6">
              <ColorButton variant="contained" href="/javascript">
                Free Courses
              </ColorButton>
            </div>
          </Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Item>
            <img
              src={ReactjsTutorial}
              alt="React JS Tutorials For Beginners"
              style={{ width: "100%", marginBottom: "1em" }}
            />
            {/* <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography> */}
            <Typography
              component={"h4"}
              sx={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#000",
                textAlign: "justify",
              }}
            >
              React JS Tutorials For Beginners
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
                color: "#4D4D4D",
                textAlign: "justify",
                marginTop: "1em",
              }}
            >
              Kickstart your front-end development journey with our
              beginner-friendly React JS tutorials. Explore the fundamental
              concepts of React, such as components, JSX syntax, state
              management, and props. Discover how to create reusable UI
              components and much more....
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
