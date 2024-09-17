import React from "react";
import "./Product.css";
import data from "../Store/Data";
import Card from "../components/Card";
function Product() {
  return (
    <section className="car-container">
      {/* <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="shoes"
        />
        <div className="card-details">
          <h3 className="card-title">shoes</h3>
          <section className="review">
            <FaStar  className="rating"/>
            <FaStar className="rating" />
            <FaStar className="rating"/>
            <FaStar className="rating" />
          
          <span className="total-review">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>$200
            </div>
            <div className="bag">
              <IoBagAdd  className="bg-icon"/>
            </div>
          </section>
        </div>
      </section> */}
      {data.map((datas,index)=>
      <Card key={index} data={datas}/>
      )}
    </section>
  );
}

export default Product;
