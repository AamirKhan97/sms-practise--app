import React from "react";

let Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container">
                    <a className="navbar-brand fw-bold text-info" href="#">SMS APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${props.clicked ? "text-white" : "text-dark"}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.clicked ? "text-white" : "text-dark"}`} href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.clicked ? "text-white" : "text-dark"}`}  href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.clicked ? "text-white" : "text-dark"}`}>Disabled</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav" style={{marginLeft:"auto"}}>
                            <li className="nav-item ">
                                <div className="form-check form-switch">
                                <label htmlFor="flexSwitchCheckChecked" className={`${props.clicked ? "text-white" : "text-dark"}  form-check-label`}>{props.clicked ? "Dark Mode" : "Light Mode"}</label>
                                    <input 
                                        onClick={props.changeMode}
                                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>

    )
}

export default Navbar;