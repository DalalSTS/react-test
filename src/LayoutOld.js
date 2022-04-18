import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
          
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" id="supportNavBar" to="/" >Support</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./SignUp">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./LogIn">LogIn</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;