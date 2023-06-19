import React from "react";
import apple from "../img/mobile/Apple iphone 13.webp";
import beats from '../img/head/Beats Studio3.jpg';
import watch from '../img/watch/IMG_1630.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';


const Categories = () => {
    return ( 
        <div className="categories">
            <h2>CATEGORIES</h2>
            <div className="mobile-cate cate">
                <div className="img-cate">
                <img src={apple} alt="iphone"></img>
                </div>
                <div className="dec-cate">
                <h3>Mobile</h3>
                <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. </p>
                <button>VIEW CATEGORIES <button><FontAwesomeIcon icon={faArrowRight} /></button></button>
                </div>
            </div>
            <div className="watch-cate cate">
                <div className="dec-cate">
                    <h3>Smart watch</h3>
                    <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. </p>
                    <button>VIEW CATEGORIES <button><FontAwesomeIcon icon={faArrowRight} /></button></button>
                </div>
                <div className="img-cate">
                <img src={watch} alt="watch"></img>
                </div>
            </div>
            <div className="headphone-cate cate">
                <div className="img-cate">  
                <img src={beats} alt="headphone"></img>
                </div>
                <div className="dec-cate">
                    <h3>Headphone</h3>
                    <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.</p>
                    <button>VIEW CATEGORIES<button><FontAwesomeIcon icon={faArrowRight} /></button></button>
                </div>
            </div>
        </div>
     );
}
 
export default Categories;