import React from "react";
import { Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, faCircle } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const SelectDistinct = () => {
  return (
    <>
      <Helmet>
        <title>SELECT DISTINCT - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            SELECT DISTINCT
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "18px" }}>
            <strong>
              Introduction to PostgreSQL <code className="codes">SELECT DISTINCT</code> Clause
            </strong>
          </Typography>
          <Typography align="justify" mt={2}>
            The <code className="codes">SELECT DISTINCT</code> clause in SQL is used to remove duplicate rows from a result set. When you use{" "}
            <code className="codes">SELECT DISTINCT</code>, it ensures that each row in the result set is unique. This is achieved by considering all
            columns in the SELECT statement
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "18px" }}>
            <strong>How SELECT DISTINCT Works:</strong>
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify">
                  <FontAwesomeIcon icon={fa1} />
                  {")"}
                </Typography>{" "}
                <strong>Removing Duplicates:</strong>
                <List>
                  <ListItem>
                    <Typography component={"span"} align="justify">
                      <Typography component={"span"}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      When <code className="codes">SELECT DISTINCT</code> is applied, the database engine scans the result set and removes any
                      duplicate rows.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align="justify">
                      <Typography component={"span"}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      Duplicates are identified based on the values in all the columns specified in the SELECT statement.
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align="justify">
                  <FontAwesomeIcon icon={fa2} />
                  {")"}
                </Typography>{" "}
                <strong>Retaining Unique Rows:</strong>
                <List>
                  <ListItem>
                    <Typography component={"span"} align="justify">
                      <Typography component={"span"}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      Only one row is kept for each group of duplicates. The specific row retained is not guaranteed to be the first or last; it is
                      simply one of the rows from each group of duplicates.
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2}>
            <strong>Example:</strong>
          </Typography>
          <Typography align="justify" mt={2}>
            Let's consider a table <code className="codes">film</code> with the following data:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` film_id |            title            |                                                            description                                                             | release_year | language_id | rental_duration | rental_rate | length | replacement_cost | rating |       last_update       |                       special_features                       |                                                                                                   fulltext
