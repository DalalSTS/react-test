import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <div className="header-blue">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container">
                  <a className="navbar-brand" href="/" >Support</a>
                  <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation">
                              <a className="nav-link active" href="#">Link</a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item" role="presentation" href="#">First Item</a>
                                  <a className="dropdown-item" role="presentation" href="#">Second Item</a>
                                  <a className="dropdown-item" role="presentation" href="#">Third Item</a>
                                  </div>
                            </li>
                        </ul>
                        <form className="form-inline mr-auto" target="_self">
                            <div className="form-group">
                              <label for="search-field">
                                <i className="fa fa-search"></i>
                                </label>
                                <input className="form-control search-field" type="search" name="search" id="search-field"/>
                            </div>
                        </form>
                        <div id="LogSign">
                          <span className="navbar-text"> 
                          <a className="login" href="./LogIn" id="LogIn">Log In</a>
                          </span>
                          <a className="btn btn-light action-button" role="button" href="./SignUp">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
            
        
    </div>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;