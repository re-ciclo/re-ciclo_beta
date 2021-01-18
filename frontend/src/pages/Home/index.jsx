import React from 'react';

// Components
import {Carroussel, CarrousselSupporters} from '../../components/Carroussel';
import About from '../../components/About';
import { BannerConsume, BannerInfo } from '../../components/Banner';
import {CardsReciclo} from '../../components/Card';

// Styles
import './Home.css';


const Home = () =>{

    return(

        <div className="container-fluid">            
            
            <div className="row my-4">
                <div className="col-12">
                    <Carroussel />
                </div>
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <About />                
                </div>                
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <BannerConsume />                
                </div>                
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <CardsReciclo />                    
                </div>
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <BannerInfo />
                </div>
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <CarrousselSupporters /> 
                </div>
            </div>
        </div>
    );
}


export default Home;