---------+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------+-------------+-----------------+-------------+--------+------------------+--------+-------------------------+--------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     133 | Chamber Italian             | A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria                                                |         2006 |           1 |               7 |        4.99 |    117 |            14.99 | NC-17  | 2013-05-26 14:50:58.951 | {Trailers}                                                   | 'chamber':1 'fate':4 'husband':11 'italian':2 'monkey':16 'moos':8 'must':13 'nigeria':18 'overcom':14 'reflect':5
     384 | Grosse Wonderful            | A Epic Drama of a Cat And a Explorer who must Redeem a Moose in Australia                                                          |         2006 |           1 |               5 |        4.99 |     49 |            19.99 | R      | 2013-05-26 14:50:58.951 | {"Behind the Scenes"}                                        | 'australia':18 'cat':8 'drama':5 'epic':4 'explor':11 'gross':1 'moos':16 'must':13 'redeem':14 'wonder':2
       8 | Airport Pollock             | A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India                                                      |         2006 |           1 |               6 |        4.99 |     54 |            15.99 | R      | 2013-05-26 14:50:58.951 | {Trailers}                                                   | 'airport':1 'ancient':18 'confront':14 'epic':4 'girl':11 'india':19 'monkey':16 'moos':8 'must':13 'pollock':2 'tale':5
      98 | Bright Encounters           | A Fateful Yarn of a Lumberjack And a Feminist who must Conquer a Student in A Jet Boat                                             |         2006 |           1 |               4 |        4.99 |     73 |            12.99 | PG-13  | 2013-05-26 14:50:58.951 | {Trailers}                                                   | 'boat':20 'bright':1 'conquer':14 'encount':2 'fate':4 'feminist':11 'jet':19 'lumberjack':8 'must':13 'student':16 'yarn':5
       1 | Academy Dinosaur            | A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies                                   |         2006 |           1 |               6 |        0.99 |     86 |            20.99 | PG     | 2013-05-26 14:50:58.951 | {"Deleted Scenes","Behind the Scenes"}                       | 'academi':1 'battl':15 'canadian':20 'dinosaur':2 'drama':5 'epic':4 'feminist':8 'mad':11 'must':14 'rocki':21 'scientist':12 'teacher':17
       2 | Ace Goldfinger              | A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China                               |         2006 |           1 |               3 |        4.99 |     48 |            12.99 | G      | 2013-05-26 14:50:58.951 | {Trailers,"Deleted Scenes"}                                  | 'ace':1 'administr':9 'ancient':19 'astound':4 'car':17 'china':20 'databas':8 'epistl':5 'explor':12 'find':15 'goldfing':2 'must':14
       3 | Adaptation Holes            | A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory                                   |         2006 |           1 |               7 |        2.99 |     50 |            18.99 | NC-17  | 2013-05-26 14:50:58.951 | {Trailers,"Deleted Scenes"}                                  | 'adapt':1 'astound':4 'baloon':19 'car':11 'factori':20 'hole':2 'lumberjack':8,16 'must':13 'reflect':5 'sink':14
       4 | Affair Prejudice            | A Fanciful Documentary of a Frisbee And a Lumberjack who must Chase a Monkey in A Shark Tank                                       |         2006 |           1 |               5 |        2.99 |    117 |            26.99 | G      | 2013-05-26 14:50:58.951 | {Commentaries,"Behind the Scenes"}                           | 'affair':1 'chase':14 'documentari':5 'fanci':4 'frisbe':8 'lumberjack':11 'monkey':16 'must':13 'prejudic':2 'shark':19 'tank':20
       5 | African Egg                 | A Fast-Paced Documentary of a Pastry Chef And a Dentist who must Pursue a Forensic Psychologist in The Gulf of Mexico              |         2006 |           1 |               6 |        2.99 |    130 |            22.99 | G      | 2013-05-26 14:50:58.951 | {"Deleted Scenes"}                                           | 'african':1 'chef':11 'dentist':14 'documentari':7 'egg':2 'fast':5 'fast-pac':4 'forens':19 'gulf':23 'mexico':25 'must':16 'pace':6 'pastri':10 'psychologist':20 'pursu':17
       6 | Agent Truman                | A Intrepid Panorama of a Robot And a Boy who must Escape a Sumo Wrestler in Ancient China                                          |         2006 |           1 |               3 |        2.99 |    169 |            17.99 | PG     | 2013-05-26 14:50:58.951 | {"Deleted Scenes"}                                           | 'agent':1 'ancient':19 'boy':11 'china':20 'escap':14 'intrepid':4 'must':13 'panorama':5 'robot':8 'sumo':16 'truman':2 'wrestler':17
       7 | Airplane Sierra             | A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat                                                  |         2006 |           1 |               6 |        4.99 |     62 |            28.99 | PG-13  | 2013-05-26 14:50:58.951 | {Trailers,"Deleted Scenes"}                                  | 'airplan':1 'boat':20 'butler':11,16 'discov':14 'hunter':8 'jet':19 'must':13 'saga':5 'sierra':2 'touch':4
       9 | Alabama Devil               | A Thoughtful Panorama of a Database Administrator And a Mad Scientist who must Outgun a Mad Scientist in A Jet Boat                |         2006 |           1 |               3 |        2.99 |    114 |            21.99 | PG-13  | 2013-05-26 14:50:58.951 | {Trailers,"Deleted Scenes"}                                  | 'administr':9 'alabama':1 'boat':23 'databas':8 'devil':2 'jet':22 'mad':12,18 'must':15 'outgun':16 'panorama':5 'scientist':13,19 'thought':4
      10 | Aladdin Calendar            | A Action-Packed Tale of a Man And a Lumberjack who must Reach a Feminist in Ancient China                                          |         2006 |           1 |               6 |        4.99 |     63 |            24.99 | NC-17  | 2013-05-26 14:50:58.951 | {Trailers,"Deleted Scenes"}                                  | 'action':5 'action-pack':4 'aladdin':1 'ancient':20 'calendar':2 'china':21 'feminist':18 'lumberjack':13 'man':10 'must':15 'pack':6 'reach':16 'tale':7
      11 | Alamo Videotape             | A Boring Epistle of a Butler And a Cat who must Fight a Pastry Chef in A MySQL Convention                                          |         2006 |           1 |               6 |        0.99 |    126 |            16.99 | G      | 2013-05-26 14:50:58.951 | {Commentaries,"Behind the Scenes"}                           | 'alamo':1 'bore':4 'butler':8 'cat':11 'chef':17 'convent':21 'epistl':5 'fight':14 'must':13 'mysql':20 'pastri':16 'videotap':2
      12 | Alaska Phantom              | A Fanciful Saga of a Hunter And a Pastry Chef who must Vanquish a Boy in Australia                                                 |         2006 |           1 |               6 |        0.99 |    136 |            22.99 | PG     | 2013-05-26 14:50:58.951 | {Commentaries,"Deleted Scenes"}                              | 'alaska':1 'australia':19 'boy':17 'chef':12 'fanci':4 'hunter':8 'must':14 'pastri':11 'phantom':2 'saga':5 'vanquish':15
-- More  --`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography>
            The following illustrates the syntax of the <code className="codes">DISTINCT</code> clause:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT 
  DISTINCT column1 
FROM 
  table_name;`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
          <Typography align="justify" mt={2}>
            For example, to find out the distinct rental rates for films in the <code className="codes">film</code> table, you can use the{" "}
            <code className="codes">SELECT DISTINCT</code> clause on the <code className="codes">rental_rate</code> column as follows:
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {`SELECT DISTINCT
  rental_rate
FROM
  film
ORDER BY
  rental_rate;`}
                </SyntaxHighlighter>
              </Typography>
              <Typography align="justify" mt={2}>
                <strong>Output</strong>
              </Typography>
              <Typography component={"pre"} sx={{ borderRadius: "10px" }}>
                <SyntaxHighlighter language="sql" style={gruvboxLight} customStyle={{ borderRadius: "10px" }}>
                  {` rental_rate
-------------
        0.99
        2.99
        4.99
(3 rows)`}
                </SyntaxHighlighter>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SelectDistinct;
