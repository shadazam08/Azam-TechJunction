import { Box, Paper, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

const TutorialButton = () => {
  return (
    <>
      <Box component={"main"} className="changeWidth" sx={{ p: 5, mt: 35 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{ mt: 2 }}
        >
          <Grid xs={12} sm={6} md={6} sx={{ height: "100%" }}>
            <Item>
              <Typography component={"div"}>
                <Typography
                  component={"p"}
                  sx={{ justifyContent: "flex-end", fontSize: ".9em" }}
                  className="flex"
                >
                  PREVIOUSLY
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ justifyContent: "flex-start" }}
                  className="flex"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    justifyContent: "flex-end",
                  }}
                  href="/javascript"
                  className="flex"
                >
                  JavaScript Tutorial
                </Typography>
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12} sm={6} md={6} sx={{ height: "100%" }}>
            <Item>
              <Typography component={"div"}>
                <Typography
                  component={"p"}
                  sx={{ justifyContent: "flex-start", fontSize: ".9em" }}
                  className="flex"
                >
                  UP NEXT
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ justifyContent: "flex-end" }}
                  className="flex"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    justifyContent: "flex-star",
                  }}
                  href="/javascript"
                  className="flex"
                >
                  JavaScript Tutorial
                </Typography>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TutorialButton;
