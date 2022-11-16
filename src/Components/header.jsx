import React, {useState} from "react";
import Logo from '../assets/logo.png';
import Modal from '../Components/modal'

function Header (){
  const [openModal, setOpenModal] = useState(false);
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
          <button onClick={() => setOpenModal(true)} className="btn_1">Connect wallet</button>
          <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
        </div>
     )
}
export default Header;



   