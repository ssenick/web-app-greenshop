import Header from "./components /Header/Header";
import './style.css'
import Footer from "./components /Footer";

function App() {
   return (
      <div className="wrapper">
         <Header/>
         <main className="page ">

            <section className="page__main main">
               <div className="main__container">
                  <div className="main__wrapper">
                     <div className="main__info info-main">
                        <h4 className="info-main__subtitle">Welcome to GreenShop</h4>
                        <h1 id="type" className="info-main__title">Let’s Make a<br/> Better <span>Planet</span></h1>
                        <p className="info-main__text">We are an online plant shop offering a wide range of cheap and
                           trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite
                           plants!</p>
                        <div data-da=".main__wrapper,768," className="info-main__footer">
                           <a href="#" className="info-main__btn button">SHOP NOW</a>
                        </div>
                     </div>
                     <div className="main__slider slider-main">
                        <div className="slider-main__body swiper">
                           <div className="slider-main__wrapper swiper-wrapper">
                              <div className="slider-main__slide swiper-slide">
                                 <div className="slider-main__image-ibg_contain ">
                                    <img src="./assets/img/main/main-slider-image-01.png" alt="image slider big"/>
                                 </div>
                              </div>
                              <div className="slider-main__slide swiper-slide">
                                 <div className="slider-main__image-ibg_contain ">
                                    <img src="./assets/img/main/main-slider-image-02.png" alt="image slider big"/>
                                 </div>
                              </div>
                              <div className="slider-main__slide swiper-slide">
                                 <div className="slider-main__image-ibg_contain ">
                                    <img src="./assets/img/main/main-slider-image-03.png" alt="image slider big"/>
                                 </div>
                              </div>
                              <div className="slider-main__slide swiper-slide">
                                 <div className="slider-main__image-ibg_contain ">
                                    <img src="./assets/img/main/main-slider-image-04.png" alt="image slider big"/>
                                 </div>
                              </div>
                              <div className="slider-main__slide swiper-slide">
                                 <div className="slider-main__image-ibg_contain ">
                                    <img src="./assets/img/main/main-slider-image-05.png" alt="image slider big"/>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div data-da=".main__slider,768," className="main__pagination pagination swiper-pagination"></div>
                  </div>
               </div>
            </section>


            <section className="page__catalog catalog">
               <div className="catalog__container">
                  <div className="catalog__wrapper">
                     <aside className="catalog__aside aside-catalog">
                        <form action="#" className="aside-catalog__filter menu-aside">
                           <div className="menu-aside__catalog">
                              <div className="menu-aside__label">Categories</div>
                              <ul className="menu-aside__list">
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link _active">House Plants<span>(33)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Potter Plants<span>(12)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Seeds<span>(65)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Small Plants<span>(39)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Big Plants<span>(23)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Succulents<span>(17)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Trerrariums<span>(19)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Gardening<span>(13)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Accessories<span>(18)</span></a>
                                 </li>
                              </ul>
                           </div>
                           <div className="menu-aside__ranges">
                              <div className="menu-aside__label">Price Range</div>
                              <div className="menu-aside__range range">
                                 <div id="range" className="range__body"></div>
                                 <div className="range__price">
                                    Price: <span><span id="rangeLowValue" className="range__start"></span> - <span
                                    id="rangeHightValue" className="range__end"></span></span>
                                 </div>
                                 <button type="button" className="range__button button">Filter</button>
                              </div>
                           </div>
                           <div className="menu-aside__size">
                              <div className="menu-aside__label">Size</div>
                              <ul className="menu-aside__list">
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Small<span>(119)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Mediums<span>(86)</span></a>
                                 </li>
                                 <li className="menu-aside__item">
                                    <a href="#" className="menu-aside__link">Large<span>(78)</span></a>
                                 </li>
                              </ul>
                           </div>
                        </form>
                        <a href="#" className=" aside-catalog__banner banner-aside">
                           <div className="banner-aside__sale-img">
                              <img src="./assets/img/aside/sale.svg" alt="image super sale"/>
                           </div>
                           <div className="banner-aside__text">UP TO 75% OFF</div>
                           <div className="banner-aside__image-ibg_contain">
                              <img src="./assets/img/aside/banner.png" alt="image product"/>
                           </div>
                           <div className="banner-aside__decors">
                              <div className="banner-aside__decor banner-aside__decor_1 ">
                                 <img src="./assets/img/aside/dector/1.png" alt="dector image"/>
                              </div>
                           </div>
                        </a>
                     </aside>
                     <div className="catalog__body body-catalog">
                        <div className="body-catalog__header header-body-catalog">
                           <div className="header-body-catalog__mobile-btn">
                              <button type="button"
                                      className="header-body-catalog__button button  button_icon">Filter <span
                                 className="_icon-filter"><span>ON</span></span></button>
                           </div>

                           <div className="header-body-catalog__filter filter">
                              <ul className="filter__list">
                                 <li className="filter__item"><a href="#" className="filter__link _active">All Plant</a>
                                 </li>
                                 <li className="filter__item"><a href="#" className="filter__link ">New Arrivals</a>
                                 </li>
                                 <li className="filter__item"><a href="#" className="filter__link  ">Sale</a></li>
                              </ul>
                              <span className="target"></span>
                           </div>
                           <div className="header-body-catalog__sorting sorting-catalog">
                              <div className="sorting-catalog__label">Short by:</div>
                              <div className="sorting-catalog__select">
                                 <select name="form[]" className="form">
                                    <option value="1" selected>Default sorting</option>
                                    <option value="2">Popularity</option>
                                    <option value="3">Lower price</option>
                                    <option value="4">Higher price</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div className="body-catalog__items">
                           <article className="body-catalog__item item-catalog">
                              <div className="item-catalog__body">
                                 <a href="#" className="item-catalog__image">
                                    <img src="./assets/img/catalog/01.png" alt=" iamge product"/>
                                 </a>
                                 <div className="item-catalog__actions actions-item">
                                    <a href="product-view.html" className="actions-item__link _icon-cart"></a>
                                    <a href="#" className="actions-item__link _icon-heart"></a>
                                    <a href="./assets/img/catalog/product-card-image-01-big.jpeg"
                                       className="actions-item__link _icon-search"></a>
                                 </div>
                              </div>
                              <a href="#" className="item-catalog__name">Barberton Daisy</a>
                              <div className="item-catalog__price">$119.00</div>
                           </article>

                        </div>
                        <div className="body-catalog__pagging">
                           <div className="pagging">
                              <ul className="pagging__list">
                                 <li>
                                    <a href="#" className="pagging__item  _active">1</a>
                                 </li>
                                 <li>
                                    <a href="#" className="pagging__item ">2</a>
                                 </li>
                                 <li>
                                    <a href="#" className="pagging__item ">3</a>
                                 </li>
                                 <li>
                                    <a href="#" className="pagging__item ">4</a>
                                 </li>
                                 <li>
                                    <a href="#" className="pagging__item pagging__arrow   _icon-arrow-right"></a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>


            <section className="page__banners banners">
               <div className="banners__container">
                  <div className="banners__wrapper">
                     <div className="banners__item banner">
                        <div className="banner__body">
                           <div className="banner__image-ibg_contain">
                              <img src="./assets/img/banners/01.png" alt="banner"/>
                           </div>
                           <div className="banner__info">
                              <h4 className="banner__title">Summer cactus <br/>
                                 & succulents</h4>
                              <p className="banner__descr">We are an online plant shop offering a wide range of cheap
                                 and trendy plants</p>
                              <a href="#" className="banner__link button button_icon _icon-arrow-more">Find More</a>
                           </div>
                        </div>
                     </div>
                     <div className="banners__item banner">
                        <div className="banner__body">
                           <div className="banner__image-ibg_contain">
                              <img src="./assets/img/banners/02.png" alt="banner"/>
                           </div>
                           <div className="banner__info">
                              <h4 className="banner__title">Styling Trends <br/>
                                 & much more</h4>
                              <p className="banner__descr">We are an online plant shop offering a wide range of cheap
                                 and trendy plants</p>
                              <a href="#" className="banner__link button button_icon _icon-arrow-more">Find More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>


            <section className="page__blog-post blog-post">
               <div className="blog-post__container">
                  <div className="blog-post__header">
                     <h3 className="blog-post__title">Our Blog Posts</h3>
                     <p className="blog-post__descr">We are an online plant shop offering a wide range of cheap and
                        trendy plants.</p>
                  </div>
                  <div className="blog-post__items">
                     <article className="blog-post__item item-blog-post">
                        <div className="item-blog-post__image">
                           <img src="./assets/img/blog-post/01.jpg" alt="image post "/>
                        </div>
                        <div className="item-blog-post__body">
                           <div className="item-blog-post__info"><span
                              className="item-blog-post__date">September 12</span> <span
                              className="item-blog-post__read">Read in 6 minutes</span></div>
                           <a href="#" className="item-blog-post__title">Cactus & Succulent <br/> Care Tips</a>
                           <p className="item-blog-post__text">Cacti are succulents are easy care plants for any home or
                              patio.</p>
                           <a href="#" className="item-blog-post__link _icon-arrow-more">Read More </a>
                        </div>
                     </article>
                     <article className="blog-post__item item-blog-post">
                        <div className="item-blog-post__image">
                           <img src="./assets/img/blog-post/02.jpg" alt="image post "/>
                        </div>
                        <div className="item-blog-post__body">
                           <div className="item-blog-post__info"><span
                              className="item-blog-post__date">September 13</span> <span
                              className="item-blog-post__read">Read in 2 minutes</span></div>
                           <a href="#" className="item-blog-post__title">Top 10 Succulents for <br/>
                              Your Home</a>
                           <p className="item-blog-post__text">Best in hanging baskets. Prefers medium to high
                              light.</p>
                           <a href="#" className="item-blog-post__link _icon-arrow-more">Read More</a>
                        </div>
                     </article>
                     <article className="blog-post__item item-blog-post">
                        <div className="item-blog-post__image">
                           <img src="./assets/img/blog-post/03.jpg" alt="image post "/>
                        </div>
                        <div className="item-blog-post__body">
                           <div className="item-blog-post__info"><span
                              className="item-blog-post__date">September 15</span> <span
                              className="item-blog-post__read">Read in 3 minutes</span></div>
                           <a href="#" className="item-blog-post__title">Cacti & Succulent <br/>
                              Care Tips</a>
                           <p className="item-blog-post__text">Cacti and succulents thrive in containers and because
                              most are..Cacti and succulents thrive in containers and because most are..</p>
                           <a href="#" className="item-blog-post__link _icon-arrow-more">Read More</a>
                        </div>
                     </article>
                     <article className="blog-post__item item-blog-post">
                        <div className="item-blog-post__image">
                           <img src="./assets/img/blog-post/04.jpg" alt="image post "/>
                        </div>
                        <div className="item-blog-post__body">
                           <div className="item-blog-post__info"><span
                              className="item-blog-post__date">September 15</span> <span
                              className="item-blog-post__read">Read in 3 minutes</span></div>
                           <a href="#" className="item-blog-post__title">Best Houseplants <br/>
                              Room by Room</a>
                           <p className="item-blog-post__text">The benefits of houseplants are endless. In addition
                              to..</p>
                           <a href="#" className="item-blog-post__link _icon-arrow-more">Read More</a>
                        </div>
                     </article>
                  </div>
               </div>
            </section>

         </main>
         <Footer/>
      </div>
   );
}

export default App;
