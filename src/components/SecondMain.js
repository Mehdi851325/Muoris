import React from "react";
import AppleBrandImg from '../img/brand icon/IMG_apple.JPG';
import SamBrandImg from '../img/brand icon/IMG_sam.JPG';
import JblBrandImg from '../img/brand icon/IMG_jbl.JPG';
import SonyBrandImg from '../img/brand icon/IMG_sony.JPG';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'



const SecondMain = () => {
    return ( 
        <div className="second-main">
            <div className="dec-second-main">
                <motion.div initial={{y:20}} className="line-second"></motion.div>
                <motion.div initial={{y:-40}} className="text-dec">
                    <div>
                    <h3>Fast, free delivery</h3>
                    <FontAwesomeIcon icon={faTruckFast} />
                    </div>
                    <div>
                    <h3>7 Days guarantee</h3>
                    <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div>
                    <h3>Guarantee of the originality</h3>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                </motion.div>
            </div>
            <div className="icon-second-main">
                <img src={AppleBrandImg}></img>
                <img src={SamBrandImg}></img>
                <img src={JblBrandImg}></img>
                <img src={SonyBrandImg}></img>
            </div>
        </div>
     );
}
 
export default SecondMain;