import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">

                <a className="navbar-brand" href='#'>Start Bootstrap</a>

                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link active" href='#'>Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href='#'>About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href='#'>Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href='#'>Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;