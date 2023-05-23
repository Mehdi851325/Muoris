import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile,faHeadphones,faBolt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav id="nav" >
            <ul className="nav-icon">
                <li><Link to='/mobile/apple'><FontAwesomeIcon icon={faMobile} /></Link></li>
                <li><Link to='/headphone'><FontAwesomeIcon icon={faHeadphones} /></Link></li>
                {/* <li><Link to='/smartwatch'><FontAwesomeIcon icon={faClock} /></Link></li> */}
                <li><Link to='/smartwatch'><img src="https://img.icons8.com/glyph-neue/64/null/apple-watch-apps.png"/></Link></li>
                <li><Link to='/charger'><FontAwesomeIcon icon={faBolt} /></Link></li>
            </ul>
        </nav>
     );
}
 
export default Nav;