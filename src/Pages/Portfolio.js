import React from 'react'
import img1 from "../Assests/Photos/app-1.jpg"
import img2 from "../Assests/Photos/product-1.jpg"
import img3 from "../Assests/Photos/branding-1.jpg"
import img4 from "../Assests/Photos/books-1.jpg"
import img5 from "../Assests/Photos/app-2.jpg"
import img6 from "../Assests/Photos/product-2.jpg"
import img7 from "../Assests/Photos/branding-2.jpg"
import img8 from "../Assests/Photos/books-2.jpg"
import img9 from "../Assests/Photos/app-3.jpg"
import img10 from "../Assests/Photos/product-3.jpg"
import img11 from "../Assests/Photos/branding-3.jpg"
import img12 from "../Assests/Photos/books-3.jpg"
const Portfolio = () => {
  return (
    <>
     <section className="portfolio mb-4">
        <div className="container">
            <div className="text-center">
                <h1 className="service-head pt-5 pb-2">Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas vitae quia non est dolor.
                    </p>
            </div>
            <div>
                <ul className="portfolio-filters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-product">Product</li>
                    <li data-filter=".filter-branding">Branding</li>
                    <li data-filter=".filter-books">Books</li>
                </ul>
            </div>
            <div className="row gy-4 style-row">
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img1} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>APP 1</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img2} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Product 1</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img3} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Branding 1</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img4} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Books 1</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img5} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>App 2</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img6} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Product 2</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img7} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Branding 2</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img8} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Books 2</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img9} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>App 3</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img10} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Product 3</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img11} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Branding 3</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="portfolio-wrap">
                        <a href="/photos/app-1.jpg"><img src={img12} alt="" className="img-fluid"/></a>
                        <div className="portfolio-info">
                            <h2>Books 3</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio