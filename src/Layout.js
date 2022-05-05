import { Outlet, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {useState} from 'react';

function Layout(){
  
   const [LogedIn, setLogedIn] = useState(false);

  // const onLogedIn = (LogedIn)=>{
  //   if(LogedIn === false){
  //     setSLogProf(false);
  //   }
  //   else if(LogedIn === true){
  //     setSLogProf(true);
  //   }
  // }
  return (
    <>
      <div id="layoutFixed">
        <div className="header-blue">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container">
                  <a className="navbar-brand" href="/" >Support</a>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span className="sr-only"></span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end"
                        id="navcol-1">
                        
                        
                          <div className={`${LogedIn && 'd-none'}`}>
                          <span className="navbar-text"> 
                          <a className="login" href="./LogIn" id="LogIn">Log In</a>
                          </span>
                          <a className="btn btn-light action-button" role="button" href="./SignUp">Sign Up</a>
                          <a className="btn btn-light action-button" role="button" href="./Questions">Questions</a>
                          </div>
                          <div className={`${!LogedIn && 'd-none'}`}>
                            <a className="navbar-text float-right" href="./MyProfile" >My Profile</a>
                            <a className="navbar-brand float-right" href="./MatchPage" >MatchPage</a>
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

{/* <ul className="nav navbar-nav">
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
                              <label htmlFor="search-field">
                                <i className="fa fa-search"></i>
                                </label>
                                <input className="form-control search-field" type="search" name="search" id="search-field"/>
                            </div>
                        </form> */}

export default Layout;