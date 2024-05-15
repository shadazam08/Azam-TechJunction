import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Link,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import javaScriptImage from "../../Assets/image/javascript-736400.svg";
import "./javaCourse.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  borderRadius: "15px",
  //   color: theme.palette.text.secondary,
}));

const JavaScriptCourse = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Table of Contents - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">JavaScript Tutorial</Typography>
          <Typography paragraph mt={2} align="justify">
            Welcome to the azamtectjunction website! This JavaScript Tutorial
            helps you learn the JavaScript programming language from scratch
            quickly and effectively.
          </Typography>
          <Typography paragraph align="justify">
            If you find yourself in any of the following situations:
          </Typography>
          <Typography
            component={"div"}
            className="flex bg-white container mx-auto dark:bg-gray-900"
          >
            <List
              sx={{ textAlign: "justify" }}
              className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-500"
            >
              <ListItem>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    &#x27A4;
                  </Typography>{" "}
                  Unsure about where to start learning JavaScript.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    &#x27A4;
                  </Typography>{" "}
                  Tired of simply copying and pasting JavaScript code without
                  really understanding how it works.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    &#x27A4;
                  </Typography>{" "}
                  Feel stuck to add richer and more compelling features to your
                  websites and web applications because you don’t know how to
                  get much out of JavaScript.
                </Typography>
              </ListItem>
            </List>

            <div className="hidden lg:block lg:w-1/2">
              <img
                className="h-full"
                style={{ width: "30%", marginLeft: "50%" }}
                src={javaScriptImage}
                alt="Java Script"
              />
            </div>
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 1. Getting started
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      <Link href="/javascript/what-is-javascript">
                        What is JavaScript?
                      </Link>{" "}
                      – introduce you to JavaScript and its history.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      <Link href="/javascript/code-editors">
                        Install a JavaScript source code editor
                      </Link>{" "}
                      – "Learn how to install a JavaScript source code editor to
                      enhance your coding experience.
                    </Typography>
                  </ListItem>
                  {/* <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      <Link href="#">
                        Meet the Console Tab of Web Development Tools
                      </Link>{" "}
                      – provide you with a basic introduction to the Console
                      window on the web browsers.
                    </Typography>
                  </ListItem> */}
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      <Link href="#">JavaScript Hello World</Link> – learn how
                      to execute the first JavaScript code that displays the
                      famous <code> "Hello, World!" </code> message.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 2. Fundamentals
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Syntax – explain the JavaScript syntax, including
                      whitespace, statements, identifiers, keywords,
                      expressions, and comments.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Variables – show you how to declare variables.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Data types – introduce to you the JavaScript data types,
                      including primitive and reference types.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Number – learn how JavaScript uses the <code>Number</code>{" "}
                      type to represent the integer and floating-point numbers.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Numeric Separator– show you how to make the numbers more
                      readable by using underscores as numeric separators.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Octal & binary literals – provide support for binary
                      literals and change the way to represent octal literals.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Boolean – introduce you to the <code>Boolean</code> type.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      String – learn about string primitive type and some basic
                      string operations.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Object – introduce you to the object type.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Primitive vs. reference values – understand two value
                      types in JavaScript, including primitive and reference
                      values, and the differences between them.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Array – introduce you to the <code>Array</code> type and
                      how to manipulate array elements.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 3. Operators
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Arithmetic operators – introduce to you the arithmetic
                      operators including addition (<code> + </code>
                      ), subtraction (<code> - </code>), multiplication (
                      <code> * </code>), and division (<code> / </code>).
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Remainder operator – show you how to use the remainder
                      operator (<code> % </code>) to get the remainder left over
                      when one value is divided by another value.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Assignment operators – guide you on how to use assignment
                      operators (<code> = </code>) to assign a value or an
                      expression to a variable.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Unary operators – learn how to use unary operators.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Comparison operators – show you how to use comparison
                      operators to compare two values.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Logical operators – learn how to use the logical
                      operators: NOT (<code> ! </code>), AND (<code> && </code>
                      ), and OR (<code> || </code>).
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Logical assignment operators – introduce to you the
                      logical assignment operators, including <code> ||= </code>
                      , <code> &&= </code>, and <code> ??= </code>
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Nullish coalescing operator (<code> ?? </code>) – accept
                      two values and return the second value if the first one is{" "}
                      <code> null </code> or <code> undefined </code>.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Exponentiation operator – introduce you to the
                      exponentiation operator (<code> ** </code>) that
                      calculates a base to the exponent power, which is similar
                      to <code> Math.pow() </code> method.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 4. Control flow Statements
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      if – show you how to use the <code> if </code> statement
                      to execute a block if a condition is true.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      if…else – learn how to execute a block of code based on a
                      specified condition.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      if…else…if – check multiple conditions and execute a
                      block.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Ternary operators – show you how to make a shortcut for
                      the <code> if </code> statement (<code> ?: </code>).
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      switch – show you how to replace multiple{" "}
                      <code> if </code> statements when comparing a value with
                      multiple variants by using the <code> switch </code>{" "}
                      statement.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      while – learn how to perform a pre-test loop that
                      repeatedly executes a block of code as long as a specified
                      condition is <code>true</code>.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      do…while – show you how to carry a post-test loop that
                      executes a block of code repeatedly until a specified
                      condition is <code>false</code>.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      for loop – learn how to repeatedly execute a block of code
                      based on various options.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      break – learn how to prematurely terminate a loop.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      continue – show you how to skip the current iteration of a
                      loop and jump to the next one.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Comma operator – guide you on how to use the comma
                      operator in a for loop to update multiple variables at
                      once.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 5. Functions
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Functions – introduce you to functions in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Functions are first-class citizens – learn how to store
                      functions in the variables, pass functions into other
                      functions as arguments, and return functions as values.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Anonymous Functions – learn about anonymous functions
                      which are the functions without names.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Pass-by-value – understand how pass-by-value works in
                      JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Recursive function – learn how to define recursive
                      functions.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Default Parameters – show you how to define default
                      parameters for functions.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 6. Objects & Prototypes
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Object Methods – introduce you to the methods of an
                      object.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Constructor functions – show you how to use constructor
                      functions to define custom types in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Prototype – learn how the prototype works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Constructor/Prototype pattern – show you how to combine
                      the constructor function and prototype pattern to define
                      custom types.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Prototypal inheritance – understand prototypal inheritance
                      in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      What is this in JavaScript – understand the this value and
                      how it works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      globalThis – provide a standard way to access the global
                      object across environments.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Object Properties – dive into the object’s properties and
                      their attributes.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      for…in loop – learn how to iterate over properties of an
                      object using the for...in loop.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Enumerable Properties – learn more about the enumerable
                      properties.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Own Properties – understand the own and inherited
                      properties.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Factory functions – learn about the factory functions
                      which are functions that return objects.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Object Destructuring – learn how to assign properties of
                      an object to variables.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Optional chaining operator (?.) – simplify the way to
                      access a property located deep within a chain of connected
                      objects without having to check if each reference in the
                      chain is null or undefined.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Object literal syntax extensions – provide a new way to
                      define object literal.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 7. Classes
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Class – introduce you to the ES6 class syntax and how to
                      declare a class.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Getters and Setters – define the getters and setters for a
                      class using the get and set keywords.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Class Expression – learn an alternative way to define a
                      new class using a class expression.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Computed property – explain the computed property and its
                      practical application.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Inheritance – show you how to extend a class using the
                      extends and super keywords.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      new.target – introduce you to the new.target metaproperty.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Static methods – guide you on how to define methods
                      associated with a class, not instances of that class.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Static Properties – show you how to define static
                      properties shared by all instances of a class.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Private Fields – learn how to define private fields in a
                      class.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Private Methods – show you how to define private methods
                      in a class.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 8. Advanced Functions
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Function type – introduce you to the Function type and its
                      properties and methods.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      call()– understand the call() method and learn how to use
                      it effectively.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      apply() – learn how to use the apply() method effectively.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      bind() – understand the bind() method and how to apply it
                      effectively.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Closure – understand the closures in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Immediately Invoked Function Expression (IIFE) – learn
                      about immediately invoked function expressions (IIFE).
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Returning multiple values – guide you on how to return
                      multiple values from a function.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Arrow functions – introduce you to the arrow functions (
                      <code> &#8658; </code> )
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Arrow functions: when you should not use – learn when not
                      to use the arrow functions.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Rest parameter – introduce you to the rest parameters and
                      how to use them effectively.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Callback functions – introduce you to the callback
                      functions and learn how to use the callbacks to handle
                      asynchronous operations.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 9. Promises & Async/Await
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promises – learn about Javascript Promises, what they are,
                      and how to use them effectively.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise chaining – show you how to execute multiple
                      asynchronous operations in sequence.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise composition: Promise.all() & Promise.race() –
                      learn how to compose a new promise out of several
                      promises.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise.any() – learn how to use the JavaScript
                      Promise.any() method to return the first Promise that
                      fulfills.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise.allSettled() – accept a list of promises and
                      returns a new promise that resolves to an array of values,
                      which were settled (either resolved or rejected) by the
                      input promises.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise.prototype.finally() – execute a piece of code when
                      the promise is settled, regardless of its outcome.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Promise error handling – guide you on how to handle errors
                      in promises.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      async / await – write asynchronous code in a clearer
                      syntax.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 10. Iterators & Generators
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Iterators – introduce you to the iteration and iterator
                      protocols.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Generators – develop functions that can pause midway and
                      then continue from where they paused.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      yield – dive into how to use the yield keyword in
                      generators.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      for…of – learn how to use the for...of loop to iterate
                      over elements of an iterable object.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Asynchronous iterators – learn how to use async iterators
                      to access asynchronous data sources sequentially.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Async generators – show you how to create an async
                      generator.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 11. Modules
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Modules – learn how to write modular JavaScript code.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Export – explain in detail how to export variables,
                      functions, and classes from a module.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Import – guide you on how to import default exports and
                      named exports from another module.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Dynamic import – show you how to import a module
                      dynamically via the function-like object import().
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Top-level await – explain the top-level await module and
                      its use cases.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 12. Symbol
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Symbol – introduce you to a new primitive type called
                      symbol in ES6
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 13. Collections
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Map – introduce you to the Map type that holds a
                      collection of key-value pairs.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Set – learn how to use the Set type that holds a
                      collection of unique values.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 14. Error handling
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      try…catch – show you how to handle exceptions gracefully.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      try…catch…finally – learn how to catch exceptions and
                      execute a block whether the exceptions occur or not.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      throw – show you how to throw an exception.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Optional catch binding – omit the exception variable in
                      the catch block.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 15. JavaScript var, let, and const
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      let – declare block-scoped variables using the let
                      keyword.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      let vs. var – understand the differences between let and
                      var.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      const – define constants using the const keyword.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 16. Proxy & Reflection
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Proxy – learn how to use the proxy object that wraps
                      another object (target) and intercepts the fundamental
                      operations of the target object.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Reflection – show you how to use ES6 Reflection API to
                      manipulate variables, properties, and methods of objects
                      at runtime.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 17. JavaScript Runtime
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Execution Contexts – understand execution contexts
                      including global and function execution contexts.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Call Stack – understand the call stack.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Event Loop – show you how JavaScript handles asynchronous
                      operations using the event loop.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Hoisting – learn how hoisting works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Variable scopes – introduce you to the variable scopes.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Typography
                  component={"h1"}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Section 18. Primitive Wrapper Types
                </Typography>
                <List
                  component={"ul"}
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Primitive wrapper types – learn how primitive wrapper
                      types work in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Boolean – introduce you to the Boolean primitive wrapper
                      type.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      Number – learn about the Number primitive wrapper type.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      BigInt – introduce you to the <code> BigInt </code> type
                      that represents the big integers.
                    </Typography>
                  </ListItem>
                  <ListItem components={"li"} sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        &#x27A4;
                      </Typography>{" "}
                      String type – introduce you to the String type.
                    </Typography>
                  </ListItem>
                </List>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default JavaScriptCourse;
