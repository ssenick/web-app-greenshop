import React from 'react';
import {logo} from "../../assets/img";
const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <a href="" className="header__logo">
               <img src={logo} alt="Logo"/>
            </a>
            <div className="header__menu menu">
               <nav className="menu__body">
                  <ul className="menu__list">
                     <li className="menu__item">
                        <a href="index.html" className="menu__link  ">Home</a>
                     </li>
                     <li className="menu__item">
                        <a href="product-view.html" className="menu__link ">Shop</a>
                     </li>
                     <li className="menu__item">
                        <a href="product-checkout.html" className="menu__link  ">Checkout</a>
                     </li>
                     <li className="menu__item">
                        <a href="product-cart.html" className="menu__link ">Cart</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="header__actions actions-header">
               <div className="actions-header__search search-form">
                  <button  type="button" className="search-form__icon _icon-search"></button>
               </div>
               <div className="actions-header__cart cart-header">
                  <a href="product-cart.html" className="cart-header__icon _icon-cart"><span>6</span></a>
                  <div className="cart-header__body">
                     <ul className="cart-header__list cart-list"></ul>
                  </div>
               </div>
               <div className="actions-header__login login-header">
                  <a data-popup="#login" href="#" className="login-header__btn">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1601 10.1006H8.12598" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                           d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416"
                           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     Login
                  </a>
               </div>
            </div>
            <button type="button" className="header__icon icon-menu"><span></span></button>

         </div>
      </header>
   );
};

export default Header;