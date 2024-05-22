import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";

const PGRightSideBar = () => {
  return (
    <Box component={"main"} className="rightside">
      <Toolbar />
      <Box sx={{ p: 3 }}>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            GETTING STARTED
          </Typography>
          <List>
            <ListItem>
              <Link href={"/PostgreSQL/What-is-PostgreSQL"}>
                <Typography component={"span"}>What is PostgreSQL </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/PostgreSQL/PostgreSQL-sample-database">
                <Typography component={"span"}>
                  Introduction to PostgreSQL sample database
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/PostgreSQL/Install-PostgreSQL">
                <Typography component={"span"}>
                  Install PostgreSQL on Windows
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/PostgreSQL/connect-to-postgresql">
                <Typography component={"span"}>
                  Connect to PostgreSQL database server
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/PostgreSQL/Load-Sample-Database">
                <Typography component={"span"}>
                  Load Sample Database into PostgreSQL Server
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>

        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Querying Data
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Select</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Column aliases</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Order By</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Select Distinct</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Managing Tables
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Data types</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Create a table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Select Into & Create table
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Auto-increment column with SERIAL
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Sequences</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Identity column</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Alter table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Rename table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Add column</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Drop column</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Change column data type
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Rename column</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Drop table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Truncate table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Temporary table</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Copy a table</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            PostgreSQL Constraints
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Primary key</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Foreign key</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>DELETE CASCADE</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>CHECK constraint</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>UNIQUE constraint</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>NOT NULL constraint</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>DEFAULT constraint</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            PostgreSQL Data Types in Depth
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Boolean</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  CHAR, VARCHAR, and TEXT
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>NUMERIC</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>DOUBLE PRECISION</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>REAL</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Integer</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>DATE</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Timestamp</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Interval</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>TIME</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>UUID</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Array</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>hstore</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>JSON</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  User-defined data types
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Enum</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>XML</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>BYTEA</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Composite Types</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Filtering Data
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Where</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>AND operator</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>OR operator</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Limit</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Fetch</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>In</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Between</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Like</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Is Null</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Joining Multiple Tables
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Joins</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Table aliases</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Inner Join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Left Join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Self-join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Full Outer Join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Cross Join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Natural Join</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Grouping Data
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Group By</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Having</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Set Operations
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Union</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Intersect</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Except</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Grouping sets, Cubes, and Rollups
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Grouping Sets</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Cube</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Rollup</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Subquery
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Subquery</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Correlated Subquery</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>ANY</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>ALL</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>EXISTS</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Common Table Expressions
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>PostgreSQL CTE</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Recursive query using CTEs
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Modifying Data
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Insert</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Insert multiple rows</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Update</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Update join</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Delete</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>Upsert</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  PostgreSQL Transactions
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Import & Export Data
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Import CSV file into Table
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  Export PostgreSQL Table to CSV file
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Conditional Expressions & Operators
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>CASE</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>COALESCE</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>NULLIF</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>CAST</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            PostgreSQL Recipes
          </Typography>
          <List>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  How to compare two tables
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  How to delete duplicate rows in PostgreSQL
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>
                  How to generate a random number in a range
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>EXPLAIN statement</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"}>
                <Typography component={"span"}>PostgreSQL vs. MySQL</Typography>
              </Link>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Box>
  );
};

export default PGRightSideBar;
