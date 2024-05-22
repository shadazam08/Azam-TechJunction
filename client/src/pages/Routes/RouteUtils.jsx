const showSideBarPG = () => {
  return (
    window.location.pathname === "/PostgreSQL" ||
    window.location.pathname === "/PostgreSQL/What-is-PostgreSQL" ||
    window.location.pathname === "/PostgreSQL/PostgreSQL-sample-database" ||
    window.location.pathname === "/PostgreSQL/Install-PostgreSQL" ||
    window.location.pathname === "/PostgreSQL/connect-to-postgresql" ||
    window.location.pathname === "/PostgreSQL/Load-Sample-Database"
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
