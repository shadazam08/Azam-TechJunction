import React from "react";
import { Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const CreateTable = () => {
  return (
    <>
      <Helmet>
        <title>Create Table - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className={"changeWidth"}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            {`CREATE TABLE`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Introduction to PostgreSQL`} <code className="codes">CREATE TABLE</code> {`Statement`}
          </Typography>
          <Typography align={"justify"} mt={1}>
            {`The`} <code className={"codes"}>CREATE TABLE</code>{" "}
            {`statement in PostgreSQL is used to create a new table within a database. A table is a collection of data organized into rows and columns. Each column in a table represents a data field, while each row corresponds to a single record.`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Basic Syntax`}
          </Typography>
          <Typography align="justify" mt={1}>
            {`The basic syntax of the`} <code className={"codes"}>CREATE TABLE</code> {`statement is as follows:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE table_name (
    column1_name data_type [column_constraint],
    column2_name data_type [column_constraint],
    ...
    table_constraint
);`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`table_name`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The name of the table to be created.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`column_name`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The name of the column in the table.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`data_type`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {"The data type of the column (e.g., "} <code className={"codes"}>INTEGER, VARCHAR, BOOLEAN</code> {")"}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`column_constraint`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`Optional. Constraints for the column (e.g., `} <code className={"codes"}>PRIMARY KEY, NOT NULL, UNIQUE, CHECK, DEFAULT</code>{" "}
                  {`)`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`table_constraint`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`Optional. Constraints for the table as a whole (e.g., primary key or foreign key definitions).`}
                </Typography>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Example`}
          </Typography>
          <Typography align="justify" mt={1}>
            {`Here is an example that creates a table named `} <code className={"codes"}>accounts</code> {`:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`CREATE TABLE accounts (
  user_id SERIAL PRIMARY KEY, 
  username VARCHAR (50) UNIQUE NOT NULL, 
  password VARCHAR (50) NOT NULL, 
  email VARCHAR (255) UNIQUE NOT NULL, 
  created_at TIMESTAMP NOT NULL, 
  last_login TIMESTAMP
);`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Explanation`}
          </Typography>
          <Typography align="justify" mt={1}>
            {`The`} <code className="codes">CREATE TABLE</code> {`statement creates a table named`} <code className={"codes"}>accounts</code>{" "}
            {`with the following columns:`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`user_id`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`A unique identifier for each user. It is of type`} <code className={"codes"}>SERIAL</code>
                  {`, which means it auto-increments with each new record.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`username`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The user's name, which is a string up to 50 characters in length.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`password`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The user's password, which is a string up to 50 characters in length.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`email`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The user's email address, which is a string up to 255 characters in length.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`created_at`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The timestamp when the account was created.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`last_login`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`The timestamp of the user's last login.`}
                </Typography>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Column Constraints`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`user_id SERIAL PRIMARY KEY`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`SERIAL`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Auto-incrementing integer.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`PRIMARY KEY`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Uniquely identifies each row in the table.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} />{" "}
                  <strong>{`username VARCHAR(50) UNIQUE NOT NULL`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`VARCHAR(50)`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`String up to 50 characters.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`UNIQUE`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Ensures the value is unique across the table.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`NOT NULL`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`The column cannot have a null value.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`password VARCHAR(50) NOT NULL`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`VARCHAR(50)`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`String up to 50 characters.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`NOT NULL`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`The column cannot have a null value.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} />{" "}
                  <strong>{`email VARCHAR(255) UNIQUE NOT NULL`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`VARCHAR(50)`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`String up to 50 characters.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`UNIQUE`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Ensures the value is unique across the table.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`NOT NULL`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`The column cannot have a null value.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`created_at TIMESTAMP NOT NULL`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`TIMESTAMP`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Stores date and time.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`NOT NULL`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`The column cannot have a null value.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`last_login TIMESTAMP`}</strong>:
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`TIMESTAMP`}</strong>:
                    </Typography>{" "}
                    <Typography component={"span"} align={"justify"}>
                      {`Stores date and time.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Table Constraints`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`PRIMARY KEY (user_id)`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`Ensures that the`} <code className="codes">user_id</code> {`column uniquely identifies each row in the table.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`UNIQUE (username)`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`Ensures that the`} <code className="codes">username</code> {`column contains unique values across all rows.`}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xs" style={{ color: "#4A148C" }} /> <strong>{`UNIQUE (email)`}</strong>:
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  {`Ensures that the`} <code className="codes">email</code> {`column contains unique values across all rows.`}
                </Typography>
              </Typography>
            </ListItem>
          </List>

          <Typography align={"justify"} mt={2}>
            {`To view the structure of the accounts table, you can use the`} <code className="codes">{`\\d`}</code> {`command:`}
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`\\d accounts`}
                </SyntaxHighlighter>
                <Typography>
                  <strong>Output</strong>
                </Typography>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`                                           Table "public.accounts"
   Column   |            Type             | Collation | Nullable |                  Default
------------+-----------------------------+-----------+----------+-------------------------------------------
 user_id    | integer                     |           | not null | nextval('accounts_user_id_seq'::regclass)
 username   | character varying(50)       |           | not null |
 password   | character varying(50)       |           | not null |
 email      | character varying(255)      |           | not null |
 created_at | timestamp without time zone |           | not null |
 last_login | timestamp without time zone |           |          |
Indexes:
    "accounts_pkey" PRIMARY KEY, btree (user_id)
    "accounts_email_key" UNIQUE CONSTRAINT, btree (email)
    "accounts_username_key" UNIQUE CONSTRAINT, btree (username)
`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2} sx={{ fontSize: "1.4em", fontWeight: "bold" }}>
            {`Summary`}
          </Typography>
          <Typography component={"span"} align={"justify"} mt={1}>
            {`The`} <code className="codes">CREATE TABLE</code> {`statement defines the structure of the`} <code className="codes">accounts</code>{" "}
            {`table, specifying the columns, their data types, and constraints to ensure data integrity and uniqueness. By following best practices, such as defining a primary key, using appropriate data types, applying constraints, and using meaningful naming conventions, you can create a well-structured and efficient database schema. This ensures the database maintains the integrity of the data and supports the requirements of the application effectively.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CreateTable;
