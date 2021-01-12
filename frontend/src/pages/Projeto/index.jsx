import React from 'react';
// Libraries

//Components

const Projeto = () =>{

    return(
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <h1 className="ml-2">Projeto</h1>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-primary">Texto</div>
                <div className="col-12 col-sm-6 bg-success">Carrosell</div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-success">Carrosell</div>
                <div className="col-12 col-sm-6 bg-primary">Texto</div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-primary">Texto</div>
                <div className="col-12 col-sm-6 bg-success">Carrosell</div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-success">Carrosell</div>
                <div className="col-12 col-sm-6 bg-primary">Texto</div>
            </div>
        </div>
    );
}


export default Projeto;