import React from "react";
import { Link } from "react-router-dom";

const LogIn = ({isLogOpen,setIsLogOpen}) => {

    return ( 
        <div className={`log-in-container + ${isLogOpen ? "show" : ""}`}>
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
        </div>
     );
}
 
export default LogIn;