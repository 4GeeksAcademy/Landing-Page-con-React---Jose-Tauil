import React from "react";

const Jumbotron = () => {
    return (
        <div className="container mt-4">

            <div className="p-5 mb-4 bg-body-secondary rounded">

                <h1 className="display-4">A Warm Welcome!</h1>

                <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta ullam recusandae et harum vel in inventore velit,
                    officia ad fugiat nihil vitae nulla. Consequuntur ipsum,
                    tempora maxime suscipit quibusdam laborum.
                </p>

                <button className="btn btn-primary btn-lg">
                    Call to action!
                </button>

            </div>
        </div>
    );
};

export default Jumbotron;