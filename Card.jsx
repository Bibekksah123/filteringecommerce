import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";


function Card({data}) {
 
  return (
    <section className="card">
    <img
      src={data.img}
      alt="shoes"
    />
    <div className="card-details">
      <h3 className="card-title">{data.title}</h3>
      <section className="review">
        <FaStar  className="rating"/>
        <FaStar className="rating" />
        <FaStar className="rating"/>
        <FaStar className="rating" />
      
      <span className="total-review">{data.reviews}</span>
      </section>
      <section className="card-price">
        <div className="price">
          <del>{data.prevPrice}</del>{data.newPrice}
        </div>
        <div className="bag">
          <IoBagAdd  className="bg-icon"/>
        </div>
      </section>
    </div>
  </section>
   

  )
}

export default Card