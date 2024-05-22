import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

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
          <Typography align={"justify"} mt={2}>
            Before proceeding with this tutorial, ensure you have:
          </Typography>
          <List>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography
                  variant={"span"}
                  align={"justify"}
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                A PostgreSQL database server.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography
                  variant={"span"}
                  align={"justify"}
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                <Link
                  href={"/PostgreSQL/PostgreSQL-sample-database"}
                  target={"_blank"}
                >
                  A sample PostgreSQL database
                </Link>{" "}
                named <code className="codes">dvdrental</code>.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} sx={{ fontSize: "24px" }}>
            <strong>
              Use the <code className="codes">psql</code> and{" "}
              <code className={"codes"}>pg_restore</code> tool to load the
              sample database.
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            To create a database and load data from an archive file, you should
            follow these steps:
          </Typography>
          <List>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography
                  variant={"span"}
                  align={"justify"}
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                First, connect to the PostgreSQL database server using either{" "}
                <code className="codes">psql</code> or{" "}
                <code className="codes">pgAdmin</code>.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography
                  variant={"span"}
                  align={"justify"}
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                Second, create a blank database named{" "}
                <code className={"codes"}>dvdrental</code>.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography
                  variant={"span"}
                  align={"justify"}
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                Third, use <code className={"codes"}>pg_restore</code> to load
                data from the sample database file into the dvdrental database.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} sx={{ fontSize: "24px" }}>
            <strong>
              <FontAwesomeIcon icon={fa1} />
              {")"} Establish the dvdrental database.
            </strong>
          </Typography>
          <Typography align={"justify"} mt={2}>
            Begin by opening the Command Prompt on Windows or Terminal on
            Unix-like systems. Then, connect to the PostgreSQL server using the
            psql tool.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{"psql -U postgres"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            You'll be prompted to input a password for the postgres user.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{"Password for user postgres:"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            Once you've entered the password correctly, you'll establish a
            connection to the PostgreSQL server.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LoadDatabase;
