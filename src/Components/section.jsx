import React from "react";
import Grid from '../assets/grid.png';

function Section (){
     return(
        <div className="section_">
            <div className="sect_">
                <div className="sect">
                 <h1 id="h1_">Metabnb NFTs</h1>
                 <p id="p_">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                </div>
                <div>
                    <button className="btn_1" id="learn_btn">Learn more</button>
                </div>
            </div>
            <div className="img_" id="grid">
                <img src={Grid}/>
            </div>
        </div>
     )
}
export default Section;