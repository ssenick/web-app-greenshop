import React from 'react';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            
            <section className="footer__join join">
               <div className="join__body">
                  <div className="join__items">
                     <article className="join__item item-join">
                        <div className="item-join__image">
                           <img src="../assets/img/join/01.svg" alt="icon"/>
                        </div>
                        <h5 className="item-join__title">Garden Care</h5>
                        <p className="item-join__descr">We are an online plant shop offering a wide range of cheap and
                           trendy plants.</p>
                     </article>
                     <article className="join__item item-join">
                        <div className="item-join__image">
                           <img src="../assets/img/join/02.svg" alt="icon"/>
                        </div>
                        <h5 className="item-join__title">Plant Renovation</h5>
                        <p className="item-join__descr">We are an online plant shop offering a wide range of cheap and
                           trendy plants.</p>
                     </article>
                     <article className="join__item item-join">
                        <div className="item-join__image">
                           <img src="../assets/img/join/03.svg" alt="icon"/>
                        </div>
                        <h5 className="item-join__title">Watering Graden</h5>
                        <p className="item-join__descr">We are an online plant shop offering a wide range of cheap and
                           trendy plants.</p>
                     </article>
                  </div>
                  <form action="#" className="join__form form-join">
                     <label className="form-join__title">Would you like to join newsletters?</label>
                     <div className="form-join__line">
                        <input data-required="email" autoComplete="off" type="text" name="form[]"
                               placeholder="enter your email address..." className="form-join__input"/>
                           <button type="submit" className="form-join__button">Join</button>
                     </div>
                     <p className="form-join__text">We usually post offers and challenges in newsletter. We’re your
                        online houseplant destination. We offer a wide range of houseplants and accessories shipped
                        directly from our (green)house to yours!</p>
                  </form>
               </div>
            </section>
            
            
            <section className="footer__contacts contacts-footer">
               <a href="#" className="contacts-footer__logo"><img src="../assets/img/logo.svg" alt="image logo"/></a>
               <div className="contacts-footer__item"><img src="../assets/img/svg/location.svg" alt=""/> 70 West Buckingham Ave.
                  Farmingdale, NY 11735</div>
               <a href="mailto:contact@greenshop.com"
                  className="contacts-footer__item contacts-footer__link _icon-message-mail"> contact@greenshop.com</a>
               <a href="tel:+8801911717490" className="contacts-footer__item contacts-footer__link "><img
                  src="../assets/img/svg/calling.svg" alt=""/> +88 01911 717 490</a>
            </section>
            
            
            <div className="footer__bottom bottom-footer">
               <div className="bottom-footer__body">
                  <nav data-spollers="539.98,max" className="bottom-footer__menu menu-footer">
                     <div className="menu-footer__column">
                        <button type="button" data-spoller="" className="menu-footer__title" tabIndex="-1">My Account
                        </button>
                        <ul className="menu-footer__list">
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">My Account</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Our Stories</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Contact us</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Career</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Specials</a>
                           </li>
                        </ul>
                     </div>
                     <div className="menu-footer__column">
                        <button type="button" data-spoller="" className="menu-footer__title"
                                tabIndex="-1">Help &amp; Guide
                        </button>
                        <ul className="menu-footer__list">
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Helo Center</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">How to Buy</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Shipping &amp; Delivery</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Product Policy</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">How to Return</a>
                           </li>
                        </ul>
                     </div>
                     <div className="menu-footer__column">
                        <button type="button" data-spoller="" className="menu-footer__title" tabIndex="-1">Categories
                        </button>
                        <ul className="menu-footer__list">
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">House Plants</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Potter Plants</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Seeds</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Small Plants</a>
                           </li>
                           <li className="menu-footer__item">
                              <a href="#" className="menu-footer__link">Accessories</a>
                           </li>
                        </ul>
                     </div>
                     <div className="menu-footer__column menu-footer__column_socials">
                        <button type="button" data-spoller="" className="menu-footer__title" tabIndex="-1">Social
                           Media
                        </button>
                        <div className="menu-footer__social-links">
                           <div className="menu-footer__block-socials">
                              <a href="#" className="menu-footer__social-link ">
                                 <svg width="8" height="16" viewBox="0 0 8 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z"/>
                                 </svg>
                              </a>
                              <a href="#" className="menu-footer__social-link">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z"/>
                                 </svg>
                              </a>
                              <a href="#" className="menu-footer__social-link ">
                                 <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M5.03186 13.0036C11.0699 13.0036 14.3718 8.00118 14.3718 3.66357C14.3718 3.52144 14.3689 3.38005 14.3624 3.2392C15.0033 2.77588 15.5605 2.19756 16 1.53953C15.4118 1.80085 14.7789 1.97682 14.1149 2.05616C14.7926 1.64981 15.313 1.0067 15.5585 0.24021C14.9241 0.616357 14.2217 0.889688 13.4742 1.03709C12.8749 0.399076 12.0218 0 11.0779 0C9.26483 0 7.79464 1.4702 7.79464 3.28233C7.79464 3.54001 7.82357 3.79041 7.87962 4.0308C5.1516 3.89377 2.73239 2.58735 1.11352 0.601253C0.831273 1.08622 0.668767 1.64999 0.668767 2.25106C0.668767 3.38988 1.24837 4.3953 2.12968 4.98363C1.59121 4.96707 1.08531 4.81894 0.642926 4.57291C0.642198 4.58656 0.642198 4.60039 0.642198 4.61476C0.642198 6.2047 1.77392 7.53204 3.27578 7.83285C3.00008 7.90801 2.71001 7.94841 2.41047 7.94841C2.19901 7.94841 1.99338 7.9273 1.79339 7.88927C2.21121 9.19332 3.42318 10.1425 4.86007 10.1693C3.73636 11.0499 2.32094 11.5745 0.783049 11.5745C0.518272 11.5745 0.256952 11.5594 0 11.529C1.45273 12.46 3.17769 13.0036 5.03186 13.0036Z"/>
                                 </svg>

                              </a>
                              <a href="#" className="menu-footer__social-link ">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z"/>
                                 </svg>

                              </a>
                              <a href="#" className="menu-footer__social-link ">
                                 <svg width="19" height="14" viewBox="0 0 19 14" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15.1653 4.42995L15.168 4.43062L15.1667 4.4303L15.1653 4.42995ZM4.32444 4.35686C6.91762 4.19575 11.7483 4.19575 14.3415 4.35686L14.3422 4.3644C14.4047 4.99716 14.4299 5.84143 14.4299 7.01915C14.4299 8.18238 14.4053 9.02689 14.3441 9.66498C11.6962 9.77026 6.97129 9.77027 4.32282 9.66502C4.261 9.03324 4.23602 8.19137 4.23602 7.01915C4.23602 5.84143 4.26123 4.99716 4.32369 4.3644L4.32444 4.35686ZM15.2422 9.61106C15.2422 9.61106 15.2405 9.61148 15.237 9.61215L15.2422 9.61106ZM0 7.01915C0 11.8412 0.388873 13.63 3.42208 13.8633C6.22196 14.0189 12.4439 14.0189 15.2438 13.8633C18.277 13.7078 18.6659 11.8412 18.6659 7.01915C18.6659 2.19713 18.277 0.408316 15.2438 0.174993C12.4439 -0.0583309 6.22196 -0.0583309 3.42208 0.174993C0.388873 0.408316 0 2.19713 0 7.01915ZM9.78228 8.73886C8.50388 9.37806 6.99973 8.44845 6.99973 7.01915C6.99973 5.58986 8.50388 4.66025 9.78228 5.29945C11.1994 6.008 11.1994 8.0303 9.78228 8.73886Z"/>
                                 </svg>

                              </a>
                           </div>
                        </div>
                        <h3 className="menu-footer__title menu-footer__title_payments">We accept</h3>
                        <div className="menu-footer__payments">
                           <div className="menu-footer__block-payments">
                              <a href="#" className="menu-footer__payment-link"><img src="../assets/img/svg/paypal-logo.svg"
                                                                                     alt="paypal"/></a>
                              <a href="#" className="menu-footer__payment-link"><img src="../assets/img/svg/mastercard-logo.svg"
                                                                                     alt="mastercart"/></a>
                              <a href="#" className="menu-footer__payment-link"><img src="../assets/img/svg/visa.svg" alt="visa"/></a>
                              <a href="#" className="menu-footer__payment-link"><img
                                 src="../assets/img/svg/american-express-logo.svg" alt="american-express-logo"/></a>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>

            </div>
            
            <div className="footer__copyright">
               © 2021 GreenShop. All Rights Reserved.
            </div>
         </div>
      </footer>
   );
};

export default Footer;