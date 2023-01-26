import React from 'react'
import img from "../Assests/Photos/client-3.png"
import img1 from "../Assests/Photos/client-4.png"
import img2 from "../Assests/Photos/client-1.png"
import img3 from "../Assests/Photos/client-6.png"
import img4 from "../Assests/Photos/client-5.png"
import img5 from "../Assests/Photos/client-7.png"
import img6 from "../Assests/Photos/client-8.png"
const Brands = () => {
  return (
    <>
      <div className="client">
        <h2 className="service-head pt-5 pb-2">Our Clients</h2>
        <div className="client_slider">
            <marquee behavior="scroll" direction="left-side">
                <div className="swiper_slide">
                    <img src={img} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img1} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img2} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img3} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img4} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img5} className="img-fluid" alt=""/>
                </div>
                <div className="swiper_slide">
                    <img src={img6} className="img-fluid" alt=""/>
                </div>
               
            </marquee>
        </div>

    </div>
    </>
  )
}

export default Brands;