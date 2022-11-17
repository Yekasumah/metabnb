import React from "react";
import "./footer.css";
import footerlogo from '../../assets/images/footerlogo.png';
import facebook from '../../assets/images/facebook (6).png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter (3).png';

const footer = () => {
    return(

      <footer>
          <div className="columns">
              <div className="foot-col1">
              <img src={footerlogo} alt="logo" className="foot-logo" />
                 <div className="icons">
                   <img src={facebook} alt="logo" className="fb-icon" />
                   <img src={instagram} alt="logo" className="ins-icon" />
                   <img src={twitter} alt="logo" className="twi-icon" />
                 </div>
                 <h6>© 2022 Metabnb</h6>
              </div>
              <div className="foot-col2">
                <ul>
                  <li className="first">Community</li>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Lanlords</li>
                  <li>Discord</li>
                </ul>
              </div>
              <div className="foot-col3">
                <ul>
                  <li className="first">Places</li>
                  <li>Castle</li>
                  <li>Farms</li>
                  <li>Beach</li>
                  <li>Learn more</li>
                </ul>
              </div>
              <div className="foot-col4">
                <ul>
                  <li className="first">About us</li>
                  <li>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact us</li>
                </ul>
              </div>
          </div>
      </footer>

        )
}

export default footer;