import "./product_card.css";
import React, { useState } from "react";
import img_1 from "../../assets/img-1.jpg";

function ProductCard(props) {

    // Hover Effect
//   const [showProduct, setShowProduct] = useState(false);
//   function handleMouseOver() {
//     return setShowProduct(false);
//   }

  const [hovered, setHovered] = useState(false);
  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

//   Wishlist Toggle Color Change
  const red = "#858585";
  const grey = "#FF0202"
  const [color, setColor] = useState(red)
  function handleClick () {
        if (color === red) {
            setColor(grey)
        } else {
            setColor(red)
        }
  }

  return (
    <div className="card__container">
      <div className="card__container-image">
        <div className="card__container-image_wishlist" onClick={handleClick}>
          <box-icon name="heart" type="solid" color={color}></box-icon>
        </div>
        <img src={img_1} alt="product_img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        {hovered && <div
          className="card__container-image_hover"
        //   style={{ display: showProduct ? "block" : "none" }}
        >
          <p>View Product</p>
        </div>}
      </div>
      <div className="card__container-title">{props.title}</div>
      <div className="card__container-price_section">
        <div className="card__container-price_crossed">{props.crossPrice}</div>
        <div className="card__container-price_new">{props.newPrice}</div>
      </div>
      <div className="card__container-review_section">
        <div className="card__container-star">
          <box-icon name="star" type="solid" color="#ead41c"></box-icon>
          <box-icon name="star" type="solid" color="#ead41c"></box-icon>
          <box-icon name="star" type="solid" color="#ead41c"></box-icon>
          <box-icon name="star" type="solid" color="#ead41c"></box-icon>
          <box-icon name="star" type="solid" color="#ead41c"></box-icon>
        </div>
        <div className="card__container-users">
          <p>(210)</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
