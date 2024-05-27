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
    window.location.pathname === "/PostgreSQL/order-by"
  );
};
const showSideBarJS = () => {
  return (
    window.location.pathname === "/javascript" ||
    window.location.pathname === "/javascript/what-is-javascript" ||
    window.location.pathname === "/javascript/code-editors" ||
    window.location.pathname === "/javascript/js-hello-world"
    // window.location.pathname === '/dashboard/profile' ||
    // window.location.pathname === '/dashboard/setpassword'
  );
};

export { showSideBarJS, showSideBarPG };
