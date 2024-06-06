import React from "react";
import DashBoard from "../Dashboard/DashBoard";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Courses from "../Courses/Courses";
// import Tutorial from "../Tutorial/Tutorial";
import Notes from "../Notes/Notes";
import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer";
import JavaScriptCourse from "../JavaScriptCourse/JavaScriptCourse";
import RightSideBar from "../JavaScriptCourse/RightSideBar/RightSideBar";
import { notShowNavBar, showSideBarJS, showSideBarPG } from "./RouteUtils";
import WhatisJavaScript from "../JavaScriptCourse/JSTutorial/WhatisJavaScript";
import CodeEditors from "../JavaScriptCourse/JSTutorial/CodeEditors";
import JSHelloWorld from "../JavaScriptCourse/JSTutorial/JSHelloWorld";
import PostgreSQLTutorial from "../PostgreSqlTutorial/PGTutorials/PostgreSQLTutorial";
import PGRightSideBar from "../PostgreSqlTutorial/PGSideBar/PGRightSideBar";
import WhatPostgreSQL from "../PostgreSqlTutorial/PGTutorials/WhatPostgreSQL";
import SampleDatabase from "../PostgreSqlTutorial/PGTutorials/SampleDatabase";
import InstallPostgreSQL from "../PostgreSqlTutorial/PGTutorials/InstallPostgreSQL";
import ConnectPostgreSQL from "../PostgreSqlTutorial/PGTutorials/ConnectPostgreSQL";
import LoadDatabase from "../PostgreSqlTutorial/PGTutorials/LoadDatabase";
import PostgreSQLSELECT from "../PostgreSqlTutorial/PGTutorials/PostgreSQLSELECT";
import ColumnAlias from "../PostgreSqlTutorial/PGTutorials/ColumnAlias";
import OrderBy from "../PostgreSqlTutorial/PGTutorials/OrderBy";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SelectDistinct from "../PostgreSqlTutorial/PGTutorials/SelectDistinct";
import DataTypes from "../PostgreSqlTutorial/PGTutorials/DataTypes";
import CreateTable from "../PostgreSqlTutorial/PGTutorials/CreateTable";
import SelectInto from "../PostgreSqlTutorial/PGTutorials/SelectInto";
import CreateTableAs from "../PostgreSqlTutorial/PGTutorials/CreateTableAs";
import Serial from "../PostgreSqlTutorial/PGTutorials/Serial";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DashBoard />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/tutorial" element={<Tutorial />} /> */}
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/javascript" element={<JavaScriptCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/javascript/what-is-javascript" element={<WhatisJavaScript />} />
        <Route path="/javascript/code-editors" element={<CodeEditors />} />
        <Route path="/javascript/js-hello-world" element={<JSHelloWorld />} />
        <Route path="/postgreSQL" element={<PostgreSQLTutorial />} />
        <Route path="/PostgreSQL/what-is-postgreSql" element={<WhatPostgreSQL />} />
        <Route path="/PostgreSQL/postgreSQL-sample-database" element={<SampleDatabase />} />
        <Route path="/PostgreSQL/install-postgreSQL" element={<InstallPostgreSQL />} />
        <Route path="/PostgreSQL/connect-to-postgreSQL" element={<ConnectPostgreSQL />} />
        <Route path="/PostgreSQL/load-sample-database" element={<LoadDatabase />} />
        <Route path="/PostgreSQL/postgreSQL-select" element={<PostgreSQLSELECT />} />
        <Route path="/PostgreSQL/postgreSQL-column-alias" element={<ColumnAlias />} />
        <Route path="/PostgreSQL/order-by" element={<OrderBy />} />
        <Route path="/PostgreSQL/select-distinct" element={<SelectDistinct />} />
        <Route path="/PostgreSQL/data-types" element={<DataTypes />} />
        <Route path="/PostgreSQL/create-table" element={<CreateTable />} />
        <Route path="/PostgreSQL/select-into" element={<SelectInto />} />
        <Route path="/PostgreSQL/create-table-as" element={<CreateTableAs />} />
        <Route path="/PostgreSQL/serial" element={<Serial />} />
      </>,
    ),
  );
  // Determine if navbar should be shown based on current path
  const shouldShowNavBar = !notShowNavBar();
  return (
    <>
      {/* <NavBar /> */}
      {shouldShowNavBar && <NavBar />}
      <RouterProvider router={router} />
      {showSideBarJS() && <RightSideBar />}
      {showSideBarPG() && <PGRightSideBar />}
      {/* <Footer /> */}
    </>
  );
};

export default Routes;
