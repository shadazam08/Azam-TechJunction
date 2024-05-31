import React from "react";
import { Box, Link, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import customerTable from "../../../Assets/image/customerTable.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";

const ColumnAlias = () => {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Column Alias - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            PostgreSQL Column Alias
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "24px" }}>
            A beginner's guide to PostgreSQL column aliases.
          </Typography>
          <Typography align="justify" mt={2}>
            By using a column alias, you can assign a temporary name to a column
            or an expression in the select list of a{" "}
            <code className="codes">SELECT</code> statement. The alias remains
            in effect only while the query is being executed.
          </Typography>
          <Typography align="justify" mt={2}>
            The following syntax example illustrates how to use a column alias:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {`SELECT column_name AS alias_name
FROM table_name;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            Here, the <code className="codes">column_name</code> is assigned the
            alias <code className="codes">alias_name</code>. The optional{" "}
            <code className="codes">AS</code> keyword can be omitted, as
            illustrated below:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {`SELECT column_name alias_name
FROM table_name;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            The main purpose of column aliases is to make the headings of the
            output of a query more meaningful.
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "18px" }}>
            <strong>PostgreSQL column alias examples</strong>
          </Typography>
          <Typography align="justify" mt={2}>
            We’ll use the customer table from the{" "}
            <Link href={"/PostgreSQL/postgreSQL-sample-database"}>
              sample database
            </Link>{" "}
            to show you how to work with column aliases.
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
            }}
          >
            <img
              src={customerTable}
              className="h-full object-cover"
              style={{ width: "20%", marginTop: "1em" }}
              alt="Customer Table"
            />
          </Typography>
          <Typography component={"p"} align="justify" mt={2}>
            <Typography component={"span"} sx={{ color: "#4A148C" }}>
              <FontAwesomeIcon icon={fa1} />
              {")"}
            </Typography>{" "}
            <Typography component={"span"} sx={{ fontSize: "18px" }}>
              <strong>Assigning a column alias to a column example</strong>
            </Typography>
          </Typography>
          <Typography align="justify" mt={2}>
            The following query returns the first names and last names of all
            customers from the <code className={"codes"}>customer</code> table:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {`SELECT 
   first_name, 
   last_name
FROM customer;`}
                </SyntaxHighlighter>
                <Typography component={"span"} align="justify" mt={2}>
                  <strong>Output: </strong>
                </Typography>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {` first_name  |  last_name
-------------+--------------
 Jared       | Ely
 Mary        | Smith
 Patricia    | Johnson
 Linda       | Williams
 Barbara     | Jones
 Elizabeth   | Brown
 Jennifer    | Davis
 Maria       | Miller
 Susan       | Wilson
 Margaret    | Moore
 Dorothy     | Taylor
 Lisa        | Anderson
 Nancy       | Thomas
 Karen       | Jackson
 Betty       | White
 Helen       | Harris
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            If you want to rename the <code className="codes">last_name</code>{" "}
            heading, you can assign it a new name using a column alias like
            this:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {`SELECT 
   first_name, 
   last_name AS surname
FROM customer;`}
                </SyntaxHighlighter>
                <Typography component={"span"} align="justify" mt={2}>
                  Here, the query assigns{" "}
                  <code className={"codes"}>surname</code> as the alias to the{" "}
                  <code className={"codes"}>last_name</code> column:
                </Typography>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {` first_name  |   surname
-------------+--------------
 Jared       | Ely
 Mary        | Smith
 Patricia    | Johnson
 Linda       | Williams
 Barbara     | Jones
 Elizabeth   | Brown
 Jennifer    | Davis
 Maria       | Miller
 Susan       | Wilson
 Margaret    | Moore
 Dorothy     | Taylor
 Lisa        | Anderson
 Nancy       | Thomas
 Karen       | Jackson
 Betty       | White
 Helen       | Harris
-- More  --`}
                </SyntaxHighlighter>
                <Typography component={"span"} align="justify" mt={2}>
                  Another way to shorten it is by excluding the{" "}
                  <code className={"codes"}>AS</code> keyword, as follows:
                </Typography>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {`SELECT 
   first_name, 
   last_name surname
FROM customer;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter
                  language="sql"
                  style={gruvboxLight}
                  customStyle={{ borderRadius: "10px" }}
                >
                  {` first_name  |   surname
-------------+--------------
 Jared       | Ely
 Mary        | Smith
 Patricia    | Johnson
 Linda       | Williams
 Barbara     | Jones
 Elizabeth   | Brown
 Jennifer    | Davis
 Maria       | Miller
 Susan       | Wilson
 Margaret    | Moore
 Dorothy     | Taylor
 Lisa        | Anderson
 Nancy       | Thomas
 Karen       | Jackson
 Betty       | White
 Helen       | Harris
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ColumnAlias;
