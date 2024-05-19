import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Links(){
    return(
        <>
        <section className="d-flex align-items-center justify-content-center p-lg-4 text-center w-100 mt-5 " style={{background : "black"}}>
            <a href='https://github.com/Arrtea21' target='_blank' className='linkIcon'><i className=" fab fa-github fa-2x me-3 m-lg-3 m-sm-3 m-2 hover-zoom" style={{color: "#dddddd"}}></i></a>
            <a href='https://discord.com/users/425208565276475392' target='_blank' className='linkIcon'><i className=" fab fa-discord fa-2x me-3 m-lg-3 m-sm-3 m-2" style={{color: "#738ADB"}}></i></a>
            <a href='https://twitter.com/ArrpiTe' target='_blank' className='linkIcon'><i className=" fab fa-twitter fa-2x me-3 m-lg-3 m-sm-3 m-2" style={{color: "#55acee"}}></i></a>
            <a href='https://myanimelist.net/profile/Arrtea' target='_blank' className='linkIcon'><img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" className=' m-lg-3 m-sm-3 m-2' style={{borderRadius: '50%'}} height={35} width={35}></img></a>
            <a href='https://www.youtube.com/@arrtea' target='_blank' className='linkIcon'><i className=" fab fa-youtube fa-2x me-3 m-lg-3 m-sm-3 m-2" style={{color: "#ed302f"}}></i></a>
            <a href='https://www.twitch.tv/arrtea_' target='_blank' className='linkIcon'><i className=" fab fa-twitch fa-2x me-3 m-lg-3 m-sm-3 m-2" style={{color: "#6441a5"}}></i></a>
            <a href='mailto:arte.priv@protonmail.com' target='_blank' className='linkIcon'><i className=" fa fa-envelope fa-2x me-3 m-lg-3 m-sm-3 m-2" style={{color: "#dddddd"}}></i></a>

            {/* <a><i className="fab fa-facebook-f fa-2x me-3" style={{color: "#3b5998"}}></i></a> */}

            {/* <a><i className="fab fa-google fa-2x me-3" style={{color: "#dd4b39"}}></i></a> */}

            {/* <a><i className="fab fa-instagram fa-2x me-3" style={{color: "#ac2bac"}}></i></a> */}

            {/* <a><i className="fab fa-linkedin-in fa-2x me-3" style={{color: "#0082ca"}}></i></a> */}

            {/* <a><i className="fab fa-pinterest fa-2x me-3" style={{color: "#c61118"}}></i></a> */}

            {/* <a><i className="fab fa-vk fa-2x me-3" style={{color: "#4c75a3"}}></i></a> */}

            {/* <a><i className="fab fa-stack-overflow fa-2x me-3" style={{color: "#ffac44"}}></i></a> */}

            {/* <a><i className="fab fa-slack-hash fa-2x me-3" style={{color: "#481449"}}></i></a> */}

            {/* <a><i className="fab fa-dribbble fa-2x me-3" style={{color: "#ec4a89"}}></i></a> */}

            {/* <a><i className="fab fa-reddit-alien fa-2x me-3" style={{color: "#ff4500"}}></i></a> */}

            {/* <a><i className="fab fa-whatsapp fa-2x me-3" style={{color: "#25d366"}}></i></a> */}
            </section>
        </>
    );
}