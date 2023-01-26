import React from 'react'
import img1 from "../Assests/Photos/steve job.jpg"
 import img from "../Assests/Photos/Bill-Gates-2011.webp"
import img2 from "../Assests/Photos/Mark Zuckerberg.webp"
import img3 from "../Assests/Photos/Elon Musk.webp"
const Our_Clients = () => {
  return (
   <>
    <section className="testimonials ">
        <div className="container">
            <div className="our-services">
                <h1 className="service-head pt-5 pb-2">Our Clients</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque.</p>
            </div>
            
            <div className="row gy-4 mb-5 pb-5">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning">
                        <div className="testimonial">
                            <img src={img} className="rounded-circle mt-3" width="80px"
                                height="80px" alt="" />
                            <div className="auther pb-5">Bill Gates</div>
                            <span>Company Name.</span><h2 className="auther-company">Microsoft</h2>
                           
                            <p>
                                <i className="fa-solid fa-quote-left quote"></i> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat
                                cumque possimus quo quam, laudantium aspernatur! <i
                                    className="fa-solid fa-quote-right quote"></i>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning">
                        <div className="testimonial">
                            <img src={img1} className="rounded-circle mt-3" width="80px" height="80px"
                                alt="" />
                            <div className="auther pb-5">Steve Jobs</div>
                            <span>Company Name.</span><h2 className="auther-company">Apple</h2>
                            <p>
                                <i className="fa-solid fa-quote-left quote"></i> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat
                                cumque possimus quo quam, laudantium aspernatur! <i
                                    className="fa-solid fa-quote-right quote"></i>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning">
                        <div className="testimonial">
                            <img src={img2} className="rounded-circle mt-3" width="80px"
                                height="80px" alt="" />
                            <div className="auther pb-5">Mark Zuckerberg</div>
                            <span>Company Name.</span><h2 className="auther-company">Facebook</h2>
                            <p>
                                <i className="fa-solid fa-quote-left quote"></i> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat
                                cumque possimus quo quam, laudantium aspernatur! <i
                                    className="fa-solid fa-quote-right quote"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning">
                        <div className="testimonial">
                            <img src={img3} className="rounded-circle mt-3" width="80px" height="80px"
                                alt="" />
                            <div className="auther pb-5">Elon Musk</div>
                            <span>Company Name.</span><h2 className="auther-company">Tesla</h2>
                            <p>
                                <i className="fa-solid fa-quote-left quote"></i> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat
                                cumque possimus quo quam, laudantium aspernatur! <i
                                    className="fa-solid fa-quote-right quote"></i>
                            </p>

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
   </>
  )
}

export default Our_Clients