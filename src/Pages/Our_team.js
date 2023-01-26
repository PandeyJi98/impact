import React from 'react'
import img1 from "../Assests/Photos/abhi4.jpg"


const Our_team = () => {
  return (
    <>
      <section className="our-team">
        <div className="container">
            <div className="text-center">
                <h1 className="service-head pt-5 pb-2">Our Team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas vitae quia non est dolor.
                    </p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-6 mt-4">
                    <div className="team">
                    <img src={img1} alt="" className="img-fluid"/>
                        <h3>Abhishe Pandey</h3>
                        <span>Web Developer</span>
                        <div className="social d-flex justify-content-center">
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.linkdin.com"><i className="fa-brands fa-linkedin"></i></a></li></ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 mt-4">
                    <div className="team">
                    <img src={img1} alt="" className="img-fluid"/>
                        <h3>Abhishe Pandey</h3>
                        <span>Marketing</span>
                        <div className="social d-flex justify-content-center">
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.linkdin.com"><i className="fa-brands fa-linkedin"></i></a></li></ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 mt-4">
                    <div className="team">
                    <img src={img1} alt="" className="img-fluid"/>
                        <h3>Abhishe Pandey</h3>
                        <span>Content</span>
                        <div className="social d-flex justify-content-center">
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.linkdin.com"><i className="fa-brands fa-linkedin"></i></a></li></ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 mt-4">
                    <div className="team">
                    <img src={img1} alt="" className="img-fluid"/>
                        <h3>Abhishe Pandey</h3>
                        <span>Accountant</span>
                        <div className="social d-flex justify-content-center">
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li></ul>
                            <ul className="list-unstyled p-2 m-2"><li><a href="https://www.linkdin.com"><i className="fa-brands fa-linkedin"></i></a></li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Our_team;