const notShowNavBar = () => {
  return window.location.pathname === "/login" || window.location.pathname === "/signup";
};
const showNavbar = () => {
  return (
    window.location.pathname === "/" ||
    window.location.pathname === "/postgreSQL" ||
    window.location.pathname === "/PostgreSQL/what-is-postgreSql" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-sample-database" ||
    window.location.pathname === "/PostgreSQL/install-postgreSQL" ||
    window.location.pathname === "/PostgreSQL/connect-to-postgreSQL" ||
    window.location.pathname === "/PostgreSQL/load-sample-database" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-select" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-column-alias" ||
    window.location.pathname === "/PostgreSQL/order-by" ||
    window.location.pathname === "/PostgreSQL/select-distinct" ||
    window.location.pathname === "/PostgreSQL/data-types"
  );
};
const showSideBarPG = () => {
  return (
    window.location.pathname === "/postgreSQL" ||
    window.location.pathname === "/PostgreSQL/what-is-postgreSql" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-sample-database" ||
    window.location.pathname === "/PostgreSQL/install-postgreSQL" ||
    window.location.pathname === "/PostgreSQL/connect-to-postgreSQL" ||
    window.location.pathname === "/PostgreSQL/load-sample-database" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-select" ||
    window.location.pathname === "/PostgreSQL/postgreSQL-column-alias" ||
    window.location.pathname === "/PostgreSQL/order-by" ||
    window.location.pathname === "/PostgreSQL/select-distinct" ||
    window.location.pathname === "/PostgreSQL/data-types"
  );
};
const showSideBarJS = () => {
  return (
    window.location.pathname === "/javascript/what-is-javascript" ||
    window.location.pathname === "/javascript/code-editors" ||
    window.location.pathname === "/javascript/js-hello-world"
    // window.location.pathname === '/dashboard/profile' ||
    // window.location.pathname === '/dashboard/setpassword'
  );
};

export { showSideBarJS, showSideBarPG, notShowNavBar, showNavbar };
