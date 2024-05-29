import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import customerTable from "../../../Assets/image/customerTable.png";

const OrderBy = () => {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Order By - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            PostgreSQL ORDER BY
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "18px" }}>
            <strong>Introduction to PostgreSQL ORDER BY Clause</strong>
          </Typography>
          <Typography align="justify" mt={2}>
            The <code className="codes">ORDER BY</code> clause in PostgreSQL is used to sort the result set of a query by one or more columns. Sorting
            is essential in database operations as it helps organize the data in a meaningful order, making it easier to read and analyze.
          </Typography>
          <Typography align="justify" mt={2}>
            The syntax of the <code className="codes">ORDER BY</code> clause is illustrated as follows:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT
    column1,
    column2, ...
FROM
    table_name
ORDER BY 
    column1 [ASC | DESC],
    column2 [ASC | DESC], ...;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            In this syntax:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify" sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                First, indicate the column or expression to sort by following the <code className="codes">ORDER BY</code> keywords. If sorting by
                multiple columns or expressions, separate each with a comma <code className="codes">{"(,)"}</code>.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify" sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Typography>{" "}
                Then, specify <code className="codes">ASC</code> for ascending order and <code className="codes">DESC</code> for descending order. If
                you don't specify either, the <code className="codes">ORDER BY</code> clause defaults to ascending order.
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2}>
            Consider the following examples to understand how the <code className="codes">ORDER BY</code> clause works in PostgreSQL.
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.5em" }}>
            <strong>
              some examples of using the <code className="codes">ORDER BY</code> clause
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            We’ll use the customer table from the <Link href={"/PostgreSQL/postgreSQL-sample-database"}>sample database</Link> for the demonstration.
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"} mt={1}>
                <img src={customerTable} className="h-full object-cover" style={{ width: "100%" }} alt="Customer Table" />
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.5em" }}>
            <strong>
              <FontAwesomeIcon icon={fa1} />
              {")"} Sorting rows by one column using the <code className="codes">ORDER BY</code> clause.
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            This query employs the <code className="codes">ORDER BY</code> clause to arrange customers by their first names in ascending order.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  first_name, 
  last_name 
FROM 
  customer 
ORDER BY 
  first_name ASC;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` first_name  |  last_name
-------------+--------------
 Aaron       | Selby
 Adam        | Gooch
 Adrian      | Clary
 Agnes       | Bishop
 Alan        | Kahn
 Albert      | Crouse
 Alberto     | Henning
 Alex        | Gresham
 Alexander   | Fennell
 Alfred      | Casillas
 Alfredo     | Mcadams
 Alice       | Stewart
 Alicia      | Mills
 Allan       | Cornish
 Allen       | Butterfield
 Allison     | Stanley
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            Given that <code className="codes">ASC</code> is the default option, you can exclude it in the <code className="codes">ORDER</code> BY
            clause, like this:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  first_name, 
  last_name 
FROM 
  customer 
ORDER BY 
  first_name;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` first_name  |  last_name
-------------+--------------
 Aaron       | Selby
 Adam        | Gooch
 Adrian      | Clary
 Agnes       | Bishop
 Alan        | Kahn
 Albert      | Crouse
 Alberto     | Henning
 Alex        | Gresham
 Alexander   | Fennell
 Alfred      | Casillas
 Alfredo     | Mcadams
 Alice       | Stewart
 Alicia      | Mills
 Allan       | Cornish
 Allen       | Butterfield
 Allison     | Stanley
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.5em" }}>
            <strong>
              <FontAwesomeIcon icon={fa2} />
              {")"} Sorting rows by one column in descending order using the <code className="codes">ORDER BY</code> clause.
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            This statement retrieves the first name and last name from the <code className="codes">customer</code> table, arranging the rows in
            descending order based on the values in the last name column:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  first_name, 
  last_name 
FROM 
  customer 
ORDER BY 
  last_name DESC;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` first_name  |  last_name
-------------+--------------
 Cynthia     | Young
 Marvin      | Yee
 Luis        | Yanez
 Brian       | Wyman
 Brenda      | Wright
 Tyler       | Wren
 Florence    | Woods
 Lori        | Wood
 Virgil      | Wofford
 Darren      | Windham
 Susan       | Wilson
 Bernice     | Willis
 Gina        | Williamson
 Linda       | Williams
 Jon         | Wiles
 Roy         | Whiting
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.5em" }}>
            <strong>
              <FontAwesomeIcon icon={fa3} />
              {")"} Utilizing the <code className="codes">ORDER BY</code> clause to sort rows based on multiple columns
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            This statement retrieves the first name and last name from the <code className="codes">customer</code> table and arranges the rows by the
            first name in ascending order and the last name in descending order.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  first_name, 
  last_name 
FROM 
  customer 
ORDER BY 
  first_name ASC, 
  last_name DESC;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` first_name  |  last_name
-------------+--------------
 Aaron       | Selby
 Adam        | Gooch
 Adrian      | Clary
 Agnes       | Bishop
 Alan        | Kahn
 Albert      | Crouse
 Alberto     | Henning
 Alex        | Gresham
 Alexander   | Fennell
 Alfred      | Casillas
 Alfredo     | Mcadams
 Alice       | Stewart
 Alicia      | Mills
 Allan       | Cornish
 Allen       | Butterfield
 Allison     | Stanley
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.5em" }}>
            <strong>
              <FontAwesomeIcon icon={fa4} />
              {")"} Utilizing the <code className="codes">ORDER BY</code> clause to sort rows based on expressions.
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            The <code className="codes">{"LENGTH()"}</code> function takes a string as input and returns the length of the string.
          </Typography>
          <Typography align="justify" mt={2}>
            This statement retrieves the first names along with their respective lengths and arranges the rows based on the lengths of the first
            names.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  first_name, 
  LENGTH(first_name) len 
FROM 
  customer 
ORDER BY 
  len DESC;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` first_name  | len
-------------+-----
 Christopher |  11
 Jacqueline  |  10
 Constance   |   9
 Katherine   |   9
 Nathaniel   |   9
 Catherine   |   9
 Christian   |   9
 Christine   |   9
 Charlotte   |   9
 Geraldine   |   9
 Elizabeth   |   9
 Priscilla   |   9
 Josephine   |   9
 Frederick   |   9
 Alexander   |   9
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            Since the <code className="codes">ORDER BY</code> clause is evaluated after the <code className="codes">SELECT</code> clause, the column
            alias <code className="codes">'len'</code> is available and can be used within the <code className="codes">ORDER BY</code> clause.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OrderBy;
