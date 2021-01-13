import React from 'react';

// Components
import { BannerConsume, BannerInfo } from '../../components/Banner';
import CardsReciclo from '../../components/Card';
import {CarrousselSupporters} from '../../components/Carroussel';
import {Carroussel} from '../../components/Carroussel';

// Styles
import './Home.css';



const Home = () =>{

    return(

        <div className="container-fluid">            
            
            <div className="row my-4">
                <div className="col-12">
                      < Carroussel/>
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