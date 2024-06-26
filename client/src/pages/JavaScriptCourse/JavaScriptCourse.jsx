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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  Unsure about where to start learning JavaScript.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  Tired of simply copying and pasting JavaScript code without
                  really understanding how it works.
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/javascript/what-is-javascript">
                        What is JavaScript?
                      </Link>{" "}
                      – introduce you to JavaScript and its history.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="/javascript/code-editors">
                        Install a JavaScript source code editor
                      </Link>{" "}
                      – "Learn how to install a JavaScript source code editor to
                      enhance your coding experience.
                    </Typography>
                  </ListItem>
                  {/* <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">
                        Meet the Console Tab of Web Development Tools
                      </Link>{" "}
                      – provide you with a basic introduction to the Console
                      window on the web browsers.
                    </Typography>
                  </ListItem> */}
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      <Link href="#">JavaScript Hello World</Link> – learn how
                      to execute the first JavaScript code that displays the
                      famous <code className="codes"> "Hello, World!" </code>{" "}
                      message.
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Syntax – explain the JavaScript syntax, including
                      whitespace, statements, identifiers, keywords,
                      expressions, and comments.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Variables – show you how to declare variables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Data types – introduce to you the JavaScript data types,
                      including primitive and reference types.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Number – learn how JavaScript uses the{" "}
                      <code className="codes">Number</code> type to represent
                      the integer and floating-point numbers.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Numeric Separator– show you how to make the numbers more
                      readable by using underscores as numeric separators.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Octal & binary literals – provide support for binary
                      literals and change the way to represent octal literals.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Boolean – introduce you to the{" "}
                      <code className="codes">Boolean</code> type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      String – learn about string primitive type and some basic
                      string operations.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Object – introduce you to the object type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Primitive vs. reference values – understand two value
                      types in JavaScript, including primitive and reference
                      values, and the differences between them.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Array – introduce you to the{" "}
                      <code className="codes">Array</code> type and how to
                      manipulate array elements.
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Arithmetic operators – introduce to you the arithmetic
                      operators including addition (
                      <code className="codes"> + </code>
                      ), subtraction (<code className="codes"> - </code>),
                      multiplication (<code className="codes"> * </code>), and
                      division (<code className="codes"> / </code>).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Remainder operator – show you how to use the remainder
                      operator (<code className="codes"> % </code>) to get the
                      remainder left over when one value is divided by another
                      value.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Assignment operators – guide you on how to use assignment
                      operators (<code className="codes"> = </code>) to assign a
                      value or an expression to a variable.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Unary operators – learn how to use unary operators.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Comparison operators – show you how to use comparison
                      operators to compare two values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Logical operators – learn how to use the logical
                      operators: NOT (<code className="codes"> ! </code>), AND (
                      <code className="codes"> && </code>
                      ), and OR (<code className="codes"> || </code>).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Logical assignment operators – introduce to you the
                      logical assignment operators, including{" "}
                      <code className="codes"> ||= </code>,{" "}
                      <code className="codes"> &&= </code>, and{" "}
                      <code className="codes"> ??= </code>
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Nullish coalescing operator (
                      <code className="codes"> ?? </code>) – accept two values
                      and return the second value if the first one is{" "}
                      <code className="codes"> null </code> or{" "}
                      <code className="codes"> undefined </code>.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Exponentiation operator – introduce you to the
                      exponentiation operator (
                      <code className="codes"> ** </code>) that calculates a
                      base to the exponent power, which is similar to{" "}
                      <code className="codes"> Math.pow() </code> method.
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      if – show you how to use the{" "}
                      <code className="codes"> if </code> statement to execute a
                      block if a condition is true.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      if…else – learn how to execute a block of code based on a
                      specified condition.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      if…else…if – check multiple conditions and execute a
                      block.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Ternary operators – show you how to make a shortcut for
                      the <code className="codes"> if </code> statement (
                      <code className="codes"> ?: </code>).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      switch – show you how to replace multiple{" "}
                      <code className="codes"> if </code> statements when
                      comparing a value with multiple variants by using the{" "}
                      <code className="codes"> switch </code> statement.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      while – learn how to perform a pre-test loop that
                      repeatedly executes a block of code as long as a specified
                      condition is <code className="codes">true</code>.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      do…while – show you how to carry a post-test loop that
                      executes a block of code repeatedly until a specified
                      condition is <code className="codes">false</code>.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      for loop – learn how to repeatedly execute a block of code
                      based on various options.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      break – learn how to prematurely terminate a loop.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      continue – show you how to skip the current iteration of a
                      loop and jump to the next one.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Functions – introduce you to functions in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Functions are first-class citizens – learn how to store
                      functions in the variables, pass functions into other
                      functions as arguments, and return functions as values.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Anonymous Functions – learn about anonymous functions
                      which are the functions without names.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Pass-by-value – understand how pass-by-value works in
                      JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Recursive function – learn how to define recursive
                      functions.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Object Methods – introduce you to the methods of an
                      object.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Constructor functions – show you how to use constructor
                      functions to define custom types in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Prototype – learn how the prototype works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Constructor/Prototype pattern – show you how to combine
                      the constructor function and prototype pattern to define
                      custom types.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Prototypal inheritance – understand prototypal inheritance
                      in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      What is this in JavaScript – understand the this value and
                      how it works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      globalThis – provide a standard way to access the global
                      object across environments.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Object Properties – dive into the object’s properties and
                      their attributes.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      for…in loop – learn how to iterate over properties of an
                      object using the for...in loop.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Enumerable Properties – learn more about the enumerable
                      properties.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Own Properties – understand the own and inherited
                      properties.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Factory functions – learn about the factory functions
                      which are functions that return objects.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Object Destructuring – learn how to assign properties of
                      an object to variables.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Optional chaining operator (?.) – simplify the way to
                      access a property located deep within a chain of connected
                      objects without having to check if each reference in the
                      chain is null or undefined.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Class – introduce you to the ES6 class syntax and how to
                      declare a class.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Getters and Setters – define the getters and setters for a
                      class using the get and set keywords.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Class Expression – learn an alternative way to define a
                      new class using a class expression.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Computed property – explain the computed property and its
                      practical application.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Inheritance – show you how to extend a class using the
                      extends and super keywords.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      new.target – introduce you to the new.target metaproperty.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Static methods – guide you on how to define methods
                      associated with a class, not instances of that class.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Static Properties – show you how to define static
                      properties shared by all instances of a class.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Private Fields – learn how to define private fields in a
                      class.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Function type – introduce you to the Function type and its
                      properties and methods.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      call()– understand the call() method and learn how to use
                      it effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      apply() – learn how to use the apply() method effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      bind() – understand the bind() method and how to apply it
                      effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Closure – understand the closures in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Immediately Invoked Function Expression (IIFE) – learn
                      about immediately invoked function expressions (IIFE).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Returning multiple values – guide you on how to return
                      multiple values from a function.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Arrow functions – introduce you to the arrow functions (
                      <code className="codes"> &#8658; </code> )
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Arrow functions: when you should not use – learn when not
                      to use the arrow functions.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Rest parameter – introduce you to the rest parameters and
                      how to use them effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promises – learn about Javascript Promises, what they are,
                      and how to use them effectively.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise chaining – show you how to execute multiple
                      asynchronous operations in sequence.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise composition: Promise.all() & Promise.race() –
                      learn how to compose a new promise out of several
                      promises.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise.any() – learn how to use the JavaScript
                      Promise.any() method to return the first Promise that
                      fulfills.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise.allSettled() – accept a list of promises and
                      returns a new promise that resolves to an array of values,
                      which were settled (either resolved or rejected) by the
                      input promises.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise.prototype.finally() – execute a piece of code when
                      the promise is settled, regardless of its outcome.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Promise error handling – guide you on how to handle errors
                      in promises.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Iterators – introduce you to the iteration and iterator
                      protocols.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Generators – develop functions that can pause midway and
                      then continue from where they paused.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      yield – dive into how to use the yield keyword in
                      generators.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      for…of – learn how to use the for...of loop to iterate
                      over elements of an iterable object.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Asynchronous iterators – learn how to use async iterators
                      to access asynchronous data sources sequentially.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Modules – learn how to write modular JavaScript code.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Export – explain in detail how to export variables,
                      functions, and classes from a module.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Import – guide you on how to import default exports and
                      named exports from another module.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Dynamic import – show you how to import a module
                      dynamically via the function-like object import().
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Map – introduce you to the Map type that holds a
                      collection of key-value pairs.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      try…catch – show you how to handle exceptions gracefully.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      try…catch…finally – learn how to catch exceptions and
                      execute a block whether the exceptions occur or not.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      throw – show you how to throw an exception.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      let – declare block-scoped variables using the let
                      keyword.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      let vs. var – understand the differences between let and
                      var.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Proxy – learn how to use the proxy object that wraps
                      another object (target) and intercepts the fundamental
                      operations of the target object.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Execution Contexts – understand execution contexts
                      including global and function execution contexts.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Call Stack – understand the call stack.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Event Loop – show you how JavaScript handles asynchronous
                      operations using the event loop.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Hoisting – learn how hoisting works in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
                  sx={{ textAlign: "justify" }}
                  className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-600"
                >
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Primitive wrapper types – learn how primitive wrapper
                      types work in JavaScript.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Boolean – introduce you to the Boolean primitive wrapper
                      type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      Number – learn about the Number primitive wrapper type.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                      </Typography>{" "}
                      BigInt – introduce you to the{" "}
                      <code className="codes"> BigInt </code> type that
                      represents the big integers.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ textAlign: "justify" }}>
                    <Typography component={"span"}>
                      <Typography component={"span"} sx={{ color: "#4A148C" }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
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
