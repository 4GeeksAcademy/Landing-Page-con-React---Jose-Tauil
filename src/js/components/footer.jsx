import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <p>
                    <small>
                        Copyright © Your Website {new Date().getFullYear()}
                    </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
