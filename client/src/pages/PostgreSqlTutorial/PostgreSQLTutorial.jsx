import React from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import postgresqloriginalImage from "../../Assets/image/postgresql-original-wordmark.svg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  borderRadius: "15px",
  //   color: theme.palette.text.secondary,
}));

const PostgreSQLTutorial = () => {
  return (
    <>
      <Helmet>
        <title>
          Table of Contents for PostgreSQL Tutorial - Azam TechJunction
        </title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">PostgreSQL Tutorial</Typography>
          <Typography paragraph mt={2} align="justify">
            Welcome to the azamtectjunction website! Our{" "}
            <strong>PostgreSQL</strong> tutorial is designed to help you grasp
            PostgreSQL concepts swiftly. With numerous practical examples,
            you'll quickly become proficient in PostgreSQL and be ready to
            implement your newfound knowledge in application development.
          </Typography>
          <Typography paragraph align="justify">
            If you find yourself in any of the following situations, you may
            benefit from our PostgreSQL tutorial:
          </Typography>
          <Typography
            component={"div"}
            className="flex bg-white container mx-auto dark:bg-gray-900"
          >
            <List
              sx={{ textAlign: "justify" }}
              className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-500"
            >
              <ListItem>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  Looking to learn PostgreSQL fast.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  Developing applications using PostgreSQL as the back-end
                  database management system.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  Migrating from other database management systems such as{" "}
                  <code className="codes">MySQL</code>,{" "}
                  <code className="codes">Oracle</code>, and{" "}
                  <code className="codes">Microsoft SQL Server</code> to
                  PostgreSQL.
                </Typography>
              </ListItem>
              <Typography component={"span"} sx={{ textAlign: "justify" }}>
                Everything you need to quickly and effectively get started with
                PostgreSQL is right here on this website.
              </Typography>
            </List>

            <div className="hidden lg:block lg:w-1/2">
              <img
                className="h-full"
                style={{ width: "30%", marginLeft: "50%" }}
                src={postgresqloriginalImage}
                alt="Java Script"
              />
            </div>
          </Typography>
          <Typography paragraph sx={{ textAlign: "justify" }}>
            PostgreSQL tutorial demonstrates many unique features of PostgreSQL
            that position it as the most advanced open-source database
            management system.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 1. Getting started
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/PostgreSQL/What-is-PostgreSQL">
                        What is PostgreSQL
                      </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> introduce you to
                      PostgreSQL and its applications in today’s software stack.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/PostgreSQL/PostgreSQL-sample-database">
                        Introduction to PostgreSQL sample database
                      </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> to learn the PostgreSQL
                      fast, you need to have a good sample database to practice
                      with. This tutorial introduces you to a PostgreSQL sample
                      database called <code className="codes">dvdrental</code>
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/PostgreSQL/Install-PostgreSQL">
                        Install PostgreSQL on Windows{" "}
                      </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} />
                      walk you through the steps of how to install PostgreSQL on
                      Windows.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/PostgreSQL/connect-to-postgresql">
                        Connect to PostgreSQL database server{" "}
                      </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to connect
                      to the PostgreSQL using psql tool and pgAdmin 4 GUI tool.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/PostgreSQL/Load-Sample-Database">
                        Load Sample Database into PostgreSQL Server
                      </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> guide you on how to
                      load the sample database into the PostgreSQL database
                      server for practicing.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 2. Querying Data
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Select</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to query
                      data from a single table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Column aliases</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> learn how to assign
                      temporary names to columns or expressions within a query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Order By</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> guide you on how to
                      sort the result set returned by a query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Select Distinct</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> provide you with a
                      clause that removes duplicate rows in the result set.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 3. Managing Tables
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Data types</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> cover the most commonly
                      used PostgreSQL data types.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Create a table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> guide you on how to
                      create a new table in the database.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Select Into & Create table </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> as shows you how to
                      create a new table from the result set of a query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Auto-increment column with SERIAL</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> uses SERIAL to add an
                      auto-increment column to a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Sequences</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> introduce you to
                      sequences and describe how to use a sequence to generate a
                      sequence of numbers.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Identity column</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to use the
                      identity column.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Alter table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> modify the structure of
                      an existing table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Rename table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> change the name of the
                      table to a new one.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Add column</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to add one
                      or more columns to an existing table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Drop column</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> demonstrate how to drop
                      a column of a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Change column data type</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to change
                      the data of a column.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Rename column</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> illustrate how to
                      rename one or more columns of a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Drop table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> remove an existing
                      table and all of its dependent objects.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Truncate table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> remove all data in a
                      large table quickly and efficiently.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Temporary table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to use the
                      temporary table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Copy a table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to copy a
                      table to a new one.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 4. PostgreSQL Constraints
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Primary key</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> illustrate how to
                      define a primary key when creating a table or adding a
                      primary key to an existing table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Foreign key</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to define
                      foreign key constraints when creating a new table or
                      adding foreign key constraints for existing tables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">DELETE CASCADE</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to
                      automatically delete rows in child tables when the
                      corresponding rows in the parent table are deleted.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">CHECK constraint</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> add logic to check
                      value based on a Boolean expression.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">UNIQUE constraint</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> ensure that values in a
                      column or a group of columns are unique across the table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">NOT NULL constraint </Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> ensure values in a
                      column are not NULL.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">DEFAULT constraint</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> specify a default value
                      for a column using the DEFAULT constraint.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 5. PostgreSQL Data Types in Depth
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Boolean</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> store TRUE and FALSE
                      values with the Boolean data type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">CHAR, VARCHAR, and TEXT</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> learn how to use
                      various character types including CHAR, VARCHAR, and TEXT.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">NUMERIC</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to use
                      NUMERIC type to store values that precision is required.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>DOUBLE PRECISION</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> learn to store inexact,
                      variable-precision numbers in the database. The DOUBLE
                      PRECISION type is also known as the FLOAT type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>REAL</Link> <FontAwesomeIcon icon={faMinus} /> guide
                      you on how to use single-precision floating-point numbers
                      in the database
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Integer</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      introduce you to various integer types in PostgreSQL
                      including SMALLINT, INT and BIGINT.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>DATE</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      introduce the DATE data type for storing date values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Timestamp</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      understand timestamp data types quickly.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Interval</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      show you how to use interval data type to handle a period
                      effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>TIME</Link> <FontAwesomeIcon icon={faMinus} /> use
                      the TIME datatype to manage the time of day values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>UUID</Link> <FontAwesomeIcon icon={faMinus} /> guide
                      you on how to use UUID datatype and how to generate UUID
                      values using supplied modules.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Array</Link> <FontAwesomeIcon icon={faMinus} /> show
                      you how to work with arrays and introduce you to some
                      handy functions for array manipulation.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>hstore</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      introduce you to the hstore data type which is a set of
                      key/value pairs stored in a single value in PostgreSQL.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>JSON</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      illustrate how to work with JSON data type and use some of
                      the most important JSON operators and functions.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>User-defined data types</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to use the
                      CREATE DOMAIN and CREATE TYPE statements to create
                      user-defined data types.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Enum</Link> <FontAwesomeIcon icon={faMinus} /> learn
                      how to create an enum type that defines a list of fixed
                      values for a column.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>XML</Link> <FontAwesomeIcon icon={faMinus} /> show
                      you how to store XML documents in the database using the
                      XML data type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>BYTEA</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      learn how to store binary strings in the database.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>Composite Types</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to define
                      a composite type that consists of multiple fields.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 6. Filtering Data
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Where</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> filter rows based on a
                      specified condition.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">AND operator</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> combine two boolean
                      expressions and return true if both expressions evaluate
                      to true.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">OR operator</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> combine two boolean
                      expressions and return false if either expression
                      evaluates to false.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Limit</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> retrieve a subset of
                      rows generated by a query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Fetch</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> limit the number of
                      rows returned by a query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">In</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> select data that
                      matches any value in a list of values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Between</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> select data that is a
                      range of values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Like</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> filter data based on
                      pattern matching.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Is Null</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> check if a value is
                      null or not.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 7. Joining Multiple Tables
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Joins</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you a brief
                      overview of <code className="codes">joins</code> in
                      PostgreSQL.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Table aliases</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> describes how to use{" "}
                      <code className="codes">table aliases</code> in the query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Inner Join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> select rows from one
                      table that have the corresponding rows in other tables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Left Join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> select rows from one
                      table that may or may not have the corresponding rows in
                      other tables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Self-join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> join a table to itself
                      by comparing a table to itself.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Full Outer Join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> use the full join to
                      find a row in a table that does not have a matching row in
                      another table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Cross Join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> produce a Cartesian
                      product of the rows in two or more tables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Natural Join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> join two or more tables
                      using implicit join conditions based on the common column
                      names in the joined tables.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 8. Grouping Data
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Group By</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> divide rows of a result
                      set into groups and optionally apply an aggregate function
                      to each group.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Having</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> apply conditions to
                      groups, which allow you to filter groups.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 9. Set Operations
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Union</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> combine result sets of
                      multiple queries into a single result set.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Intersect</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> combine the result sets
                      of two or more queries and return a single result set
                      containing rows that appear in both result sets.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Except</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> return the rows from
                      the first query that do not appear in the output of the
                      second query.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 10. Grouping sets, Cubes, and Rollups
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Grouping Sets</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> generate multiple
                      grouping sets in reporting.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Cube</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> define multiple
                      grouping sets that include all possible combinations of
                      dimensions.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Rollup</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> generate reports that
                      contain totals and subtotals.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 11. Subquery
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Subquery</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> write a query nested
                      inside another query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Correlated Subquery</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to use a
                      correlated subquery to perform a query that depends on the
                      values of the current row being processed.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">ANY</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> retrieve data by
                      comparing a value with a set of values returned by a
                      subquery.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">ALL</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> query data by comparing
                      a value with a list of values returned by a subquery.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">EXISTS</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> check for the existence
                      of rows returned by a subquery.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 12. Common Table Expressions
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">PostgreSQL CTE</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> introduce you to
                      PostgreSQL common table expressions or CTEs.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Recursive query using CTEs</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> discuss the recursive
                      query and learn how to apply it in various contexts.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 13. Modifying Data
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Insert</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> guide you on how to
                      insert a single row into a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Insert multiple rows</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to insert
                      multiple rows into a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Update</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> update existing data in
                      a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Update join</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> update values in a
                      table based on values in another table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Delete</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> delete data in a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Upsert</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> insert or update data
                      if the new row that already exists in the table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">PostgreSQL Transactions</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to handle
                      transactions in PostgreSQL using BEGIN, COMMIT, and
                      ROLLBACK statements.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 14. Import & Export Data
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Import CSV file into Table</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to import
                      CSV file into a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">Export PostgreSQL Table to CSV file</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to export
                      tables to a CSV file.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>

            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 15. Conditional Expressions & Operators
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">CASE</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you how to form
                      conditional queries with CASE expression.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>COALESCE</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      return the first non-null argument. You can use it to
                      substitute NULL by a default value.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>NULLIF</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      return NULL if the first argument equals the second one.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>CAST</Link> <FontAwesomeIcon icon={faMinus} />{" "}
                      convert from one data type into another e.g., from a
                      string into an integer, from a string into a date.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 16. PostgreSQL Recipes
                </Typography>
                <List
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>How to compare two tables</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> describe how to compare
                      data in two tables in a database.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>How to delete duplicate rows in PostgreSQL</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> show you various ways
                      to delete duplicate rows from a table.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>How to generate a random number in a range</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> illustrate how to
                      generate a random number in a specific range.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>EXPLAIN statement</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> guide you on how to use
                      the EXPLAIN statement to return the execution plan of a
                      query.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link>PostgreSQL vs. MySQL</Link>{" "}
                      <FontAwesomeIcon icon={faMinus} /> compare PostgreSQL with
                      MySQL in terms of functionalities.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PostgreSQLTutorial;
