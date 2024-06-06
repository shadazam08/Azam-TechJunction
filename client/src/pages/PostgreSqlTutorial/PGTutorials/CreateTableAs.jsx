import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2 } from "@fortawesome/free-solid-svg-icons";
import filmCategoryTable from "../../../Assets/image/filmCategoryTable.png";

const CreateTableAs = () => {
  return (
    <>
      <Helmet>
        <title>Create Table As - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className={"changeWidth"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            {`CREATE TABLE AS`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Introduction to PostgreSQL`} <code className="codes">CREATE TABLE AS</code> {`Statement`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`The`} <code className={"codes"}>CREATE TABLE AS</code> {`statement`} <Link href={"/PostgreSQL/create-table"}>creates a new table</Link>{" "}
            {`and fills it with the data returned by a query. The following shows the syntax of the`} <code className={"codes"}>CREATE TABLE AS</code>{" "}
            {`statement:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE new_table_name
AS query;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            {`In this syntax:`}
          </Typography>
          <List>
            <ListItem>
              <Typography align={"justify"}>
                <FontAwesomeIcon icon={fa1} size="sm" />
                {`)`} {`First, specify the new table name after the`} <code className={"codes"}>CREATE TABLE</code> {`clause.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"}>
                <FontAwesomeIcon icon={fa2} size="sm" />
                {`)`} {`Second, provide a query whose result set is added to the new table after the`} <code className={"codes"}>AS</code>{" "}
                {`keyword.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align={"justify"}>
            {`The`} <code className={"codes"}>TEMPORARY</code> {`or`} <code className={"codes"}>TEMP</code> {`keyword allows you to create a`}{" "}
            <Link href={""}>temporary table</Link>
            {`:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TEMP TABLE new_table_name 
AS query;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            {`The`} <code className={"codes"}>UNLOGGED</code> {`keyword allows the new table to be created as an unlogged table:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE UNLOGGED TABLE new_table_name
AS query;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={1}>
            {`The columns of the new table will have the names and data types associated with the output columns of the`}{" "}
            <code className={"codes"}>SELECT</code> {`clause.`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`If you want the table columns to have different names, you can specify the new table columns after the new table name:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE new_table_name ( column_name_list)
AS query;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={1}>
            {`If you want to avoid an error by creating a new table that already exists, you can use the`}{" "}
            <code className={"codes"}>IF NOT EXISTS</code> {`option as follows:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE IF NOT EXISTS new_table_name
AS query;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`PostgreSQL`} <code className="codes">CREATE TABLE AS</code> {`statement examples`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`We will use the`} <code className={"codes"}>film</code> {`and`} <code className="codes">film_category</code> {`table from the`}{" "}
            <Link href={"/PostgreSQL/postgreSQL-sample-database"}>sample database</Link> {`for the demonstration.`}
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
            }}
          >
            <img src={filmCategoryTable} className="h-full object-cover" style={{ width: "60%", marginTop: "1em" }} alt="Film Table" />
          </Typography>
          <Typography align={"justify"} mt={4}>
            {`The following example uses the`} <code className={"codes"}>CREATE TABLE AS</code>{" "}
            {`statement to create a new table that contains the films whose category is 1:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE action_film 
AS
SELECT
    film_id,
    title,
    release_year,
    length,
    rating
FROM
    film
INNER JOIN film_category USING (film_id)
WHERE
    category_id = 1;`}
                </SyntaxHighlighter>
                <Typography align={"justify"} mt={2}>
                  {`To verify the table creation, you can query data from the`} <code className={"codes"}>action_film</code> {`table:`}
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT * FROM action_film
ORDER BY title;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` film_id |          title          | release_year | length | rating
---------+-------------------------+--------------+--------+--------
      19 | Amadeus Holy            |         2006 |    113 | PG
      21 | American Circus         |         2006 |    129 | R
      29 | Antitrust Tomatoes      |         2006 |    168 | NC-17
      38 | Ark Ridgemont           |         2006 |     68 | NC-17
      56 | Barefoot Manchurian     |         2006 |    129 | G
      67 | Berets Agent            |         2006 |     77 | PG-13
      97 | Bride Intrigue          |         2006 |     56 | G
     105 | Bull Shawshank          |         2006 |    125 | NC-17
     111 | Caddyshack Jedi         |         2006 |     52 | NC-17
     115 | Campus Remember         |         2006 |    167 | R
     126 | Casualties Encino       |         2006 |    179 | G
     130 | Celebrity Horn          |         2006 |    110 | PG-13
     162 | Clueless Bucket         |         2006 |     95 | R
     194 | Crow Grease             |         2006 |    104 | PG
     205 | Dances None             |         2006 |     58 | NC-17
     210 | Darko Dorado            |         2006 |    130 | NC-17
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            {`To check the structure of the`} <code className={"codes"}>action_film</code> {`you can use the following command in the psql tool:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`\\d action_film;`}
                </SyntaxHighlighter>
                <Typography align={"justify"} mt={2}>
                  {`It returns the following output:`}
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`                       Table "public.action_film"
    Column    |          Type          | Collation | Nullable | Default
--------------+------------------------+-----------+----------+---------
 film_id      | integer                |           |          |
 title        | character varying(255) |           |          |
 release_year | year                   |           |          |
 length       | smallint               |           |          |
 rating       | mpaa_rating            |           |          |`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={1}>
            {`As clearly shown in the output, the names and data types of the`} <code className={"codes"}>action_film</code>{" "}
            {`table are derived from the columns of the`} <code className="codes">SELECT</code> {`clause.`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`If the`} <code className={"codes"}>SELECT</code>{" "}
            {`clause contains expressions, it is a good practice to override the columns, for example:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE IF NOT EXISTS film_rating (rating, film_count) 
AS 
SELECT
    rating,
    COUNT (film_id)
FROM
    film
GROUP BY
    rating;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={1}>
            {`This example statement created a new table`} <code className={"codes"}>film_rating</code>{" "}
            {` and filled it with the summary data from the`} <code className={"codes"}>film</code>{" "}
            {`table. It explicitly specified the column names for the new table instead of using the column names from the`}{" "}
            <code className={"codes"}>SELECT</code> {`clause`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`To check the structure of the`} <code className={"codes"}>film_rating</code> {`table, you use the following command in psql tool:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`\\d film_rating`}
                </SyntaxHighlighter>
                <Typography align={"justify"} mt={1}>
                  {`The following is the output:`}
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`                Table "public.film_rating"
   Column   |    Type     | Collation | Nullable | Default
------------+-------------+-----------+----------+---------
 rating     | mpaa_rating |           |          |
 film_count | bigint      |           |          |
`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} mt={2}>
            {`Note that the`} <code className={"codes"}>CREATE TABLE AS</code> {`statement is similar to the`}{" "}
            <code className={"codes"}>
              <Link href={"/PostgreSQL/select-into"}>SELECT INTO</Link>
            </code>{" "}
            {`statement, but the`} <code className={"codes"}>CREATE TABLE AS</code>{" "}
            {`statement is preferred because it is not confused with other uses of the`} <code className={"codes"}>SELECT INTO</code>{" "}
            {`syntax in PL/pgSQL. In addition, the`} <code className={"codes"}>CREATE TABLE AS</code>{" "}
            {`statement provides a superset of the functionality offered by the`} <code className={"codes"}>SELECT INTO</code> {`statement.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CreateTableAs;
