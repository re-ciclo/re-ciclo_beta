import React from 'react';


const TitleWelcome = (props) =>{

    return(
        <>
            <div className="w-100 p-4 bg-light">
                <h4 className="text-center" >{ props.title }</h4>
            </div>
        </>
    );
}


export default TitleWelcome;