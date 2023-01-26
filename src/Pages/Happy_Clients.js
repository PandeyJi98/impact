import React from 'react'
import img from "../Assests/Photos/stats-img.svg"
const Happy_Clients = () => {
  return (
    <>
    <div className="container">
        <div className="row gy-4 text-align-center">
            <div className="col-lg-6">
                <img src={img} alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-6">
                <div className="start_items d-flex align-items-center">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0"
                        className="span_start">232</span>
                    <p>
                        <strong>Happy Clients</strong>"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    </p>
                </div>
                <div className="start_items d-flex align-items-center">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0"
                        className="span_start">232</span>
                    <p>
                        <strong>Happy Clients</strong>"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    </p>
                </div>
                <div className="start_items d-flex align-items-center">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0"
                        className="span_start">232</span>
                    <p>
                        <strong>Happy Clients</strong>"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Happy_Clients;