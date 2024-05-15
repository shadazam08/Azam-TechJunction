import React, { useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Prism from "prismjs";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import "prismjs/themes/prism.css";

// const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: "#F8F7F4",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "justify",
//   // color: "#ffff",
// }));

const JSHelloWorld = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Helmet>
        <title>Java Script Hello World - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            Here's a JavaScript Hello World Example
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            This tutorial serves as a beginner's guide to JavaScript,
            demonstrating how to incorporate JavaScript code into an HTML page
            to kickstart your journey with JavaScript development.
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            To insert JavaScript into an HTML page, you use the{" "}
            <code>{"<script>"}</code> element. There are two ways to use the{" "}
            <code>{"<script>"}</code> element in an HTML page:
            <List>
              <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    Embed JavaScript code directly into an HTML page.
                  </Typography>
                </Typography>
              </ListItem>
              <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    Reference an external JavaScript code file.
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography variant={"h4"} className="text-gray-500">
            Embed JavaScript code directly into an HTML page
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            Placing JavaScript code inside the{" "}
            <code className="codes">{"<script>"}</code> element directly is not
            recommended and should be used only for proof of concept or testing
            purposes.
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            The JavaScript code in the <code>{"<script>"}</code> element is
            interpreted from top to bottom. For example:
            <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
              <Grid xs={12}>
                {/* <Item> */}
                {/* Embedding HTML code */}
                <Typography component={"pre"} className="language-html">
                  <code>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Hello World Example</title>
    <script>
        alert('Hello, World!');
    </script>
</head>
<body>
</body>
</html>`}
                  </code>
                </Typography>
              </Grid>
            </Grid>
            <Typography>
              In the <code className="language-html">{`<script>`}</code>{" "}
              element, we use the{" "}
              <code className="language-js">{`alert()`}</code> function to
              display the{" "}
              <code className="language-html codes">{`Hello, World!`}</code>{" "}
              message.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default JSHelloWorld;
