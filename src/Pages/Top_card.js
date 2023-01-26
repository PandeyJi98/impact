import React from 'react'
import img from "../Assests/Photos/hero-img.svg"
const Top_card = () => {
  return (
    <>
    <section id="section2" className="section">

<div className="container-fluid">
    <div className="row align-items-center">

        <div className="col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-center text-center">
            <h2>Welcome to Impact</h2>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque
                eum quaerat.</p>
            <a href="https://www.youtube.com/embed/LXb3EKWsInQ"><button type="button"
                    className="btn btn-primary p-4">Get Started</button></a>
            <a href="https://www.youtube.com/embed/LXb3EKWsInQ"><button type="button"
                    className="btn btn-success color-light"><i className="fa fa-play p-4"></i>Get
                    Started</button></a>
        </div>
        <div className="col-lg-6 order-2 order-lg-1">
            <img src={img} alt="Section Image"/>
        </div>
    </div>
</div>

<div className="card-parent position-relative">
    <div className="container position-relative">
        <div className="row gy-4 mt-4">
            <div className="col-xl-3 col-md-6">
                <div className="card-style">
                    <div className="card-body">
                        <i className="fa-sharp fa-solid fa-house pt-5"></i>
                    </div>
                    <h5 className="card-title pt-3"><b>Card title</b></h5>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card-style">
                    <div className="card-body">
                        <i className="fa-sharp fa-solid fa-music pt-5"></i>
                    </div>
                    <h5 className="card-title pt-3"><b>Card title</b></h5>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card-style">
                    <div className="card-body">
                        <i className="fa-sharp fa-solid fa-location-dot mt-5"></i>
                    </div>
                    <h5 className="card-title mt-3"><b>Card title</b></h5>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card-style">
                    <div className="card-body">
                        <i className="fa-sharp fa-solid fa-download pt-5"></i>
                    </div>
                    <h5 className="card-title pt-3"><b>Card title</b></h5>
                </div>
            </div>
        </div>
    </div>
</div>

</section>
    </>
  )
}

export default Top_card;