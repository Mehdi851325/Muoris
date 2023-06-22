import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const show = {
    opacity: 1,
    display: "flex"
  };
  
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };

const LogIn = ({isLogOpen,setIsLogOpen}) => {

    return ( 
        <motion.div className='log-in-container' animate={isLogOpen? show: hide}>
            <div className="log-in">
                <div className="log-left">
                    <h2>MOURIS</h2>
                </div>
                <div className="log-right">
                    <div>
                        <h3>Log in</h3>
                    </div>
                    <div className="input-log">
                        <input></input>
                        <input></input>
                        <button>Log in</button>
                    </div>
                    <div>
                        <button 
                        onClick={() => {setIsLogOpen(false);}} 
                        className="sign-btn"><Link to='/signup'>Sign up</Link> </button>
                    </div>
                <button onClick={() => {
            setIsLogOpen(false);
          }} className="close-btn">X</button>
                </div>
            </div>
        </motion.div>
     );
}
 
export default LogIn;