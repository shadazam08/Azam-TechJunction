// const showNavBar = (isLoggedIn) => {
//     return (
//         isLoggedIn && (
//             // window.location.pathname === '/' ||
//             // window.location.pathname === '/dashboard/home' ||
//             // window.location.pathname === '/dashboard/tvshows' ||
//             // window.location.pathname === '/dashboard/profile' ||
//             // window.location.pathname === '/dashboard/setpassword'
//         )
//     )
// }
const showSideBar = () => {
  return (
    window.location.pathname === "/javascript" ||
    window.location.pathname === "/javascript/what-is-javascript" ||
    window.location.pathname === "/javascript/code-editors" ||
    window.location.pathname === "/javascript/js-hello-world"
    // window.location.pathname === '/dashboard/profile' ||
    // window.location.pathname === '/dashboard/setpassword'
  );
};

export { showSideBar };
