import React from "react";
import { useLocation } from "react-router-dom";
import { MobileState } from "../mobileState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/mobile/apple/");
  const pathIdNum = pathId[1];
  const mobileProducts = MobileState()[0].appleBrand;

  const filterUrl = mobileProducts.filter(
    (mobileproduct) =>
      mobileproduct.url.split("/mobile/apple/")[1] === pathIdNum
  );
  return (
    <div className="product-detail">
      <div className="img-product">
        <div className="mini-img-product">
          <img src={filterUrl[0].Img}/>
          <img src={filterUrl[0].Img}/>
        </div>
        <img src={filterUrl[0].Img}/>
      </div>
      <div className="product-config">
        <div>
          <h2 className="name-product">Apple {filterUrl[0].name}</h2>
          <h2 className="price-product">{filterUrl[0].price}</h2>
        </div>
        <div>
            <h2 className="memory-product">Memory : {filterUrl[0].memory}</h2>
            <h2 className="memory-product"> 18 mounth guarantee <FontAwesomeIcon icon={faShieldHalved} /></h2>
        </div>
          <div >
              <div>
                <h2 className="memory-product"> select color : </h2>
              </div>
              <div className="btn-color-product">
                <button style={{ backgroundColor: `${filterUrl[0].color1}` }}></button>
                <button style={{ backgroundColor: `${filterUrl[0].color2}` }}></button>
                <button style={{ backgroundColor: `${filterUrl[0].color3}` }}></button>
              </div>
          </div>
          <div>
            <button className="btn-add-cart">Add to cart</button>
          </div>
      </div>
    </div>
  );
};

export default Products;
