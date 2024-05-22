import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2 } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import pgAdmin1 from "../../../Assets/image/pgAdmin/pgAdmin-1.png";
import pgAdmin2 from "../../../Assets/image/pgAdmin/pgAdmin-2.png";
import pgAdmin3 from "../../../Assets/image/pgAdmin/pgAdmin-3.png";
import pgAdmin4 from "../../../Assets/image/pgAdmin/pgAdmin-4.png";

const ConnectPostgreSQL = () => {
  return (
    <>
      <Helmet>
        <title>
          Connect to a PostgreSQL Database Server - Azam TechJunction
        </title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" align={"justify"} className="text-gray-500">
            Connect to a PostgreSQL Database Server
          </Typography>
          <Typography mt={2} align={"justify"}>
            When you{" "}
            <Link href={"/PostgreSQL/Install-PostgreSQL"} target={"_blank"}>
              installing the PostgreSQL database server
            </Link>
            , the PostgreSQL installer will also include several useful tools
            tailored for interacting with the PostgreSQL server.
          </Typography>
          <Typography align="justify" mt={2}>
            In this tutorial, you'll discover how to connect to the PostgreSQL
            server using the following tools:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <code className="codes">
                  <strong>psql</strong>
                </code>{" "}
                - a command-line utility for connecting to the PostgreSQL
                server.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <code className="codes">
                  <strong>pgAdmin</strong>
                </code>{" "}
                - a web-based tool designed for connecting to the PostgreSQL
                server.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} sx={{ fontSize: "24px" }}>
            <strong>
              <FontAwesomeIcon icon={fa1} />
              {")"} Connect to PostgreSQL database server using psql
            </strong>
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            <code className="codes">psql</code> is an interactive terminal
            program provided by PostgreSQL. It enables interaction with the
            PostgreSQL server, including executing SQL statements and managing
            database objects.
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            The steps below outline how to connect to the PostgreSQL database
            server using the <code className="codes">psql</code> program:
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            First, open the{" "}
            <code className="codes">Command Prompt{"(cmd)"}</code> on Windows.
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            Second, utilize the <code className="codes">psql</code> command to
            establish a connection with the PostgreSQL server:
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
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            In this command:
            <List>
              <ListItem>
                <Typography component={"span"} align="justify">
                  <code className="codes">
                    <strong>psql</strong>
                  </code>
                  : Executes the psql program.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"} align="justify">
                  <code className="codes">
                    <strong>-U postgres</strong>
                  </code>
                  : Indicates the user for connecting to the PostgreSQL server.
                  The{" "}
                  <code className="codes">
                    <strong>-U</strong>
                  </code>{" "}
                  option denotes the user. Note that it should be specified in
                  uppercase.
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography component={"div"} align={"justify"}>
            <Typography component={"span"} align="justify">
              The command will prompt you to enter the password for the{" "}
              <code className="codes">postgres</code> user.
            </Typography>
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
          <Typography component={"p"} align="justify" mt={1}>
            You need to enter the password for the{" "}
            <code className="codes">postgres</code> user and press Enter {"("}or
            the Return key{")"}. This password is the one you set during the
            PostgreSQL server installation.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            You need to enter the password for the{" "}
            <code className="codes">postgres</code> user and press Enter {"("}or
            the Return key{")"}. This password is the one you set during the
            PostgreSQL server installation.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            After entering the password correctly, you'll be connected to the
            PostgreSQL server. The command prompt will change to something like
            this:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{"postgres=#"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            In this prompt, <code className="codes">postgres</code> is the
            default database of a PostgreSQL server.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            Connecting to the PostgreSQL server will grant you a session. A
            session is long-lived, allowing you to perform multiple requests,
            such as executing commands, before eventually disconnecting.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            Third, execute the following command to retrieve the PostgreSQL
            version:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{"SELECT version();"}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Please ensure to conclude the statement with a{" "}
            <code className="codes">
              semicolon {"("};{")"}
            </code>
            . Upon pressing Enter, psql will return the current PostgreSQL
            version on your system.
          </Typography>
          <Typography component={"p"} align={"justify"} mt={2}>
            The output will look like:
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ padding: "0.2em", marginTop: "2px" }}
          >
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>
                  {`                          version
------------------------------------------------------------
 PostgreSQL 16.3, compiled by Visual C++ build 1938, 64-bit
(1 row)`}
                </code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            You can display the current database by executing the following
            command:
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ padding: "0.2em", marginTop: "2px" }}
          >
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{`SELECT current_database();`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Output:
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ padding: "0.2em", marginTop: "2px" }}
          >
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{` current_database
------------------
 postgres
(1 row)`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            To display the IP address and port of the current connection, you
            can execute the following command:
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ padding: "0.2em", marginTop: "2px" }}
          >
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{`SELECT 
  inet_server_addr(), 
  inet_server_port();`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} align={"justify"} mt={2}>
            Output:
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ padding: "0.2em", marginTop: "2px" }}
          >
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{` inet_server_addr | inet_server_port
------------------+------------------
 ::1              |             5432
(1 row)`}</code>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography align={"justify"} sx={{ fontSize: "24px" }}>
            <strong>
              <FontAwesomeIcon icon={fa2} />
              {")"} Connecting to the PostgreSQL Database Server Using pgAdmin
            </strong>
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            The following steps illustrate how to connect to a database using
            the <code className="codes">pgAdmin</code> application:
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            <Typography component={"spam"} align={"justify"}>
              The pgAdmin application will launch on Windows, as shown in the
              following picture:
            </Typography>
            <img
              src={pgAdmin1}
              className="h-full object-cover"
              style={{ width: "100%", marginTop: "0.6rem" }}
              alt="step 1"
            />
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            <Typography component={"span"} align={"justify"}>
              Second, click on the Servers node to expand it. By default,
              PostgreSQL includes a database named postgres:
            </Typography>
            <img
              src={pgAdmin2}
              className="h-full object-cover"
              style={{ width: "100%", marginTop: "0.6rem" }}
              alt="step 2"
            />
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            <Typography component={"span"} align={"justify"}>
              Third, open the query tool by selecting the menu item Tools {">"}{" "}
              Query Tool:
            </Typography>
            <img
              src={pgAdmin3}
              className="h-full object-cover"
              style={{ width: "100%", marginTop: "0.6rem" }}
              alt="step 3"
            />
          </Typography>
          <Typography
            component={"div"}
            align="justify"
            sx={{ marginTop: "2%" }}
          >
            <Typography component={"span"} align={"justify"}>
              Fourth, type your query into the{" "}
              <code className="codes">Query Editor</code> and click the{" "}
              <code className="codes">Execute button</code>. The result of the
              query will be displayed in the{" "}
              <code className="codes">Data Output</code> tab.
            </Typography>
            <img
              src={pgAdmin4}
              className="h-full object-cover"
              style={{ width: "100%", marginTop: "0.6rem" }}
              alt="step 3"
            />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ConnectPostgreSQL;
