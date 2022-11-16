import React from "react";
import Logo from '../assets/logo.png';
import Side from '../assets/Side.png'

function Hero (){
     return(
        <div className="hero">
            <div className="rent_">
                <div>
                <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                </div>
                <div>
                    <input className="input_" type='text' placeholder="Search for location"/>
                    <button className="btn_1" id="search_btn">Search</button>
                </div>
            </div>
            <div className="img_">
                <img src={Side}/>
            </div>
        </div>
     )
}
export default Hero;