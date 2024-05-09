import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Toolbar, Typography, styled } from "@mui/material";
import { Helmet } from "react-helmet";
import { purple } from "@mui/material/colors";

const DashBoard = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["React JS", "JavaScript", "DSA JAVA", "PostgreSQL"]; // Add more texts here

  useEffect(() => {
    const text = "Azam TechJunction";
    const span = document.getElementById("typed-text");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        span.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[700],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  useEffect(() => {
    const span = document.getElementById("typed-subtext");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < texts[currentTextIndex].length) {
        span.textContent += texts[currentTextIndex][index];
        index++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          span.textContent = ""; // Clear the span for the next text
        }, 1000); // Delay before typing the next text
      }
    }, 100); // Adjust typing speed here (milliseconds)

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return (
    <>
      <Helmet>
        <title>Learn to code online - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="main">
        <Toolbar />

        <div className="flex bg-white h-96 container mx-auto dark:bg-gray-900">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl dark:text-white">
                Welcome to{" "}
                <span
                  id="typed-text"
                  className="text-purple-700 dark:text-purple-600"
                ></span>
              </h2>
              <h4 className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">
                Learn{" "}
                <span
                  id="typed-subtext"
                  className="text-purple-700 dark:text-purple-600"
                ></span>
                <span
                  className="typed-cursor typed-cursor--blink"
                  aria-hidden="true"
                >
                  |
                </span>
              </h4>
              <p className="mt-2 text-sm text-gray-500 md:text-base dark:text-gray-400">
                Can't decide on a coding course? We've got you covered! Check
                out our free courses to find your perfect match. One option is
                Azam TechJunction. Led by Azam, this course promises a great
                learning experience, though details about content and style are
                still forthcoming. If you're looking for a straightforward way
                to learn coding basics, Azam TechJunction could be just what you
                need. And remember, all our courses are free, so dive in today
                and start your coding journey!.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <ColorButton variant="contained">Free Courses</ColorButton>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{
              clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)",
            }}
          >
            <img
              className="h-full object-cover"
              style={{ width: "100%" }}
              src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
            />
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
        <div className="text-center mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
          Recommended Courses
        </div>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          gap={2}
          className="container mx-auto lg:text-left px-8 md:px-12 lg:w-1/2 "
          sx={{ marginTop: "2rem", justifyContent: "center" }}
        >
          <Grid
            item
            xs={"auto"}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
              alt="Python Tutorials - 100 Days of Code"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"div"}
              sx={{ fontWeight: 500 }}
            >
              Python Tutorials - 100 Days of Code
            </Typography>
            <Typography component={"p"}>
              Python is one of the most demanded programming languages in the
              job market. Surprisingly, it is equally easy to learn and master
              Python. Let's commit our 100 days of code to python!
            </Typography>
          </Grid>
          <Grid
            item
            xs={"auto"}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
              alt="Python Tutorials - 100 Days of Code"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"div"}
              sx={{ fontWeight: 500 }}
            >
              Ultimate JavaScript Course
            </Typography>
            <Typography component={"p"}>
              This latest JavaScript course comes with premium curriculum that
              covers everything from basics to advance. On top of that, you will
              get my handwritten notes of JS for completely free. What are you
              waiting for? Just Enroll Buddy
            </Typography>
          </Grid>
          <Grid
            item
            xs={"auto"}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
              alt="Python Tutorials - 100 Days of Code"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: 400 }}
            >
              FREE COURSE
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component={"div"}
              sx={{ fontWeight: 500 }}
            >
              React JS Tutorials For Beginners
            </Typography>
            <Typography component={"p"}>
              React is a free and open-source front-end JavaScript library. This
              series will cover React from starting to the end. We will learn
              react from the ground up!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashBoard;
