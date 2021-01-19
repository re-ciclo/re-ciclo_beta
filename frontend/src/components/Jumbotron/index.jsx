import React from 'react';
// Libraries
import {Jumbotron, Button} from 'reactstrap';
import {MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBIcon,  MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
//Components

export const JumbotronAmbiente = (props) => {

    return (
        <>
            {/* <div class="jumbotron">
              <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div> */}

               
            <MDBContainer className="d-flex justify-content-left text-center">
              <MDBRow>
                <MDBCol>
                  <MDBJumbotron className="text-center">           

                    <MDBCardImage
                      src="https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_960_720.jpg"
                      className="img-fluid"
                    />

                    <MDBCardBody>
                      <MDBCardTitle className="indigo-text h5 m-4">
                        Foto do Maracanã
                      </MDBCardTitle>
                      <MDBCardText>
                        Nesse ambiente, você tem acesso às suas informações pessoais e aos resultados que sua comunidade obteve através do Re-ciclo.
                      </MDBCardText> 
                    </MDBCardBody>

                  </MDBJumbotron>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            
        </>
    );
}