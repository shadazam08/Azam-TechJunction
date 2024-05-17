import React from "react";
import DashBoard from "../Dashboard/DashBoard";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Courses from "../Courses/Courses";
import Tutorial from "../Tutorial/Tutorial";
import Notes from "../Notes/Notes";
import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer";
import JavaScriptCourse from "../JavaScriptCourse/JavaScriptCourse";
import RightSideBar from "../JavaScriptCourse/RightSideBar/RightSideBar";
import { showSideBarJS, showSideBarPG } from "./RouteUtils";
import WhatisJavaScript from "../JavaScriptCourse/JSTutorial/WhatisJavaScript";
import CodeEditors from "../JavaScriptCourse/JSTutorial/CodeEditors";
import JSHelloWorld from "../JavaScriptCourse/JSTutorial/JSHelloWorld";
import PostgreSQLTutorial from "../PostgreSqlTutorial/PostgreSQLTutorial";
import PGRightSideBar from "../PostgreSqlTutorial/PGSideBar/PGRightSideBar";
import WhatPostgreSQL from "../PostgreSqlTutorial/PGTutorials/WhatPostgreSQL";
import SampleDatabase from "../PostgreSqlTutorial/PGTutorials/SampleDatabase";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DashBoard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/javascript" element={<JavaScriptCourse />} />
        <Route
          path="/javascript/what-is-javascript"
          element={<WhatisJavaScript />}
        />
        <Route path="/javascript/code-editors" element={<CodeEditors />} />
        <Route path="/javascript/js-hello-world" element={<JSHelloWorld />} />
        <Route path="/PostgreSQL" element={<PostgreSQLTutorial />} />
        <Route
          path="/PostgreSQL/What-is-PostgreSQL"
          element={<WhatPostgreSQL />}
        />
        <Route
          path="/PostgreSQL/PostgreSQL-sample-database"
          element={<SampleDatabase />}
        />
      </>
    )
  );
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      {showSideBarJS() && <RightSideBar />}
      {showSideBarPG() && <PGRightSideBar />}
      {/* <Footer /> */}
    </>
  );
};

export default Routes;
