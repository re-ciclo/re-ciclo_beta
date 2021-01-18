import React from 'react';
// Libraries
import {Jumbotron, Button} from 'reactstrap';
import {MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBIcon,  MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
//Components

export const JumbotronAmbiente = (props) => {

    return (
        <>
            <div>
                

            <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Seja bem vindo(a), {props.jumboNome}</strong>
            </MDBCardTitle>

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

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>





            </div>
        </>
    );
}


