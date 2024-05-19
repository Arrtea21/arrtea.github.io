import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../Components/Header';
import Links from '../Components/Links';
import Tea from '../Components/TeaDoodle';

export default function Home(){
    return(
        <>
            <Header></Header>
            <Tea></Tea>
            <Links></Links>
            <div>
                <p className='d-flex align-items-center justify-content-center p-4 pb-0 mb-0 text-center w-100 text-white' style={{backgroundColor:"black",fontFamily: "monospace"}}>
                Just goofing around on the internet. Into everything tech-related, plus games, music, anime, and did I mention games 😆? Designated tech guy for the family. Loves a good story.</p>
                <a href='https://discord.com/users/425208565276475392' target='_blank' ><p className='d-flex align-items-center justify-content-center p-0 m-0 mb-5 text-center w-100 text-white' style={{backgroundColor:"black",fontFamily: "monospace"}}> Contact me on discord anytime ♥ . </p></a>
            </div>
           
        </>
    );
}