import React from "react";
import Logo from '../assets/logo.png'

function Header (){
     return(
        <div className="Header">
          <img src={Logo}/>
          <nav>
            <ul>
                <a href='' >Home</a>
                <a href='' >Place to stay</a>
                <a href='' >NFT's</a>
                <a href='' >Community</a>
            </ul>
          </nav>
          <button className="btn_1">Connect wallet</button>
        </div>
     )
}
export default Header;