import React, { useState } from "react";
import MobileProduct from "./MobileProduct";
import { MobileState } from "../mobileState";
import { Link } from "react-router-dom";

const MobileSection = () => {
  
  const [mproducts, setmproducts] = useState(MobileState()[0].appleBrand);
  const [saveProduct, setSaveProduct] = useState(null);
  return (
    <div className="mobile-section">
      <div className="btn-mobile-sction">
        <button className="active-section">APPLE</button>
        <button><Link to='/mobile/samsung'> SAMSUNG</Link></button>
        <button>XIAOMI</button>
      </div>
      <div className="mobile-section-apple">
        {mproducts.map((appleProduct) => (
          <MobileProduct
            appleProduct={appleProduct}
            key={appleProduct.id}
            id={appleProduct.id}
            url={appleProduct.url}
            image={appleProduct.Img}
            name={appleProduct.name}
            memory={appleProduct.memory}
            color1={appleProduct.color1}
            color2={appleProduct.color2}
            color3={appleProduct.color3}
            mproducts={mproducts}
            saveProduct={saveProduct}
            setSaveProduct={setSaveProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSection;
