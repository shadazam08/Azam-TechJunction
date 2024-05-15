import React from "react";
import "./rightsidebar.scss";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";

const RightSideBar = () => {
  return (
    <>
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
                <Link href={"/javascript/what-is-javascript"}>
                  <Typography component={"span"}>What is JavaScript</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/javascript/code-editors">
                  <Typography component={"span"}>
                    Install a JavaScript Code Editor
                  </Typography>
                </Link>
              </ListItem>
              {/* <ListItem>
                <Link href="#">
                  <Typography component={"span"}>
                    Meet the Console Tab of Devtools
                  </Typography>
                </Link>
              </ListItem> */}
              <ListItem>
                <Link href="/javascript/js-hello-world">
                  <Typography component={"span"}>
                    JavaScript Hello World
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
              JAVASCRIPT FUNDAMENTALS
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Syntax</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Variables</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Data Types</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Number</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Numeric Separator</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Octal and Binary Literals
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Boolean</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>String</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Object</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Primitive vs. Reference Values
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Array</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT OPERATORS
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Arithmetic Operators</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Remainder Operator</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Assignment Operators</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Unary Operators</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Comparison Operators</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Logical Operators</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Logical Assignment Operators
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Nullish Coalescing Operator
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Exponentiation Operator
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              CONTROL FLOW
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>if</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>if else</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>if else if</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Ternary Operator (:?)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>switch case</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>while</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>do while</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>for</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>break</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>continue</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Comma Operator</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT FUNCTIONS
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Functions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Functions are First-Class Citizens
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Anonymous Functions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Understanding Pass-By-Value in JavaScript
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Recursive Functions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Default Parameters</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT OBJECTS
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Object Methods</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Constructor Functions
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Prototype</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Constructor/Prototype Pattern
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Prototypal Inheritance
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>this</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>globalThis</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Object Properties</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>for…in Loop</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Enumerable Properties
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Own Properties</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Factory Functions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Object Destructuring</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Optional Chaining Operator
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Object Literal Syntax Extensions
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              CLASSES
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Class</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Getters & Setters</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Class Expressions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Computed Properties</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Inheritance</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>new.target</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Static Methods</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Static Properties</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Private Fields</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Private Methods</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>instanceof Operator</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              ADVANCED FUNCTIONS
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Function Type</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>The call() Method</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>The apply() method</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>The bind() Method</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Closures</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Immediately Invoked Function Expression (IIFE)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Returning Multiple Values
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Arrow Functions</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Arrow Functions: Do & Don’t
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Rest Parameters</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Callback</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              PROMISES & ASYNC/AWAIT
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Promises</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Promise Chaining</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Promise.all()</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Promise.race()</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Promise.any()</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Promise.allSettled()</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Promise.prototype.finally()
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Promise Error Handling
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>async/await</Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT MODULES
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Modules</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Dynamic Import</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Top-level Await Modules
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT ERROR HANDLING
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>try…catch</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>try…catch…finally</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Throw an Exception</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>
                  Optional catch Binding
                </Typography>
              </ListItem>
            </List>
          </Typography>
          <Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              JAVASCRIPT RUNTIME
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>Execution Context</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Call Stack</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Event Loop</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Hoisting</Typography>
              </ListItem>
              <ListItem>
                <Typography component={"span"}>Variable Scopes</Typography>
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RightSideBar;
