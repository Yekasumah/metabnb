import React from "react";
import Mt from "../assets/mt.png";
import Socialicon from "../assets/socialicon.png";
import Copyright from "../assets/copyright.png";


function Footer (){
     return(
        <div className="Footer">
            <div className="logo1">
             <img src={Mt}/>
             <img src={Socialicon}/>
             <img src={Copyright}/>
            </div>
            <div className="logo">
                <h2>Community</h2>
                <a href="">NFT</a>
                <a href="">Tokens</a>
                <a href="">Landlords</a>
                <a href="">Discord</a>
            </div>
            <div className="logo">
            <h2>Places</h2>
            <a href="">Castle</a>
            <a href="">Farms</a>
            <a href="">Beach</a>
            <a href="">Learn more</a>
            </div>
            <div className="logo">
            <h2>About us</h2>
            <a href="">Road map</a>
            <a href="">Creators</a>
            <a href="">Career</a>
            <a href="">Contact us</a>
            </div>
        </div>
     )
}
export default Footer;