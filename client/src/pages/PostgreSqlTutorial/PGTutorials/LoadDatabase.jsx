import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
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
                <Typography variant={"span"} align={"justify"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                A PostgreSQL database server.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography variant={"span"} align={"justify"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                <Link href={"/PostgreSQL/PostgreSQL-sample-database"} target={"_blank"}>
                  A sample PostgreSQL database
                </Link>{" "}
                named <code className="codes">dvdrental</code>.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} sx={{ fontSize: "24px" }}>
            <strong>
              Use the <code className="codes">psql</code> and <code className={"codes"}>pg_restore</code> tool to load the sample database.
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            To create a database and load data from an archive file, you should follow these steps:
          </Typography>
          <List>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography variant={"span"} align={"justify"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                First, connect to the PostgreSQL database server using either <code className="codes">psql</code> or{" "}
                <code className="codes">pgAdmin</code>.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography variant={"span"} align={"justify"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                Second, create a blank database named <code className={"codes"}>dvdrental</code>.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={"span"} align={"justify"}>
                <Typography variant={"span"} align={"justify"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                Third, use <code className={"codes"}>pg_restore</code> to load data from the sample database file into the dvdrental database.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} sx={{ fontSize: "24px" }} mt={2}>
            <strong>
              <FontAwesomeIcon icon={fa1} />
              {")"} Establish the dvdrental database.
            </strong>
          </Typography>
          <Typography align={"justify"} mt={2}>
            Begin by opening the Command Prompt on Windows or Terminal on Unix-like systems. Then, connect to the PostgreSQL server using the psql
            tool.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"psql -U postgres"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            You'll be prompted to input a password for the postgres user.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"Password for user postgres:"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            Once you've entered the password correctly, you'll establish a connection to the PostgreSQL server.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            The command prompt will change to something like this:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"postgres=#"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Second, use the <code className="codes">CREATE DATABASE</code> statement to create a new database named{" "}
            <code className="codes">dvdrental</code>:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"CREATE DATABASE dvdrental;"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Output:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"CREATE DATABASE"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Third, verify the creation of the database by using the <code className="codes">\l</code> command. This command will list all the
            databases on the PostgreSQL server:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{"\\l"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Output:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`                                                              List of databases
   Name    |  Owner   | Encoding | Locale Provider |      Collate       |       Ctype        | ICU Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+--------------------+--------------------+------------+-----------+-----------------------
 dvdrental | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |            |           |
 postgres  | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |            |           |
 template0 | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |            |           | =c/postgres          +
           |          |          |                 |                    |                    |            |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |            |           | =c/postgres          +
           |          |          |                 |                    |                    |            |           | postgres=CTc/postgres
(12 rows)
-- More  --`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            The output includes <code className="codes">dvdrental</code> in the list, indicating that the <code className="codes">dvdrental</code>{" "}
            database has been successfully created.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            Note that databases like <code className={"codes"}>postgres</code>, <code className={"codes"}>template0</code>, and{" "}
            <code className={"codes"}>template1</code> are system databases.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            Fourth, disconnect from the PostgreSQL server and exit <code className={"codes"}>psql</code> by using the{" "}
            <code className={"codes"}>\q</code> or <code className={"codes"}>\exit</code> command:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`\\q

\\exit`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} sx={{ fontSize: "24px" }} mt={2}>
            <strong>
              <FontAwesomeIcon icon={fa2} />
              {")"} Restore the sample database from a <code className="codes">tar</code> archive
            </strong>
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            Fifth, download the sample database <code className="codes">{"(dvdrental.zip)"}</code> and extract the tar file to the directory such as{" "}
            <code className="codes">C:\dvdrental\dvdrental.tar</code> on Windows.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            In this command:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify" sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                The <code className="codes">-U postgres</code> instructs <code className="codes">pg_restore</code> to connect the PostgreSQL server
                using the <code className="codes">postgres</code> user.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify" sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                The <code className="codes">-d dvdrental</code> specifies the target database to load.
              </Typography>
            </ListItem>
          </List>
          <Typography component={"p"} align={"justify"} mt={2}>
            It’ll prompt you to enter the password for the <code className="codes">postgres</code> user. Enter the password for the{" "}
            <code className="codes">postgres</code> user and press the Enter (or Return key):
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`pg_restore -U postgres -d dvdrental D:\\postgres\\dvdrental.tar`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`Password for user postgres:`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            It’ll take about seconds to load data stored in the <code className="codes">dvdrental.tar</code> file into the{" "}
            <code className="codes">dvdrental</code> database.
          </Typography>
          <Typography align={"justify"} sx={{ fontSize: "24px" }} mt={2}>
            <strong>
              <FontAwesomeIcon icon={fa3} />
              {")"} Confirm the existence and integrity of the sample database.
            </strong>
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            First, connect to the PostgreSQL server using the <code className="codes">psql</code> command:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`psql -U postgres`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Second, switch the current database to <code className="codes">dvdrental</code>:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`\\c dvdrental`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            The command prompt will change to the following:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`dvdrental=#`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Third, display all tables in the <code className="codes">dvdrental</code> database:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`\\dt`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Output:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-sql" sx={{ borderRadius: "10px" }}>
                <code>{`             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | actor         | table | postgres
 public | address       | table | postgres
 public | category      | table | postgres
 public | city          | table | postgres
 public | country       | table | postgres
 public | customer      | table | postgres
 public | film          | table | postgres
 public | film_actor    | table | postgres
 public | film_category | table | postgres
 public | inventory     | table | postgres
 public | language      | table | postgres
 public | payment       | table | postgres
 public | rental        | table | postgres
 public | staff         | table | postgres
 public | store         | table | postgres
(15 rows)`}</code>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default LoadDatabase;
