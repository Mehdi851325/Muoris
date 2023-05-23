import React, { useState } from "react";
import { MobileState } from "../mobileState";
import { Link } from "react-router-dom";

const SamsungProduct = () => {
    const [samProducts, setSamProduct] = useState(MobileState()[1].samsungBrand);
    const id = samProducts.id;
    const addHandler = ()=>{
        const addToCart = samProducts.filter((state) => state.id === id)
        addToLocal(addToCart[0])
    }
    const addToLocal = (addToCart)=>{
        let carts;
        if (localStorage.getItem('carts') === null) {
            carts=[];
        } else {
            carts= JSON.parse(localStorage.getItem('carts'))
        }
        carts.push(addToCart)
        localStorage.setItem('carts', JSON.stringify(carts))
    }

    return ( 
        <>
            <div className="btn-mobile-sction">
                <button><Link to='/mobile/apple'> APPLE</Link></button>
                <button className="active-section"><Link to='/mobile/samsung'> SAMSUNG</Link></button>
                <button>XIAOMI</button>
            </div>
            <div className="mobile-section-apple">
            {samProducts.map((samProduct)=>(
            <div className="mobile-products">
                <Link to={`${samProduct.url}`}>
                    <div className="product">
                    <img src={samProduct.Img} alt='phone'/>
                    <div className="title-product">
                        <div className="name-product">
                            <h3>{samProduct.name}</h3>
                            <h3>{samProduct.memory}</h3>
                        </div>
                        <div className="dec-product">
                            <h3>{samProduct.price}</h3>
                            <div className="btn-color">
                                <button className="btn-color-product" style={{backgroundColor: `${samProduct.color1}`}}></button>
                                <button style={{backgroundColor: `${samProduct.color2}`}}></button>
                                <button style={{backgroundColor: `${samProduct.color3}`}}></button>
                            </div>
                        </div>
                        <div className="add-cart">
                            <button onClick={addHandler} >add</button>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            
            ))} 
        </div>
        </>
     );
}
 
export default SamsungProduct;