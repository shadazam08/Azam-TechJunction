import React from "react";
import { Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const PostgreSQLSELECT = () => {
  return (
    <>
      <Helmet>
        <title>PostgreSQL SELECT - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography
            variant={"h4"}
            align={"justify"}
            className="text-gray-500"
          >
            PostgreSQL SELECT
          </Typography>
          <Typography align={"justify"} mt={2}>
            When working with databases, one of the most common tasks is to
            retrieve data from tables using the{" "}
            <code className="codes">SELECT</code> statement.
          </Typography>
          <Typography align={"justify"} mt={2}>
            The <code className="codes">SELECT</code> statement in PostgreSQL is
            versatile and encompasses various clauses, allowing for flexible
            query formation.
          </Typography>
          <Typography align={"justify"} mt={2}>
            Because of its complexity, we'll break down the{" "}
            <code className="codes">SELECT</code> statement into several shorter
            tutorials, making it easier to learn about each clause more quickly.
          </Typography>
          <Typography align={"justify"} mt={2}>
            The <code className="codes">SELECT</code> statement includes the
            following clauses:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Select distinct rows using{" "}
                <code className="codes">DISTINCT</code> operator.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Sort rows using <code className="codes">ORDER BY</code> clause.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Filter rows using <code className="codes">WHERE</code> clause.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Select a subset of rows from a table using{" "}
                <code className="codes">LIMIT</code> or{" "}
                <code className="codes">FETCH</code> clause.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Group rows into groups using{" "}
                <code className="codes">GROUP BY</code> clause.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Filter groups using <code className="codes">HAVING</code>{" "}
                clause.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Join with other tables using{" "}
                <code className="codes">joins</code> such as{" "}
                <code className="codes">INNER JOIN</code>,{" "}
                <code className="codes">LEFT JOIN</code>,{" "}
                <code className="codes">FULL OUTER JOIN</code>,{" "}
                <code className="codes">CROSS JOIN</code> clauses.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Perform set operations using{" "}
                <code className="codes">UNION</code>,{" "}
                <code className="codes">INTERSECT</code>, and{" "}
                <code className="codes">EXCEPT</code>.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} mt={2}>
            In this tutorial, we will concentrate on the SELECT and FROM
            clauses.
          </Typography>
          <Typography align={"justify"} sx={{ fontSize: "24px" }} mt={2}>
            <strong>Syntax of the PostgreSQL SELECT statement</strong>
          </Typography>
          <Typography align={"justify"} mt={2}>
            The syntax of the <code className="codes">SELECT</code> statement is
            illustrated below:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography
                component={"pre"}
                className="language-sql"
                sx={{ borderRadius: "10px" }}
              >
                <code>{`SELECT
   select_list
FROM
   table_name;`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            In this syntax:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                First, specify a select list, which can be a single column or a
                list of columns from which you want to retrieve data. When
                listing multiple columns, separate them with a comma{" "}
                <code className="codes">(,)</code>. To select data from all
                columns in the table, use an asterisk{" "}
                <code className="codes">(*)</code> as a shorthand. The select
                list can also include expressions or literal values.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={faCircleRight} size="sm" />
                </Typography>{" "}
                Second, specify the name of the table from which you want to
                query data after the <code className="codes">FROM</code>{" "}
                keyword.
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"} mt={2}>
            The <code className="codes">FROM</code> clause is optional. If
            you're not querying data from any table, you can omit the{" "}
            <code className="codes">FROM</code> clause in the{" "}
            <code className="codes">SELECT</code> statement.
          </Typography>
          <Typography align={"justify"} sx={{ fontSize: "24px" }} mt={2}>
            <strong>
              PostgreSQL <code className="codes">SELECT</code> examples
            </strong>
          </Typography>
          <Typography align={"justify"} mt={2}>
            let's explore some examples of using the{" "}
            <code className={"codes"}>SELECT</code> statement in SQL. The{" "}
            <code className={"codes"}>SELECT</code> statement is used to query
            data from a database. Here are some common examples:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={fa1} />
                  {")"}
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  <strong>
                    Basic <code className="codes">SELECT</code> Statement
                  </strong>
                </Typography>
                <Typography component={"p"} align="justify" mt={2}>
                  To retrieve all columns from a table named{" "}
                  <code className="codes">customer</code>:
                </Typography>
              </Typography>
            </ListItem>
            <Grid container spacing={2} sx={{ padding: "0.2em" }}>
              <Grid xs={12}>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`SSELECT * FROM customer;`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  <strong>Output</strong>
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{` customer_id | store_id | first_name  |  last_name   |                  email                   | address_id | activebool | create_date |       last_update       | active
-------------+----------+-------------+--------------+------------------------------------------+------------+------------+-------------+-------------------------+--------
         524 |        1 | Jared       | Ely          | jared.ely@sakilacustomer.org             |        530 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           1 |        1 | Mary        | Smith        | mary.smith@sakilacustomer.org            |          5 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           2 |        1 | Patricia    | Johnson      | patricia.johnson@sakilacustomer.org      |          6 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           3 |        1 | Linda       | Williams     | linda.williams@sakilacustomer.org        |          7 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           4 |        2 | Barbara     | Jones        | barbara.jones@sakilacustomer.org         |          8 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           5 |        1 | Elizabeth   | Brown        | elizabeth.brown@sakilacustomer.org       |          9 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
           6 |        2 | Jennifer    | Davis        | jennifer.davis@sakilacustomer.org        |         10 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1
-- More  --`}</code>
                </Typography>
              </Grid>
            </Grid>
            <Typography align="justify" mt={2}>
              In this query, the asterisk <code className="codes">{"(*)"}</code>{" "}
              in the <code className="codes">SELECT</code> clause is used to
              specify that all columns should be included.
            </Typography>
            <Typography align="justify" mt={2}>
              By using the asterisk <code className="codes">{"(*)"}</code> in
              the <code className="codes">SELECT</code> clause, we can reduce
              the length of the query without listing all columns explicitly.
            </Typography>
            <Typography align="justify" mt={2}>
              That said, using the asterisk{" "}
              <code className="codes">{"(*)"}</code> in the{" "}
              <code className="codes">SELECT</code> statement is regarded as a
              bad practice when including SQL statements in application code,
              such as <code className="codes">Python</code>,{" "}
              <code className="codes">Java</code>, or{" "}
              <code className="codes">PHP</code>, for the following reasons:
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"} align="justify">
                  <Typography
                    component={"span"}
                    align="justify"
                    sx={{ color: "#4A148C" }}
                  >
                    <FontAwesomeIcon icon={faCircleRight} size="sm" />
                  </Typography>{" "}
                  <Typography component={"span"} align={"justify"}>
                    <strong>Database performance: </strong>
                  </Typography>
                  <Typography component={"span"} align="justify">
                    When a table has a large number of columns and a significant
                    amount of data, using the asterisk {"("}{" "}
                    <code className="codes">{"*"}</code> {")"} in the{" "}
                    <code className="codes">SELECT</code> statement will result
                    in selecting all columns, possibly leading to the retrieval
                    of more data than the application needs.
                  </Typography>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"} align="justify">
                  <Typography
                    component={"span"}
                    align="justify"
                    sx={{ color: "#4A148C" }}
                  >
                    <FontAwesomeIcon icon={faCircleRight} size="sm" />
                  </Typography>{" "}
                  <Typography component={"span"} align={"justify"}>
                    <strong>Application performance: </strong>
                  </Typography>
                  <Typography component={"span"} align="justify">
                    Unneeded data retrieval from the database boosts traffic
                    between the PostgreSQL server and the application server,
                    which can slow down response times and reduce your
                    applications' scalability.
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </List>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={fa2} />
                  {")"}
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  <strong>Selecting Specific Columns</strong>
                </Typography>
                <Typography component={"p"} align="justify" mt={2}>
                  To retrieve only specific columns, such as{" "}
                  <code className="codes">first_name</code> and{" "}
                  <code className="codes">last_name</code> from the{" "}
                  <code className="codes">customer</code> table:
                </Typography>
              </Typography>
            </ListItem>
            <Grid container spacing={2} sx={{ padding: "0.2em" }}>
              <Grid xs={12}>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`SELECT first_name, last_name FROM customer;`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  <strong>Output</strong>
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`  first_name  |  last_name
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
-- More  --`}</code>
                </Typography>
              </Grid>
            </Grid>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={fa3} />
                  {")"}
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  <strong>SELECT statement with expressions example</strong>
                </Typography>
                <Typography component={"p"} align="justify" mt={2}>
                  This example uses the <code className="codes"> SELECT </code>{" "}
                  statement to obtain the full names and emails of all customers
                  from the <code className="codes"> customer </code> table:
                </Typography>
              </Typography>
            </ListItem>
            <Grid container spacing={2} sx={{ padding: "0.2em" }}>
              <Grid xs={12}>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`SELECT 
   first_name || ' ' || last_name,
   email
FROM 
   customer;`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  <strong>Output</strong>
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`       ?column?        |                  email
-----------------------+------------------------------------------
 Jared Ely             | jared.ely@sakilacustomer.org
 Mary Smith            | mary.smith@sakilacustomer.org
 Patricia Johnson      | patricia.johnson@sakilacustomer.org
 Linda Williams        | linda.williams@sakilacustomer.org
 Barbara Jones         | barbara.jones@sakilacustomer.org
 Elizabeth Brown       | elizabeth.brown@sakilacustomer.org
 Jennifer Davis        | jennifer.davis@sakilacustomer.org
 Maria Miller          | maria.miller@sakilacustomer.org
 Susan Wilson          | susan.wilson@sakilacustomer.org
 Margaret Moore        | margaret.moore@sakilacustomer.org
 Dorothy Taylor        | dorothy.taylor@sakilacustomer.org
 Lisa Anderson         | lisa.anderson@sakilacustomer.org
 Nancy Thomas          | nancy.thomas@sakilacustomer.org
 Karen Jackson         | karen.jackson@sakilacustomer.org
 Betty White           | betty.white@sakilacustomer.org
 Helen Harris          | helen.harris@sakilacustomer.org
-- More  --`}</code>
                </Typography>
              </Grid>
            </Grid>
            <Typography align="justify" mt={2}>
              This example demonstrates the use of the concatenation operator{" "}
              {"("} <code className="codes">||</code> {")"} to merge the first
              name, space, and last name of each customer.
            </Typography>
            <Typography align="justify" mt={2}>
              In the output, the first column is labeled as{" "}
              <code className="codes">"?column?"</code> instead of a descriptive
              name. To assign a temporary name to a column in the query, you can
              utilize a column alias.
            </Typography>
            <Grid container spacing={2} sx={{ padding: "0.2em" }}>
              <Grid xs={12}>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`expression AS column_lias`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  Given the optional nature of the{" "}
                  <code className="codes">AS</code> keyword, you can adopt a
                  shorter syntax:
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`expression column_lias`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  As an example, you can assign the column alias{" "}
                  <code className="codes">full_name</code> to the first column
                  of the query in the following manner:
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`SELECT 
   first_name || ' ' || last_name full_name,
   email
FROM 
   customer;`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  <strong>Output:</strong>
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`       full_name       |                  email
-----------------------+------------------------------------------
 Jared Ely             | jared.ely@sakilacustomer.org
 Mary Smith            | mary.smith@sakilacustomer.org
 Patricia Johnson      | patricia.johnson@sakilacustomer.org
 Linda Williams        | linda.williams@sakilacustomer.org
 Barbara Jones         | barbara.jones@sakilacustomer.org
 Elizabeth Brown       | elizabeth.brown@sakilacustomer.org
 Jennifer Davis        | jennifer.davis@sakilacustomer.org
 Maria Miller          | maria.miller@sakilacustomer.org
 Susan Wilson          | susan.wilson@sakilacustomer.org
 Margaret Moore        | margaret.moore@sakilacustomer.org
 Dorothy Taylor        | dorothy.taylor@sakilacustomer.org
 Lisa Anderson         | lisa.anderson@sakilacustomer.org
 Nancy Thomas          | nancy.thomas@sakilacustomer.org
 Karen Jackson         | karen.jackson@sakilacustomer.org
 Betty White           | betty.white@sakilacustomer.org
 Helen Harris          | helen.harris@sakilacustomer.org
-- More  --`}</code>
                </Typography>
              </Grid>
            </Grid>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography
                  component={"span"}
                  align="justify"
                  sx={{ color: "#4A148C" }}
                >
                  <FontAwesomeIcon icon={fa4} />
                  {")"}
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  <strong>
                    Using PostgreSQL SELECT statement without a FROM clause
                  </strong>
                </Typography>
                <Typography component={"p"} align="justify" mt={2}>
                  With the <code className="codes">FROM</code> clause being
                  optional in the <code className="codes">SELECT</code>{" "}
                  statement, you can choose to omit it for queries that don't
                  involve selecting data from a specific table.
                </Typography>
                <Typography component={"p"} align="justify" mt={2}>
                  It's customary to use the{" "}
                  <code className="codes">SELECT</code> clause with a function
                  to retrieve the outcome generated by the function. For
                  example:
                </Typography>
              </Typography>
            </ListItem>
            <Grid container spacing={2} sx={{ padding: "0.2em" }}>
              <Grid xs={12}>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`SELECT NOW();`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  <strong>Output</strong>
                </Typography>
                <Typography
                  component={"pre"}
                  className="language-sql"
                  sx={{ borderRadius: "10px" }}
                >
                  <code>{`               now
---------------------------------
 2024-05-23 14:15:09.67817+05:30
(1 row)`}</code>
                </Typography>
                <Typography component={"span"} align={"justify"}>
                  In this instance, we integrate the{" "}
                  <code className="codes">{"NOW()"}</code> function into the{" "}
                  <code className="codes">SELECT</code> statement to fetch the
                  current date and time directly from the PostgreSQL server.
                </Typography>
              </Grid>
            </Grid>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default PostgreSQLSELECT;
