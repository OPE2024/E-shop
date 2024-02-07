import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>
          An eshop specializing in women's, men's, and children's clothing offers a wide range of fashion options for customers of 
          all ages and genders. The store's product line may include everything from casual, everyday wear to formal attire, making 
          it a convenient one-stop-shop for customers looking to update their wardrobes. 
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            +2347089492600
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Eshop</span>
          <span className="copyright">
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
