import React from "react";
import SecondMain from "./SecondMain";
import Categories from "./Categories";
import {motion} from 'framer-motion';
import { MobileState } from "../mobileState";
import PopularPro from "./PopularPro";
import PopularXiaomi from "./PopularXiaomi";
import { Link } from "react-router-dom";

const show = {
    opacity: 1,
    display: "block"
  };
  
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };

 const Main = ({isOpenNav}) => {
    const popularProduct = MobileState()[0].appleBrand.splice(5);
    const xiaomiData = MobileState()[2].xiaomiBeand.splice(5);
    console.log(xiaomiData);
    return ( 
        <div>
        <div className="main">
            <motion.div 
            animate={{ x:0 , transition:{duration:1.25} }} 
            initial={{ x:-750 }} 
            className="black-block" >
                <motion.div className="pop-nav-mobile" animate={isOpenNav ? show : hide}>
                    <ul>
                    <li><Link to='/mobile/apple'>Mobile</Link></li>
                    <li><Link to='/headphone'>Headphone</Link></li>
                    <li><Link to='/smartwatch'>Smart watch</Link></li>
                    <li><Link to='/charger'>Accessories</Link></li>
                    </ul>
                </motion.div>
            </motion.div>
            <div className="pack-main">
                <motion.div 
                className="line-main-top" 
                initial={{ x:-870}}
                animate={{x:0, transition:{duration:1.25}}}
                ></motion.div>
                <motion.h1 
                className="logo-main"
                initial={{ x:-59,opacity: 0}}
                animate={{ x:-60,opacity:1 , transition:{duration:2, ease:'easeOut'}}}
                ><span>M</span>OURIS</motion.h1>
                <motion.div 
                className="line-main-bot"
                initial={{ x:-870}}
                animate={{x:0, transition:{duration:1.25}}}
                ></motion.div>
            </div>
        </div>
        <SecondMain />
        <div className="popular-main">
            <h2>Apple Smart Phone</h2>
            <div className="popular-container">
                {popularProduct.map(item =>(
                    <PopularPro 
                    poster={item.Img}
                    title={item.name}
                    memory={item.memory}
                    price={item.price}
                    key={item.id}
                    url={item.url}
                    />
                ))}
            </div>
            <div className="container-btn-see">
            <button className="see-more-btn">see more</button>
            </div>
        </div>
        <div className="popular-main">
            <h2>Xiaomi Smart Phone</h2>
            <div className="popular-container">
                {xiaomiData.map(item =>(
                    <PopularXiaomi 
                    poster={item.Img}
                    title={item.name}
                    memory={item.memory}
                    price={item.price}
                    key={item.id}
                    url={item.url}
                    />
                ))}
            </div>
            <div className="container-btn-see">
            <button className="see-more-btn">see more</button>
            </div>
        </div>
        <Categories />
        </div>
     );
 }
  
 export default Main;