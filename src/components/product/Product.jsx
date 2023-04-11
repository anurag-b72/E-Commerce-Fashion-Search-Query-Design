import React from "react";
import "./product.css";
// import Search from "../search/Search";
import Product_Card from "../product_card/Product_Card";
// import { img_1 } from "../../assets/img-1.jpg"
// import { img_2} from "../../assets/img-2.jpg"
// import { img_3 } from "../../assets/img-3.jpg"

const Product = () => {
  return (
    <div className="product__container">
      <div className="product__container-search_bar">{/* <Search /> */}</div>
      <h3 className="product__container-heading">Search Results</h3>
      <div className="product__container-result_output">
        <div className="product__container-search_result">
          <details>
            <summary>BRAND</summary>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">Mango</label> <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">H&M</label>
        </details>
        <details>
            <summary>PRICE RANGE</summary>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">Under 500</label> <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">1000 To 3000</label>
          </details>
        <details>
            <summary>RATINGS</summary>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">
            <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
            <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
            <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
            <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
            <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
            </label>
            <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>{/* Yellow */}
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
                
            </label>
            <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
            </label>
            <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>{/* Grey */}
            </label>
            <br></br>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="true"
            />
            <label for="myCheckbox">
                <box-icon name='star' type='solid' color='#ead41c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>
                <box-icon name='star' type='solid' color='#8c8c8c' ></box-icon>
            </label>
          </details>
        </div>

        <div className="product__container-product_cards">
            <Product_Card title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
            <Product_Card title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
            <Product_Card title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
        </div>
      </div>
    </div>
  );
};

export default Product;
