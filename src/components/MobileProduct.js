import React from "react";
import { Link } from "react-router-dom";

const MobileProduct = ({
  setSaveProduct,
  url,
  appleProduct,
  id,
  image,
  name,
  memory,
  color1,
  color2,
  color3,
  mproducts,
}) => {
  const addHandler = () => {
    const addToCart = mproducts.filter((state) => state.id === id);
    setSaveProduct(addToCart[0]);
    addToLocal(addToCart[0]);
  };
  const addToLocal = (addToCart) => {
    let carts;
    if (localStorage.getItem("carts") === null) {
      carts = [];
    } else {
      carts = JSON.parse(localStorage.getItem("carts"));
    }
    carts.push(addToCart);
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  return (
    <div className="mobile-products">
      <Link to={`${url}`}>
        <div className="product">
          <img src={image} alt="phone" />
          <div className="title-product">
            <div className="name-product">
              <h3>{name}</h3>
              <h3>{memory}</h3>
            </div>
            <div className="dec-product">
              <h3>{appleProduct.price}</h3>
              <div className="btn-color">
                <button
                  className="btn-color-product"
                  style={{ backgroundColor: `${color1}` }}
                ></button>
                <button style={{ backgroundColor: `${color2}` }}></button>
                <button style={{ backgroundColor: `${color3}` }}></button>
              </div>
            </div>
            <div className="add-cart">
              <button onClick={addHandler}>add</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobileProduct;
