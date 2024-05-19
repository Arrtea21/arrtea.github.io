import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Tea(){
    let style = {
        textAlign: "center",
        paddingTop: "145px",
        // background: "#f0bd6c url('https://i.imgur.com/ahMqbDe.png') no-repeat",
        background: "#f0bd6c url('Assets/ahMqbDe.png') no-repeat",
        backgroundSize: "90px 145px",
        backgroundPositionX: "50%",
        backgroundPositionY: "calc(100% - 170px)"
    }

    return(
        <div className='col-12 text-center' style={style}> 
            <div className='Tea'>

            </div>
        </div>
    );
}