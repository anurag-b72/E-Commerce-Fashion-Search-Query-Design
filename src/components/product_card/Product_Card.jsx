import "./product_card.css";
import React from "react";
import img_1 from "../../assets/img-1.jpg"

function Product_Card(props) {
  return (
    <div className="card__container">
      <div className="card__container-image">
        <div className="card__container-image_wishlist"><box-icon name='heart' type='solid' color='#FF0202' ></box-icon></div>
        <img src={img_1} alt="product_img" />
        <div className="card__conatiner-image_hover">
            <p>View Product</p>
        </div>
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

export default Product_Card;
