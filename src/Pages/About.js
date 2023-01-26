import React from 'react'
import img from "../Assests/Photos/about-2.jpg"
import img2 from "../Assests/Photos/about.jpg"
const About = () => {
  return (
    <>
     <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="service-head pt-5 pb-2">Some Service</h2>
                </div>
                <div className="col-lg-6 left-side">
                    <h1><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b></h1>
                    <img src={img2}  className="img-fluid rounded-4 md-4 mb-4"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto facilis doloribus sed?
                        repellendus in quisquam dolorum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Officia ipsam minima nesciunt officiis similique id mollitia ab atque
                        optio ipsa, neque delectus molestiae vel aut sint</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nobis sint adipisci ipsa,
                        porro,
                        provident praesentium commodi </p>
                </div>
                <div className="col-lg-6 right-side">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, optio quidem! Laudantium
                        tempore quae eum.</p>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laudantium!
                        </li>
                        <li><i className="fa-solid fa-circle-check"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Vero,
                            laudantium!
                        </li>
                        <li><i className="fa-solid fa-circle-check"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laudantium! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Libero, enim!
                        </li>
                    </ul>
                    <div className="position-relative mt-4">
                        <img src={img} alt="" className="img-fluid rounded-4"/>
                        <div className="play-button"><a href="https://youtu.be/LXb3EKWsInQ?t=1"><i
                                    className="fa-brands fa-google-play"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About