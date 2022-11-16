import React from "react";
import Mask from "../assets/mask.png";
import Mbtoken from "../assets/mbtoken.png";
import Opensea from "../assets/opensea.png"

function Banner (){
     return(
        <div className="Banner">
         <img src={Mbtoken}/>
         <img src={Mask}/>
         <img src={Opensea}/>
        </div>
     )
}
export default Banner;