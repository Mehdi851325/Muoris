import React from "react";
import SecondMain from "./SecondMain";
import Categories from "./Categories";
import {motion} from 'framer-motion';




 const Main = () => {
    return ( 
        <div>
        <div className="main">
            <motion.div 
            animate={{ x:0 , transition:{duration:1.25} }} 
            initial={{ x:-750 }} 
            className="black-block">
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
                animate={{ x:-60,opacity:1 , transition:{duration:2.5, ease:'easeOut'}}}
                ><span>M</span>OURIS</motion.h1>
                <motion.div 
                className="line-main-bot"
                initial={{ x:-870}}
                animate={{x:0, transition:{duration:1.25}}}
                ></motion.div>
            </div>
        </div>
        <SecondMain />
        <Categories />
        </div>
     );
 }
  
 export default Main;