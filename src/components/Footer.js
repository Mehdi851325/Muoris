
import instagram from '../img/icon/instagram.svg'
import telegram from '../img/icon/telegram.svg'
import whatsapp from '../img/icon/whatsapp.svg'
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="top-footer">
                <div className="footer-first-col">
                    <h2 className="logo">
                    <Link to="/">MOURIS</Link>
                    </h2>
                </div>
                <div className="footer-sec-col">
                    <h3>Products</h3>
                    <h4>Mobile</h4>
                    <h4>Headphone</h4>
                    <h4>Accessories</h4>
                    <h4>Smart watch</h4>
                    <h4>New products</h4>
                    <h4>Best Sellers</h4>
                </div>
                <div className="footer-the-col">
                    <h3>Store</h3>
                    <h4>About Us</h4>
                    <h4>Contact us</h4>
                    <h4>FAQs</h4>
                </div>
                <div className="footer-four-col">
                    <h3>Muoris Mobile Store</h3>
                    <div className='footer-icon'>
                        <img src={instagram} alt={instagram}/>
                        <img src={telegram} alt={telegram}/>
                        <img src={whatsapp} alt={whatsapp}/>
                    </div>
                </div>
            </div>
            <div className="bot-footer">
                <div className='footer-line-left'></div>
                <div className='footer-line-right'></div>
            </div>
        </div>
     );
}
 
export default Footer;