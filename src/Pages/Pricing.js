import React from 'react'

const Pricing = () => {
  return (
    <>
     <section className=" pricing section-bg">
        <div className="container">
            <div className="pricing-header">
                <h1 className="service-head pt-5 pb-2">Pricing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas vitae quia non est dolor.
                </p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="pricing-item">
                        <h3>Free Plan</h3>
                    
                      <div className="icon">
                        <i className="fa-brands fa-discord"></i>
                      </div>
                      <h4>
                        <sup>$</sup>
                        0
                        <span>/month</span>
                       </h4>
                      <ul>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li className="na"><i className="fa-duotone fa-x"></i><span>Lorem ipsum dolor sit amet.</span></li>
                        <li className="na"><i className="fa-duotone fa-x"></i><span>Lorem ipsum dolor sit amet.</span></li>
                      </ul>
                       <div className="text-center">
                        <a href="#" className="buy-btn ">Buy Now</a>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item featured">
                        <h3>Business Plan</h3>
                    
                      <div className="icon">
                        <i className="fa-solid fa-plane-up"></i>
                      </div>
                      <h4>
                        <sup>$</sup>
                        29
                        <span>/month</span>
                       </h4>
                      <ul>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                      </ul>
                       <div className="text-center">
                        <a href="#" className="buy-btn">Buy Now</a>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item">
                        <h3>Developer Plan</h3>
                    
                      <div className="icon">
                        <i className="fa-brands fa-discord"></i>
                      </div>
                      <h4>
                        <sup>$</sup>
                        49
                        <span>/month</span>
                       </h4>
                      <ul>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i className="fa-solid fa-check"></i>Lorem ipsum dolor sit amet.</li>
                      </ul>
                       <div className="text-center">
                        <a href="#" className="buy-btn" >Buy Now</a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing