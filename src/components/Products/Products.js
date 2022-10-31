import React, { useEffect, useState } from "react";
import "./Products.css";
import Star from "../../images/star.png";
import { useDispatch } from "react-redux";
import { addedItem } from "../../features/cart/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addedItem());
  };

  return (
    <section>
      <h1>Products</h1>
      <div className="products-container">
        {Object.values(products).map((product) => {
          return (
            <div className="single-product" key={product.id}>
              <img
                className="product-image"
                src={product.productImage}
                alt=""
              />
              <p className="product-name">
                {product.productName.length > 40
                  ? product.productName.slice(0, 40) + " ..."
                  : product.productName}
              </p>
              <div className="price">
                <div className="rating">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
                <div className="price-container">
                  <p className="old-price">{product.oldPrice}/-</p>
                  <p className="new-price">{product.newPrice}/-</p>
                </div>
              </div>
              <div className="add-btn" onClick={() => handleAddToCart()}>
                ADD TO CART
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
