import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleCheck,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import liveServer from "../../../Assets/image/LiveServer.png";
import AcceptLicenceImage from "../../../Assets/image/Accept-License.png";
import ClickInstallImage from "../../../Assets/image/Click-Install.png";
import ClickNextImage from "../../../Assets/image/Click-Next.png";
import FinishImage from "../../../Assets/image/Finish.png";
import ReadyImage from "../../../Assets/image/Ready.png";
import vscodeSetupFileImage from "../../../Assets/image/vscodeSetup-File.png";
import WaitImage from "../../../Assets/image/Wait.png";

const CodeEditors = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Code Editors - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            JavaScript Code Editors
          </Typography>
          <Typography paragraph sx={{ mt: 2 }} align="justify">
            In this tutorial, you will learn about various JavaScript code
            editors and how to install Visual Studio Code for JavaScript
            development.
          </Typography>
          <Box>
            <Typography
              variant={"h4"}
              align="justify"
              className="text-gray-500"
            >
              Popular Code Editors
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              To edit JavaScript source code, you need a plain text editor such
              as Notepad on Windows. However, to simplify and speed up the
              typing of JavaScript code, you need a JavaScript code editor.
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              Besides basic editing features, a JavaScript code editor provides
              you with syntax highlighting, indentation, autocomplete, and brace
              matching functionality. Some editors also allow you to debug
              JavaScript.
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              The following are some popular JavaScript code editors:
            </Typography>
            <List>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Link href="https://code.visualstudio.com/" target="_blank">
                    {" "}
                    Visual Studio Code
                  </Link>
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Link href="https://atom-editor.cc/" target="_blank">
                    Atom
                  </Link>
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Link
                    href="https://notepad-plus-plus.org/downloads/v8.6.7/"
                    target="_blank"
                  >
                    {" "}
                    Notepad++
                  </Link>
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Link href="https://www.sublimetext.com/" target="_blank">
                    {" "}
                    Sublime Text
                  </Link>
                </Typography>
              </ListItem>
              <ListItem sx={{ textAlign: "justify" }}>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </Typography>{" "}
                  <Link
                    href="https://netbeans.apache.org/front/main/index.html"
                    target="_blank"
                  >
                    {" "}
                    NetBeans
                  </Link>
                </Typography>
              </ListItem>
            </List>
            <Typography component={"p"} mt={2}>
              Note that all these JavaScript editors are free. For our example,
              we have chosen to use Visual Studio Code.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography
              variant={"h4"}
              align="justify"
              className="text-gray-500"
            >
              Visual Studio Code
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              Visual Studio Code is a lightweight yet powerful source code
              editor that runs on your desktop and is available for Windows,
              macOS, and Linux. It comes with built-in support for JavaScript,
              TypeScript, and Node.js, and has a rich ecosystem of extensions
              for other languages and runtimes such as C++, C#, Java, Python,
              PHP, Go, and .NET. Begin your journey with VS Code.
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faDownload} />
                  </Typography>{" "}
                  <Link
                    href="https://code.visualstudio.com/download"
                    target="_blank"
                  >
                    {" "}
                    Download Visual Studio Code
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box mt={2}>
            <Typography
              variant={"h4"}
              align="justify"
              className="text-gray-500"
            >
              Installing Visual Studio Code
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              Setting up the Visual Studio Code is easy and quick. It is a small
              download so you can install it in a few minutes.
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    When the download is complete, you'll see the Visual Studio
                    Code icon in the downloads folder.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={3}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={vscodeSetupFileImage}
                          alt="VS Code Setup File"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    Double-click the Installer icon to begin installing Visual
                    Studio Code.
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    After the Installer opens, you will be prompted to accept
                    the terms and conditions of Visual Studio Code. Click on 'I
                    accept the agreement' and then proceed by clicking the
                    'Next' button.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={AcceptLicenceImage}
                          alt="Accept Licence"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    Choose the location data for running the Visual Studio Code.
                    It will then ask you to browse the location. Then click on
                    the Next button.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={ClickNextImage}
                          alt="Click Next"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    Then it will ask to begin the installation setup. Click on
                    the Install button.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={ClickInstallImage}
                          alt="Install"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    After clicking on Install, it will take about 1 minute to
                    install the Visual Studio Code on your device.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={WaitImage}
                          alt="Wait"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    After the Installation setup for Visual Studio Code is
                    finished, it will show a window like this below. Tick the
                    “Launch Visual Studio Code” checkbox and then click Next.
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={FinishImage}
                          alt="Final finish"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    After the previous step, the Visual Studio Code window opens
                    successfully. Now you can create a new file in the Visual
                    Studio Code window and choose a language of yours to begin
                    your programming journey!
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 4 }}
                      sx={{ marginLeft: 5, marginTop: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                          height: "100%",
                        }}
                      >
                        {/* <Item> */}
                        <img
                          src={ReadyImage}
                          alt="Ready"
                          style={{ width: "100%" }}
                        />
                        {/* </Item> */}
                      </Grid>
                    </Grid>
                  </Typography>
                  <br />
                </Typography>
              </ListItem>
            </List>
            <Typography component={"span"}>
              This completes the successful installation of Visual Studio Code
              on your Windows system. The steps outlined above can be applied to
              any Windows browser for downloading and installing VS Code on
              Windows 10. Feel free to follow these steps to install the VS Code
              IDE on your device as well.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography
              variant={"h4"}
              align="justify"
              className="text-gray-500"
            >
              Installing the Live Server extension
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              With the Live Server extension, you can effortlessly start a local
              development server for static pages, complete with a hot reload
              feature. This means that as you modify your JavaScript code, the
              changes will be automatically reflected in the browser without the
              need to refresh the page.
            </Typography>
            <Typography component={"p"} align="justify" sx={{ mt: 2 }}>
              Follow these steps to install the Live Server extension:
            </Typography>
            <List>
              <ListItem>
                <Typography component={"span"}>
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    1<sup>st</sup>, open Visual Studio Code (VS code)
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    2<sup>nd</sup>, click the Extensions.
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    3<sup>rd</sup>, search for the Live Server.
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    4<sup>th</sup>, Next, locate and select the Live Server
                    extension from the list.
                  </Typography>
                  <br />
                  <Typography component={"span"} sx={{ color: "#4A148C" }}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </Typography>{" "}
                  <Typography component={"span"}>
                    {" "}
                    5<sup>th</sup>, Lastly, click on the 'Install' button to
                    complete the process..
                  </Typography>
                </Typography>
              </ListItem>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                sx={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{ height: "100%", width: "100%" }}
                >
                  {/* <Item> */}
                  <img
                    src={liveServer}
                    alt="Install LiveServer"
                    style={{ width: "100%", marginBottom: "0.5rem" }}
                  />
                  {/* </Item> */}
                </Grid>
              </Grid>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CodeEditors;
