import React from "react";
import './Header.css'
import '../index.css'
import ContactIcon from './icon/Group.png'
function Hearder() {

    return(
        <div className = 'Header'>
            <img src={ContactIcon} className ='ContactIcon' alt ='not find icon' />
            <h1 className ='MyContacts'>MyContacts</h1>
         
        </div>
    )
    
}

export default Hearder