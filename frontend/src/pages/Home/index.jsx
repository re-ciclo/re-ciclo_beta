import React from 'react';
// Libraries

//Components

const Home = () =>{

    return(
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <h1 className="ml-2">Home</h1>
            </div>
            <div className="row bg-primary my-4">
                <div className="col-12">
                        Carrossel
                </div>
            </div>
            <div className="row bg-success my-4">
                <div className="col-12">
                        Banner
                </div>
            </div>
            <div className="row bg-primary my-4">
                <div className="col-12">
                        Cards
                </div>
            </div>
            <div className="row bg-success my-4">
                <div className="col-12">
                        Banner2
                </div>
            </div>
            <div className="row bg-primary my-4">
                <div className="col-12">
                        Apoiadores
                </div>
            </div>
        </div>
    );
}


export default Home;