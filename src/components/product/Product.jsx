import React from "react";
import "./product.css";
import Search from "../search/Search";
import ProductCard from "../product_card/ProductCard";

const Product = () => {
  return (
    <div className="product__container">
      <div className="product__container-search_bar"><Search /></div>
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
        <hr />
        <details className="product__container-search_result-dropdown">
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
          <hr />
        <details className="product__container-search_result-dropdown">
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
            <ProductCard title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
            <ProductCard title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
            <ProductCard title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
            <ProductCard title="Round neck cotton tee" crossPrice="Rs 599" newPrice="Rs 549"/>
        </div>
      </div>
    </div>
  );
};

export default Product;
