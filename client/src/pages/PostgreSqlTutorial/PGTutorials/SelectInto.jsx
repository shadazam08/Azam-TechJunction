import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import filmTable from "../../../Assets/image/filmTable.png";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2 } from "@fortawesome/free-solid-svg-icons";

const SelectInto = () => {
  return (
    <>
      <Helmet>
        <title>Select Into - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className={"changeWidth"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            {`SELECT INTO`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Introduction to PostgreSQL`} <code className="codes">SELECT INTO</code> {`Statement`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`The`} <code className={"codes"}>SELECT INTO</code>{" "}
            {`is a SQL command used to create a new table and populate it with the result set of a query in PostgreSQL. This command is handy when you need to make a copy of an existing table or subset of a table with specific data.`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`The syntax for `} <code className="codes">SELECT INTO</code> {`is:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  select_list
INTO [ TEMPORARY | TEMP ] [ TABLE ] new_table_name 
FROM 
  table_name 
WHERE condition;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <List>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`To create a new table with the structure and data derived from a result set, you specify the new table name after the`}{" "}
                <code className={"codes"}>INTO</code> {`keyword.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`The`} <code className={"codes"}>TEMP</code> {`or`} <code className={"codes"}>TEMPORARY</code>{" "}
                {`keyword is optional; it allows you to create a temporary table instead.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`The`} <code className={"codes"}>TABLE</code> {`keyword is optional, which enhances the clarity of the statement.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`The`} <code className={"codes"}>WHERE</code>{" "}
                {`clause allows you to specify a condition that determines which rows from the original tables should be filled into the new table.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`Besides the`} <code className={"codes"}>WHERE</code> {`clause, you can use other clauses in the`}{" "}
                <code className="codes">SELECT</code> {`statement for the`} <code className="codes">SELECT INTO</code> {`statement such as`}{" "}
                <code className="codes">INNER JOIN</code>
                {`,`} <code className="codes">LEFT JOIN</code>
                {`,`} <code className="codes">GROUP BY</code>
                {`, and`} <code className="codes">HAVING</code>
                {`.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography align={"justify"} mt={1}>
                {`Note that you cannot use the`} <code className="codes">SELECT INTO</code> {`statement in`} <code className="codes">PL/pgSQL</code>{" "}
                {`because it interprets the`} <code className="codes">INTO</code> {`clause differently. In this case, you can use the`}{" "}
                <code className="codes">CREATE TABLE AS</code> {`statement which provides more functionality than the`}{" "}
                <code className="codes">SELECT INTO</code> {`statement.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`PostgreSQL`} <code className="codes">SELECT INTO</code> {`examples:`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`We will use the`} <code className="codes">film</code> {`table from the`}{" "}
            <Link href={"/PostgreSQL/PostgreSQL-sample-database"}>sample database</Link> {`for the demonstration.`}
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
            }}
          >
            <img src={filmTable} className="h-full object-cover" style={{ width: "30%", marginTop: "1em" }} alt="Film Table" />
          </Typography>
          <Typography align={"justify"} sx={{ fontSize: "1.4em", fontWeight: "bold" }} mt={4}>
            <FontAwesomeIcon icon={fa1} />
            {")"} {`Basic PostgreSQL`} <code className="codes">SELECT INTO</code> {`statement example`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`The following statement uses the`} <code className="codes">SELECT INTO</code> {`statement to create a new table called`}{" "}
            <code className="codes">film_r</code> {`that contains films with the rating`} <code className="codes">R</code>{" "}
            {`and rental duration 5 days from the`} <code className="codes">film</code> {`table.`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT
    film_id,
    title,
    rental_rate
INTO TABLE film_r
FROM
    film
WHERE
    rating = 'R'
AND rental_duration = 5
ORDER BY
    title;`}
                </SyntaxHighlighter>
                <Typography component={"p"} mt={2} align={"justify"}>
                  To verify the table creation, you can query data from the <code className={"codes"}>film_r</code> table:
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT * FROM film_r;`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` film_id |          title          | rental_rate
---------+-------------------------+-------------
      54 | Banger Pinocchio        |        0.99
     115 | Campus Remember         |        2.99
     138 | Chariots Conspiracy     |        2.99
     159 | Closer Bang             |        4.99
     168 | Comancheros Enemy       |        0.99
     246 | Doubtfire Labyrinth     |        4.99
     287 | Entrapment Satisfaction |        0.99
     296 | Express Lonely          |        2.99
     310 | Fever Empire            |        4.99
     316 | Fire Wolves             |        4.99
     339 | Frogmen Breaking        |        0.99
     356 | Giant Troopers          |        2.99
     358 | Gilmore Boiled          |        0.99
     372 | Graceland Dynamite      |        4.99
     384 | Grosse Wonderful        |        4.99
     406 | Haunting Pianist        |        0.99
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align={"justify"} sx={{ fontSize: "1.4em", fontWeight: "bold" }} mt={4}>
            <FontAwesomeIcon icon={fa2} />
            {")"} {`Using the`} <code className="codes">SELECT INTO</code> {` statement to create a new temporary table`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`The following example uses the`} <code className="codes">SELECT INTO</code> {`statement to create a temporary table named`}{" "}
            <code className="codes">short_film</code> {`that contains films whose lengths are under 60 minutes.`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT
    film_id,
    title,
    length 
INTO TEMP TABLE short_film
FROM
    film
WHERE
    length < 60
ORDER BY
    title;`}
                </SyntaxHighlighter>
                <Typography component={"p"} mt={2} align={"justify"}>
                  The following shows the data from the <code className={"codes"}>short_film</code> table:
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT * FROM short_film
ORDER BY length DESC;`}
                </SyntaxHighlighter>
                <Typography align={"justify"} sx={{ fontSize: "1.4em", fontWeight: "bold" }} mt={4}>
                  Output:
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` film_id |        title         | length
---------+----------------------+--------
     486 | Jet Neighbors        |     59
     465 | Interview Liaisons   |     59
     409 | Heartbreakers Bright |     59
     947 | Vision Torque        |     59
     171 | Commandments Express |     59
     214 | Daughter Madigan     |     59
     581 | Minority Kiss        |     59
     516 | Legend Jedi          |     59
     972 | Whisperer Giant      |     59
     867 | Super Wyoming        |     58
     159 | Closer Bang          |     58
     205 | Dances None          |     58
     732 | Rings Heartbreakers  |     58
     635 | Oklahoma Jumanji     |     58
     481 | Jekyll Frogmen       |     58
     303 | Fantasy Troopers     |     58
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

export default SelectInto;
