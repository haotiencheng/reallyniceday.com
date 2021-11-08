import React from 'react';
import './Loader.css'
import logo from './logo.png'

function Loader() {
    return(
    <div className="flex flex-col transition-opacity">
        <div>
            <div id="loader-wrapper" className="animate-pulse-slow">
                <div id="loader" className="flex h-screen items-center justify-center">
                    <img src={logo} alt="logo" className="w-1/6 animate-spin-slow"/>
                </div>
            </div>
        </div>
    </div>)
}

export default Loader