import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Header() {
    return (
        <>
            <header>
                <div class="px-3 py-2" style={{background: "#f0bd6c", color: "black"}}>
                    <div class="container ml-lg-4 p-lg-2">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <h2 class="d-flex shadow p-2 align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none display-lg-6" style={{color: "black", fontFamily: "monospace"}}>
                            ARRTEA.IS-A.DEV
                            </h2>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    );
}