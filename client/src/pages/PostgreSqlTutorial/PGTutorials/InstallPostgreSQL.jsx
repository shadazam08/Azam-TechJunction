import React from "react";
import { Box, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2 } from "@fortawesome/free-solid-svg-icons";
import pgInstallStep1 from "../../../Assets/image/pgInstall/step-1.png";
import pgInstallStep2 from "../../../Assets/image/pgInstall/step-2.png";
import pgInstallStep3 from "../../../Assets/image/pgInstall/step-3.png";
import pgInstallStep4 from "../../../Assets/image/pgInstall/step-4.png";
import pgInstallStep5 from "../../../Assets/image/pgInstall/step-5.png";
import pgInstallStep6 from "../../../Assets/image/pgInstall/step-6.png";
import pgInstallStep7 from "../../../Assets/image/pgInstall/step-7.png";
import pgInstallStep8 from "../../../Assets/image/pgInstall/step-8.png";
import pgInstallStep9 from "../../../Assets/image/pgInstall/step-9.png";
import pgInstallStep10 from "../../../Assets/image/pgInstall/step-10.png";

const InstallPostgreSQL = () => {
  return (
    <>
      <Helmet>
        <title>Install PostgreSQL on Windows - Azam TechJunction </title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" className="text-gray-500">
            Install PostgreSQL on Windows
          </Typography>
          <Typography align="justify" mt={2}>
            Although PostgreSQL was originally developed for UNIX-like systems,
            its portability allows it to operate on various other platforms,
            including macOS, Solaris, and Windows.
          </Typography>
          <Typography mt={2} align="justify">
            To install PostgreSQL on Windows, follow these steps:
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={fa1} />
                  {")"}
                </Typography>{" "}
                Download the PostgreSQL installer for Windows.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align="justify">
                First, visit the EnterpriseDB website and navigate to the{" "}
                <Link
                  href={
                    "https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"
                  }
                  target={"_blank"}
                >
                  {" "}
                  PostgreSQL installers download page.
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                Second, download the PostgreSQL for Windows x86-64 version 16.3{" "}
                {"("}or the latest version{")"}. It{"’"}ll take a few minutes to
                complete.
              </Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} sx={{ color: "#4A148C" }}>
                  <FontAwesomeIcon icon={fa2} />
                  {")"}
                </Typography>{" "}
                <Typography component={"span"} align={"justify"}>
                  Install PostgreSQL on Windows by following these steps:
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                To install PostgreSQL on Windows, you must have administrator
                privileges.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 1</strong>. Double-click on the installer file to
                open the installation wizard. The wizard will guide you through
                several steps, allowing you to choose various options based on
                your preferences for PostgreSQL.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 2.</strong> Click the Next button
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep1}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 1"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 3</strong>. Specify the installation directory by
                either selecting your preferred location or accepting the
                default folder suggested by the PostgreSQL installer. Then,
                click the <code className="codes">"Next"</code> button to
                proceed.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep2}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 2"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align="justify">
                <Typography component={"span"} align={"justify"}>
                  <strong>Step 4</strong>. Select the software components you
                  want to install.
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <strong>PostgreSQL Server</strong>: This option installs
                      the PostgreSQL database server.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <strong>pgAdmin 4</strong>: Select this option to install
                      the PostgreSQL database GUI management tool.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align="justify">
                      <strong>Stack Builder</strong>: This provides a GUI for
                      downloading and installing drivers compatible with
                      PostgreSQL.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"spna"} align="justify">
                      <strong>Command Line Tools</strong>: Choose this option to
                      install command-line tools like psql, pg_restore, and
                      others, which allow interaction with the PostgreSQL
                      database server via the command-line interface.
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep3}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 3"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 5</strong>. Choose the directory where you want to
                store the PostgreSQL database data, or simply accept the default
                directory. Then, click the <code className="codes">"Next"</code>{" "}
                button to proceed to the next step.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep4}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 4"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 6</strong>. Enter the password for the database
                superuser{" "}
                <code className="codes">
                  {"("}postgres{")"}
                </code>
                . Make sure to choose a strong password and remember it, as it
                will be required for database access.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                After entering the password, retype it for confirmation, and
                then click the <code className="codes">"Next"</code> button to
                proceed.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 7</strong>. Specify a port number on which the
                PostgreSQL database server will listen. The default port for
                PostgreSQL is 5432. Make sure that no other applications are
                using this port to avoid conflicts. Once you've entered the port
                number, click the <code className="codes">"Next"</code> button
                to proceed.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep5}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 5"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 8</strong>. Choose the default locale for the
                PostgreSQL server. If you prefer, you can leave it as the
                default, in which case PostgreSQL will use the operating system
                locale. Once you've made your selection, click the{" "}
                <code className="codes">"Next"</code> button to continue.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep6}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 6"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 9</strong>. The setup wizard will display a summary
                of the PostgreSQL information you've provided. Take a moment to
                review the details. If everything looks correct, click the{" "}
                <code className="codes">"Next"</code> button to proceed. If you
                need to make any adjustments, click the{" "}
                <code className="codes">"Back"</code> button to return to the
                relevant step and modify the configuration as needed.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep7}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 7"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                Now, you are ready to install PostgreSQL on your computer. Click
                the Next button to initiate PostgreSQL installation.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep8}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 8"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                The installation process may take a few minutes to complete.
                Please be patient while PostgreSQL is being installed on your
                system.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep9}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 9"
              />
            </Typography>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <strong>Step 10</strong>. Once the installation is finished,
                click the <code className="codes">"Finish"</code> button to
                complete the PostgreSQL installation process.
              </Typography>
            </ListItem>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={pgInstallStep10}
                className="h-full object-cover"
                style={{ width: "70%", alignContent: "center" }}
                alt="Step 10"
              />
            </Typography>
          </List>
          <Typography
            component={"div"}
            align={"justify"}
            sx={{ marginTop: "3%" }}
          >
            Congratulations! You have successfully installed the PostgreSQL
            database server on your local system. You are now ready to start
            using PostgreSQL for your database needs.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InstallPostgreSQL;
