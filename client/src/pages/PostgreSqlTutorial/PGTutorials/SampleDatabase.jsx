import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa3,
  fa5,
  fa7,
  fa8,
  fa9,
  faCircleCheck,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ERModelDiagram from "../../../Assets/image/ERModel.png";
import dvdrental from "../../../Assets/files/dvdrental.sql";
import printableSampleERDiagram from "../../../Assets/document/printableSampleERDiagram.pdf";

const SampleDatabase = () => {
  const downloadPdf = () => {
    // const pdfUrl = printableSampleERDiagram;
    window.open(printableSampleERDiagram, "_blank");
  };
  return (
    <>
      <Helmet>
        <title>PostgreSQL Sample Database - Azam Tectjunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            PostgreSQL Sample Database
          </Typography>
          <Typography sx={{ mt: 2 }} align="justify">
            We'll utilize the DVD rental database as a practical example to
            showcase the capabilities of PostgreSQL.
          </Typography>

          <Typography sx={{ mt: 2 }} align="justify">
            The DVD rental database models the business operations of a DVD
            rental store and includes various objects, such as:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleCheck} size="sm" />
                </Typography>{" "}
                There are <FontAwesomeIcon icon={fa1} />
                <FontAwesomeIcon icon={fa5} /> tables defined in the database
                schema.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleCheck} size="sm" />
                </Typography>{" "}
                There are <FontAwesomeIcon icon={fa1} />
                <FontAwesomeIcon icon={fa3} /> sequences defined in the database
                schema.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleCheck} size="sm" />
                </Typography>{" "}
                There are <FontAwesomeIcon icon={fa8} /> functions defined in
                the database schema.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleCheck} size="sm" />
                </Typography>{" "}
                There are <FontAwesomeIcon icon={fa7} /> views defined in the
                database schema.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleCheck} size="sm" />
                </Typography>{" "}
                There are <FontAwesomeIcon icon={fa1} /> trigger defined in the
                database schema.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ mt: 2 }} align="justify">
            In this article, we'll utilize a sample database—the DVD rental
            database.
          </Typography>
          <Typography sx={{ mt: 2 }} align="justify">
            You can access and download the sample dvdrental database from{" "}
            <Link href={dvdrental}>
              here <FontAwesomeIcon icon={faDownload} />
            </Link>
          </Typography>
          <Typography variant={"h5"} sx={{ mt: 2 }} align="justify">
            <strong>
              Here is the Entity-Relationship (ER) model for the sample
              database:
            </strong>
          </Typography>
          <img
            src={ERModelDiagram}
            className="h-full object-cover"
            style={{ width: "100%" }}
            alt="ER Model Diagram"
          />
          <Typography align={"justify"}>
            In the diagram, the highlight in front of the field indicates the
            primary key.
          </Typography>
          <Typography align={"justify"} mt={2}>
            <Link onClick={downloadPdf} style={{ cursor: "pointer" }}>
              Download printable ER diagram
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SampleDatabase;
