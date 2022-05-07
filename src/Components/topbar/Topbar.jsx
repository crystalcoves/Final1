import React from "react";
import "./topbar.css"
import Logo from '../Images/Elev8-logos_white.png';

export default function Topbar()
{
    return (
        <div className="topbar">
            <div className= "topbarWrapper">
                <div className="topLeft">
                    <img src={Logo} className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}