import React from "react";
// import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        {/* <Link className="navbar-brand" href="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to ="/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href ="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
                {/* <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link> */}
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className={`mx-3 form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark/White Mode
              </label>

            </div>
            <div className={`mx-3 form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode1}
        
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Green/Blue Mode
              </label>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
