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
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Unstable_Grid2";
import "./scss/js.scss";
import TutorialButton from "../button/TutorialButton";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  //   color: theme.palette.text.secondary,
}));

const WhatisJavaScript = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Helmet>
        <title>What is JavaScript - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            What is JavaScript
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            JavaScript is a programming language initially designed to interact
            with elements of web pages. Within web browsers, JavaScript consists
            of three main parts:
          </Typography>
          <List>
            <ListItem sx={{ textAlign: "justify" }}>
              <Typography component={"span"}>
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Typography>{" "}
                ECMAScript provides the core functionality.
              </Typography>
            </ListItem>
            <ListItem sx={{ textAlign: "justify" }}>
              <Typography component={"span"}>
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Typography>{" "}
                The Document Object Model (DOM) provides interfaces for
                interacting with elements on web pages
              </Typography>
            </ListItem>
            <ListItem sx={{ textAlign: "justify" }}>
              <Typography component={"span"}>
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Typography>{" "}
                The Browser Object Model (BOM) provides the browser API for
                interacting with the web browser.
              </Typography>
            </ListItem>
          </List>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            JavaScript allows you to add interactivity to a web page. Typically,
            you use JavaScript with HTML and CSS to enhance a web page’s
            functionality, such as validating forms, creating interactive maps,
            and displaying animated charts.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            When a web page is loaded, i.e., after HTML and CSS have been
            downloaded, the JavaScript engine in the web browser executes the
            JavaScript code. The JavaScript code then modifies the HTML and CSS
            to update the user interface dynamically.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            The JavaScript engine is a component of web browsers responsible for
            interpreting and executing JavaScript code. It includes a parser to
            analyze the code, a compiler to convert it into machine code, and an
            interpreter to run the compiled code.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            Notable JavaScript engines include V8 in Chrome, SpiderMonkey in
            Firefox, and JavaScriptCore in Safari.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            Initially, JavaScript engines were implemented as interpreters.
            However, modern JavaScript engines are commonly implemented as
            just-in-time compilers that compile JavaScript code to bytecode for
            improved performance.
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} align="justify" className="text-gray-500">
            Client-side vs. Server-side JavaScript
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            When JavaScript is used on a web page, it is executed in web
            browsers, serving as a client-side language.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            JavaScript can run on both web browsers and servers. A popular
            JavaScript server-side environment is Node.js. Unlike client-side
            JavaScript, server-side JavaScript executes on the server and allows
            you to access databases, file systems, etc.
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} align="justify" className="text-gray-500">
            JavaScript History
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            In 1995, JavaScript was developed by Brendan Eich, a Netscape
            developer. Initially named Mocha, it was later renamed to
            LiveScript.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            Netscape decided to rebrand LiveScript to JavaScript to capitalize
            on the popularity of Java. The decision was made shortly before the
            release of Netscape Navigator 2 web browser, leading to the
            introduction of JavaScript version 1.0.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            Netscape launched JavaScript 1.1 in Netscape Navigator 3. In the
            meantime, Microsoft introduced its web browser called Internet
            Explorer 3 (IE 3) as a competitor to Netscape. However, IE featured
            its own JavaScript implementation called JScript. Microsoft used the
            name JScript to avoid potential licensing conflicts with Netscape.
          </Typography>
          <Typography component={"p"} sx={{ mt: 1 }} align="justify">
            Hence, two distinct versions of JavaScript were in the market:
          </Typography>
          <List>
            <ListItem sx={{ textAlign: "justify" }}>
              <Typography component={"span"}>
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Typography>{" "}
                JavaScript in Netscape Navigator
              </Typography>
            </ListItem>
            <ListItem sx={{ textAlign: "justify" }}>
              <Typography component={"span"}>
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Typography>{" "}
                JScript in Internet Explorer.
              </Typography>
            </ListItem>
          </List>
          <Typography component={"p"} sx={{ m: 1 }} align="justify">
            At this time, JavaScript lacked standardized syntax and features,
            prompting the community to advocate for the standardization of the
            language.
          </Typography>
          <Typography component={"p"} sx={{ m: 1 }} align="justify">
            In 1997, JavaScript 1.1 was proposed to the European Computer
            Manufacturers Association (ECMA) as a proposal. Technical Committee
            #39 (TC39) was assigned the task of standardizing the language,
            maiming to transform it into a general-purpose, cross-platform, and
            vendor-neutral scripting language.
          </Typography>
          <Typography component={"p"} sx={{ m: 1 }} align="justify">
            TC39 came up with ECMA-262, establishing a standard for defining a
            new scripting language called ECMAScript (often pronounced
            Ek-ma-script).
          </Typography>
          <Typography component={"p"} sx={{ m: 1 }} align="justify">
            Following that, the International Organization for Standardization
            and International Electrotechnical Commissions (ISO/IEC) adopted
            ECMAScript (ISO/IEC-16262).
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" className="text-gray-500">
            JavaScript overview
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid xs={12}>
              <Item>
                <Typography component={"p"} className="withline">
                  Note that the following section offers a solid introduction to
                  JavaScript code. If you’re not yet familiar with it, that’s
                  perfectly fine. You’ll have the opportunity to learn in the
                  upcoming tutorial.
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            To define a variable in JavaScript, you use{" "}
            <code className="codes">var</code> keyword. For example:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`var x = 10; 
var y = 20;`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            ES6 added a new way to declare a variable with the{" "}
            <code className="codes"> let </code> keyword:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`let x = 10;
let y = 20;`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            There are differences between <code className="codes">var</code> and{" "}
            <code className="codes">let</code>. And it’s a good practice to use
            the <code className="codes">let</code> keyword to declare variables.
          </Typography>
          <Typography component={"p"} mt={2}>
            To declare a function, you use the{" "}
            <code className="codes">function</code> keyword. The following
            example defines a function that calculates the sum of two arguments:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`function add( a, b ) {
  return a + b;
}`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            To call the <code className="codes">add()</code> function, you use
            the following syntax:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`let result = add( x, y );`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            To log the result into the console window of the web browser or
            terminal (in the case of node.js), you use the{" "}
            <code className="codes">console.log()</code> function:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`console.log( result );`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            Now, you should see <code className="codes">30</code> in the output.
          </Typography>
          <Typography component={"p"} mt={2}>
            JavaScript provides you with condition statements such as{" "}
            <code className="codes">if-else</code> and{" "}
            <code className="codes">switch</code> statements. For example:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`let a = 20,
    b = 30;

function divide( a, b ) {
  if (b == 0) {
    throw 'Division by zero';
  }
  return a / b;
}`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            In the <code className="codes">divide()</code> function, we check
            whether the de-numerator (b) is zero. If yes, we throw an exception.
            Otherwise, we return the result of a / b.
          </Typography>
          <Typography component={"p"} mt={1}>
            To declare an array, you use the following syntax:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`let items = [];`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={1}>
            To declare an array, you use the following syntax:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`let items = [1, 2, 3];`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={1}>
            You can access the number of elements in the{" "}
            <code className="codes">items</code> array through its{" "}
            <code className="codes">length</code> property:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`console.log (items.length); // 3`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={1}>
            To iterate over the elements of the{" "}
            <code className="codes">items</code> array, you use the{" "}
            <code className="codes">for</code> loop statement as follows:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`for(let i = 0; i < items.length; i++) {
  console.log(items[i]);
}`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={1}>
            Alternatively, you can use the for...of loop in ES6:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, padding: "0.2em" }}>
            <Grid xs={12}>
              <Typography component={"pre"} className="language-js">
                <code>{`for(let item of items) {
  console.log(item);
}`}</code>
              </Typography>
            </Grid>
          </Grid>
          <Typography component={"p"} mt={2}>
            JavaScript is an evolving language with rich features that you will
            explore in the upcoming tutorials.
          </Typography>
          <Typography component={"p"} mt={2}>
            In this tutorial, you learned about what JavaScript is and gained an
            overview of the JavaScript language.
          </Typography>
        </Box>
      </Box>
      <TutorialButton />
    </>
  );
};

export default WhatisJavaScript;
