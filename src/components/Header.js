import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Header = ({setIsLogOpen,setIsOpenNav,isOpenNav}) => {


  return (
    <>
      <div className="header">
        <div className="btn-main-left">
          <button onClick={()=>setIsOpenNav(!isOpenNav)} className="ham-btn">
            <div className="ham-line-1"></div>
            <div className="ham-line-2"></div>
            <div className="ham-line-3"></div>
          </button>
          <button className="bag-btn">
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
          <button onClick={() => {
            setIsLogOpen(true);
          }} className="user-btn">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
          <ul className="pro-btn-header">
            <li><Link to='/mobile/apple'>Mobile</Link></li>
            <li><Link to='/headphone'>Headphone</Link></li>
            <li><Link to='/smartwatch'>Smart watch</Link></li>
            <li><Link to='/charger'>Accessories</Link></li>
          </ul>
        <div className="btn-main-right">
          <div className="package-logo">
            <h1 id="logo">
              <Link to="/">MOURIS</Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="fake-header">
      </div>
    </>
  );
};

export default Header;
